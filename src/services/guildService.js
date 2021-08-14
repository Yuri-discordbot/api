import {Guild} from "../schemas/guild.js";

const GuildService = {
    findAll: async () => {
        return Guild.find()
    },

    findById: (id) => {
        return Guild.findById(id);
    },

    findByDiscordId: async (discordId) => {
        return Guild.findOne({"discord_id": discordId})
    },

    createGuild: async (discordId) => {
        let guild = new Guild({"discord_id": discordId});

        try {
            return await guild.save();
        } catch (e) {
            return null;
        }
    }
}

export {GuildService}