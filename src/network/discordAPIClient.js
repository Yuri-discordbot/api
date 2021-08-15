import axios from "axios"
import {environment} from "../env.js"
import {StatusCodes} from "http-status-codes"

/*** TODO: ADD RATE LIMITING ***/

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
            const response = await this.client.post(`applications/${environment.applicationId}/guilds/${guildDiscordId}/commands`, {
                type: 1, // CHAT INPUT
                name: name.toLowerCase(),
                description,
                options: [
                    {
                        type: 9, // mentionable
                        name: "receiver",
                        description: `Who should receive '${name}'?`,
                        required: true
                    },
                    {
                        type: 3, // string
                        name: "options",
                        description: `Offer or ask ${name}`,
                        required: false,
                        choices: [
                            {
                                name: "offer",
                                value: "offer"
                            },
                            {
                                name: "ask",
                                value: "ask"
                            },
                        ]
                    }
                ]
            })

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
}

export {DiscordAPIClient}