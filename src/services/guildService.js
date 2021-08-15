import {Guild} from "../schemas/guild.js"

const GuildService = {
    findAll: async () => {
        return Guild.find()
    },

    findById: (id) => {
        return Guild.findById(id)
    },

    findByDiscordId: async (discordId) => {
        return Guild.findOne({"discord_id": discordId})
    },

    createGuild: async (discordId) => {
        let guild = new Guild({"discord_id": discordId})

        try {
            guild = await guild.save()



            return guild
        } catch (e) {
            console.log(e)
            throw new Error("This guild is already registered")
        }
    }
}

export {GuildService}