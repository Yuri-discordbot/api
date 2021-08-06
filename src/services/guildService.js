import {Guild} from "../schemas/guild.js";

class GuildService {
    async findGuildByDiscordId(discordId) {
        return Guild.findOne({"discord_id": discordId})
    }
}

export {GuildService}