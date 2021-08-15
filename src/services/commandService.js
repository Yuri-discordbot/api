import {AuthorizationService} from "./authorizationService.js"
import {Guild} from "../schemas/guild.js"
import {DiscordAPIClient} from "../network/discordAPIClient.js"
import {environment} from "../env.js"

const findCommandWithNameInGuild = (guild, commandName) => {
    return guild.commands.find(command => command.name === commandName.toLowerCase())
}

const CommandService = {
    findAllInGuild: async (guildId) => {
        const guild = await Guild.findById(guildId)
        if (!guild) return null

        return guild.commands
    },

    findInGuildByName: async (guildId, name) => {
        const guild = await Guild.findById(guildId)
        if (!guild) return null

        return findCommandWithNameInGuild(guild, name)
    },

    createCommandInGuild: async (currentUser, guildId, name, description, embed_text, images_urls, nsfw) => {
        if (!await AuthorizationService.canUserEditGuild(currentUser, guildId)) {
            throw new Error("You do not have the permissions to edit this guild")
        }

        let guild = await Guild.findById(guildId)
        if (!guild) {
            throw new Error("The requested guild does not exists")
        }

        if (findCommandWithNameInGuild(guild, name)) {
            throw new Error(`The command ${name}' already exists in this guild`)
        }

        const client = new DiscordAPIClient(`Bot ${environment.botToken}`)
        const createdCommand = await client.createGuildCommand(guild.discord_id, name, description)

        guild.commands.push({
            name,
            description,
            embed_text,
            images_urls,
            nsfw,
            discord_id: createdCommand.id
        })

        guild = await guild.save()

        return findCommandWithNameInGuild(guild, name)
    },

    deleteCommandInGuild: async (currentUser, guildId, commandId) => {
        if (!await AuthorizationService.canUserEditGuild(currentUser, guildId)) {
            throw new Error("You do not have the permissions to edit this guild")
        }

        const guild = await Guild.findById(guildId)
        if (!guild) {
            throw new Error("The requested guild does not exists")
        }

        const commandIndex = guild.commands.findIndex(command => String(command._id) === commandId)

        // eslint-disable-next-line no-magic-numbers
        if (commandIndex === -1) {
            throw new Error("The requested command does not exists")
        }

        const client = new DiscordAPIClient(`Bot ${environment.botToken}`)
        await client.deleteGuildCommand(guild.discord_id, guild.commands[commandIndex].discord_id)

        // eslint-disable-next-line no-magic-numbers
        guild.commands.splice(commandIndex, 1)
        guild.save()
    }
}

export {CommandService}