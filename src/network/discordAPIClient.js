import axios from "axios"
import {environment} from "../env.js"
import {StatusCodes} from "http-status-codes"

/*** TODO: ADD RATE LIMITING ***/

const discordifyCommand = (command) => {
    return {
        type: 1, // CHAT INPUT
        name: command.name,
        description: command.description,
        options: [
            {
                type: 9, // mentionable
                name: "receiver",
                description: `Who should receive \`${command.name}\`?`,
                required: true
            },
            {
                type: 3, // string
                name: "options",
                description: `Offer or ask \`${command.name}\``,
                required: false,
                choices: [
                    {
                        name: "offer",
                        value: "offer",
                    },
                    {
                        name: "ask",
                        value: "ask",
                    }
                ]
            }
        ]
    }
}

class DiscordAPIClient {
    constructor(token) {
        this.client = axios.create({
            baseURL: "https://discord.com/api/v9",
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
                Accept: "application/json"
            },
        })
    }

    async getUserInfo() {
        try {
            const response = await this.client.get("/users/@me")
            return response.data
        } catch (e) {
            console.log(e)
            throw new Error("Failed to get user info from token. Do you have the 'identify' scope in your token?")
        }
    }

    async getUserGuilds() {
        try {
            const response = await this.client.get("/users/@me/guilds")
            return response.data
        } catch (e) {
            console.log(e)
            throw new Error("Failed to get the guilds for the user. Do you have the 'guilds' scope in your token?")
        }
    }

    async createGuildCommand(guildDiscordId, name, description) {
        try {
            const response = await this.client.post(`applications/${environment.applicationId}/guilds/${guildDiscordId}/commands`, discordifyCommand({
                name,
                description
            }))

            return response.data
        } catch (e) {
            console.log(e)
            if (e.response.status === StatusCodes.FORBIDDEN) {
                throw new Error("Please add the bot to your server before deleting commands")
            } else {
                throw new Error("Failed to register guild command")
            }
        }
    }

    async editGuildCommand(guildDiscordId, commandDiscordId, patch) {
        try {
            const response = await this.client.patch(`applications/${environment.applicationId}/guilds/${guildDiscordId}/commands/${commandDiscordId}`, patch)
            return response.data
        } catch (e) {
            console.warn(e)
            if (e.response.status === StatusCodes.FORBIDDEN) {
                throw new Error("Please add the bot to your server before editing commands")
            } else {
                throw new Error("Failed to delete guild command")
            }
        }
    }

    async deleteGuildCommand(guildDiscordId, commandDiscordId) {
        try {
            const response = await this.client.delete(`applications/${environment.applicationId}/guilds/${guildDiscordId}/commands/${commandDiscordId}`)
            return response.data
        } catch (e) {
            console.log(e)
            if (e.response.status === StatusCodes.FORBIDDEN) {
                throw new Error("Please add the bot to your server before deleting commands")
            } else {
                throw new Error("Failed to delete guild command")
            }
        }
    }

    async batchEditGuildCommands(guildDiscordId, commands) {

        const discordCommands = commands.map(command => discordifyCommand(command))

        try {
            const response = await this.client.put(`/applications/${environment.applicationId}/guilds/${guildDiscordId}/commands`,
                discordCommands)
            return response.data
        } catch (e) {
            console.log(e)
            if (e.response.status === StatusCodes.FORBIDDEN) {
                throw new Error("Please add the bot to your server before deleting commands")
            } else {
                throw new Error("Failed to edit guild commands")
            }
        }
    }
}

export {DiscordAPIClient}