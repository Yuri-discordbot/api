import axios from "axios";
import {environment} from "../env.js";

/*** TODO: ADD RATE LIMITING ***/

const applicationId = environment.applicationId

class DiscordAPIClient {
    constructor(token) {
        this.client = axios.create({
            baseURL: "https://discord.com/api/v9",
            headers: {
                Authorization: token,
                'Content-Type': "application/json",
                Accept: "application/json"
            },
        });
    }

    async getUserInfo() {
        try {
            const response = await this.client.get("/users/@me");
            return response.data;
        } catch (err) {
            // something went wrong
            throw new Error("Failed to get user info from token. Do you have the 'identify' scope in your token?")
        }
    }

    async getUserGuilds() {
        try {
            const response = await this.client.get("/users/@me/guilds");
            return response.data;
        } catch (err) {
            throw new Error("Failed to get the guilds for the user. Do you have the 'guilds' scope in your token?")
        }
    }

    async createGuildCommand(guildDiscordId, name, description) {
        try {
            await this.client.post(`applications/${applicationId}/guilds/${guildDiscordId}/commands`, {
                type: 1, // CHAT INPUT
                name,
                description,
                options: [
                    {
                        type: 9, // mentionable
                        name: "receiver",
                        description: `Who do should receive '${name}'?`,
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
        } catch (e) {
            throw new Error("Failed to register guild command")
        }
    }
}

export {DiscordAPIClient};