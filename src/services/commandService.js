import {AuthorizationService} from "./authorizationService.js";
import {Guild} from "../schemas/guild.js";
import {DiscordAPIClient} from "../network/discordAPIClient.js";
import {environment} from "../env.js";

const botToken = environment.botToken

const commandWithSameNameInGuild = (guild, commandName) => {
    return guild.commands.find(command => command.name === commandName.toLowerCase())
}

const CommandService = {
    findAllInGuild: async (guildId) => {
        let guild = await Guild.findById(guildId);
        if (!guild) return null

        return guild.commands;
    },

    findInGuildByName: async (guildId, name) => {
        let guild = await Guild.findById(guildId)
        if (!guild) return null

        return commandWithSameNameInGuild(guild, name)
    },

    createCommandInGuild: async (currentUser, guildId, name, description, embed_text, images_urls, nsfw) => {
        if (!await AuthorizationService.canUserEditGuild(currentUser, guildId)) {
            throw new Error("You do no have the permissions to edit this guild")
        }

        let guild = await Guild.findById(guildId)
        if (!guild) {
            throw new Error("The requested guild does not exists")
        }

        if (commandWithSameNameInGuild(guild, name)) {
            throw new Error(`The command ${name}' already exists in this guild`)
        }

        let client = new DiscordAPIClient(`Bot ${botToken}`)
        await client.createGuildCommand(guild.discord_id, name, description)

        guild.commands.push({
            name,
            description,
            embed_text,
            images_urls,
            nsfw
        })

        guild = await guild.save()

        return commandWithSameNameInGuild(guild, name)
    }
}

export {CommandService}