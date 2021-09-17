import {AuthorizationService} from "./authorizationService.js"
import {Guild} from "../schemas/guild.js"
import {DiscordAPIClient} from "../network/discordAPIClient.js"
import {environment} from "../env.js"
import {legacyCommands} from "../legacyCommands.js"

const findCommandByNameInGuild = (guild, commandName) => {
    return guild.commands.find(command => command.name === commandName.toLowerCase())
}

const getGuildByIdAndThrowIfNotExists = async (guildId) => {
    const guild = await Guild.findById(guildId)

    if (!guild) {
        throw new Error("The specified guild does not exists")
    }

    return guild
}

const CommandService = {
    findAllInGuild: async (guildId) => {
        const guild = await getGuildByIdAndThrowIfNotExists(guildId)

        return guild.commands
    },

    findAllInGuildById: async (guildId, commandId) => {
        const guild = await getGuildByIdAndThrowIfNotExists(guildId)

        return guild.commands.find(command => String(command._id) === commandId)
    },

    findInGuildByName: async (guildId, name) => {
        const guild = await getGuildByIdAndThrowIfNotExists(guildId)

        return findCommandByNameInGuild(guild, name)
    },

    createCommandInGuild: async (currentUser, guildId, name, description, embed_text, images_urls, nsfw) => {
        if (!await AuthorizationService.canUserEditGuild(currentUser, guildId)) {
            throw new Error("You do not have the permissions to edit this guild")
        }

        let guild = await getGuildByIdAndThrowIfNotExists(guildId)

        if (findCommandByNameInGuild(guild, name)) {
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

        return findCommandByNameInGuild(guild, name)
    },

    editCommandInGuild: async (currentUser, guildId, commandId, name, description, embed_text, images_urls, nsfw) => {
        if (!await AuthorizationService.canUserEditGuild(currentUser, guildId)) {
            throw new Error("You do not have the permissions to edit this guild")
        }

        const guild = await getGuildByIdAndThrowIfNotExists(guildId)

        const commandIndex = guild.commands.findIndex(command => String(command._id) === commandId)

        // eslint-disable-next-line no-magic-numbers
        if (commandIndex === -1) {
            throw new Error("The requested command does not exists")
        }

        if (name || description) {
            const client = new DiscordAPIClient(`Bot ${environment.botToken}`)
            await client.editGuildCommand(guild.discord_id, guild.commands[commandIndex].discord_id, {
                name,
                description
            })
        }

        guild.commands[commandIndex].name = name || guild.commands[commandIndex].name
        guild.commands[commandIndex].description = description || guild.commands[commandIndex].description
        guild.commands[commandIndex].embed_text = embed_text || guild.commands[commandIndex].embed_text
        guild.commands[commandIndex].images_urls = images_urls || guild.commands[commandIndex].images_urls
        guild.commands[commandIndex].nsfw = nsfw || guild.commands[commandIndex].nsfw

        guild.save()

        return guild.commands[commandIndex]
    },

    deleteCommandInGuild: async (currentUser, guildId, commandId) => {
        if (!await AuthorizationService.canUserEditGuild(currentUser, guildId)) {
            throw new Error("You do not have the permissions to edit this guild")
        }

        const guild = await getGuildByIdAndThrowIfNotExists(guildId)

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
    },

    addLegacyCommands: async (currentUser, guildId) => {
        if (!await AuthorizationService.canUserEditGuild(currentUser, guildId)) {
            throw new Error("You do not have the permissions to edit this guild")
        }

        const guild = await getGuildByIdAndThrowIfNotExists(guildId)

        // merge the legacy commands with the existing ones in case there is one that has
        for (const legacyCommand of legacyCommands) {
            let found = false
            for (const guildCommand of guild.commands) {
                if (legacyCommand.name === guildCommand.name) {
                    found = true
                }
            }

            if (!found) {
                guild.commands.push(legacyCommand)
            }
        }

        const client = new DiscordAPIClient(`Bot ${environment.botToken}`)
        const newCommands = await client.batchEditGuildCommands(guild.discord_id, guild.commands)

        for (let i = 0; i < guild.commands.length; i++) {
            guild.commands[i].discord_id = newCommands[i].id
        }

        guild.save()
        return guild.commands
    }
}

export {CommandService}