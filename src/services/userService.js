import {User} from "../schemas/user.js"
import {GuildService} from "./guildService.js"
import {DiscordAPIClient} from "../network/discordAPIClient.js"

const MANAGE_GUILD_PERMISSION = 0x0000000020

const fetchAdministratedGuilds = async (token) => {
    const client = new DiscordAPIClient(token)

    const guilds = await client.getUserGuilds()

    return Promise.all(
        guilds
            .filter(guild => (guild.permissions & MANAGE_GUILD_PERMISSION) === MANAGE_GUILD_PERMISSION)
            .map(async guild => GuildService.findByDiscordId(guild.id))
    )
}

const UserService = {
    getById: async (id) => {
        return User.findById(id)
    },

    getByDiscordId: async (discordId) => {
        return User.findOne({"discord_id": discordId})
    },

    createUserFromDiscordProfile: async (userInfo, userToken) => {
        let user = new User({
            discord_id: userInfo.id,
            is_global_admin: userInfo.id === "223125131730485249", // allow me to be a global user ;)
            admins_guilds: await fetchAdministratedGuilds(userToken),
        })

        user = await user.save()

        console.log("registered new user")
        console.log(user)

        return user
    },

    updateAdminsGuild: async (currentUser, userToken) => {
        await User.findByIdAndUpdate(currentUser._id, {
            admins_guilds: await fetchAdministratedGuilds(userToken)
        })
    },

    userAdminsGuild: async (userId, guildId) => {
        const user = await User.findById(userId)
        if (!user) {
            // user is not even in the database
            return false
        }

        return user.is_global_admin || user.admins_guilds.includes(guildId)
    }
}

export {UserService}