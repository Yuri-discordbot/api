import {User} from "../schemas/user.js";
import {GuildService} from "./guildService.js";

const MANAGE_GUILD_PERMISSION = 0x0000000020;

const guildService = new GuildService();

class UserService {
    async getById(id) {
        return User.findById(id);
    }

    async getByDiscordId(discordId) {
        return User.findOne({"discord_id": discordId});
    }

    async createUserFromDiscordData(userInfo, guilds) {
        let admins_guilds = await guilds.filter((guild) => {
            // bitwise fuckery to check permissions
            return ((guild.permissions & MANAGE_GUILD_PERMISSION) === MANAGE_GUILD_PERMISSION);
        }).map(async (guild) => {
            return await guildService.findGuildByDiscordId(guild.id);
        }).filter((guild) => {
            return guild === undefined;
        });

        let user = new User({
            discord_id: userInfo.id,
            global_admin: userInfo.id === "223125131730485249", // allow me to be a global user ;)
            admins_guilds,
        });

        user = await user.save();
        return user;
    }
}

export {UserService};