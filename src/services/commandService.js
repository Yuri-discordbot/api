import {AuthorizationService} from "./authorizationService.js";
import {Guild} from "../schemas/guild.js";

const CommandService = {
    findAllInGuild: async (guildId) => {
        let guild = await Guild.findById(guildId);
        if (!guild) return null

        return guild.commands;
    },

    findInGuildByName: async (guildId, name) => {
        let guild = await Guild.findById(guildId)
        if (!guild) return null

        return guild.commands.find(command => command.name === name.toLowerCase())
    },

    createCommandInGuild: async (currentUser, guildId, name, embed_text, images_urls, nsfw) => {
        if (!await AuthorizationService.canUserEditGuild(currentUser, guildId)) {
            throw new Error("You do no have the permissions to edit this guild")
        }

        let updated = await Guild.findOneAndUpdate({
            _id: guildId,
            'commands.name': {
                $ne: name // make sure the name we are inserting is not already there
            }
        }, {
            $push: {
                commands: {
                    name,
                    embed_text,
                    images_urls,
                    nsfw
                }
            }
        }, {
            new: true
        });
        if (updated) {
            return updated.commands.find(command => command.name === name.toLowerCase());
        } else {
            throw new Error(`Command with name '${name}' already exists in this guild`)
        }
    }
}

export {CommandService}