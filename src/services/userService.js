import {User} from "../schemas/user.js";
import {GuildService} from "./guildService.js";

const MANAGE_GUILD_PERMISSION = 0x0000000020;

const UserService = {
    getById: async (id) => {
        return User.findById(id);
    },

    getByDiscordId: async (discordId) => {
        return User.findOne({"discord_id": discordId});
    },

    createUserFromDiscordData: async (userInfo, guilds) => {
        let admins_guilds = await Promise.all(
            guilds.filter((guild) => {
                // bitwise fuckery to check permissions
                return ((guild.permissions & MANAGE_GUILD_PERMISSION) === MANAGE_GUILD_PERMISSION);
            }).map(async (guild) => {
                return await GuildService.findByDiscordId(guild.id);
            })
        );

        let user = new User({
            discord_id: userInfo.id,
            is_global_admin: userInfo.id === "223125131730485249", // allow me to be a global user ;)
            admins_guilds,
        });

        user = await user.save();
        return user;
    },

    userAdminsGuild: async (userId, guildId) => {
        const user = await User.findById(userId);
        if (!user) {
            // user is not even in the database
            return false
        }

        return user.is_global_admin || user.admins_guilds.includes(guildId)
    }
}

export {UserService};