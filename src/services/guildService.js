import {Guild} from "../schemas/guild.js";

class GuildService {
    async findAll() {
        return Guild.find();
    }

    async findByDiscordId(discordId) {
        return Guild.findOne({"discord_id": discordId})
    }

    async createGuild(discordId) {
        let guild = new Guild({"discord_id": discordId});

        try {
            return await guild.save();
        } catch (e) {
            return null;
        }
    }
}

export {GuildService}