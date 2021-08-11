import axios from "axios";

/*** TODO: ADD RATE LIMITING ***/

class DiscordAPIClient {
    constructor(token) {
        this.client = axios.create({
            baseURL: "https://discord.com/api/v9",
            headers: {
                Authorization: token
            },
        });
    }

    async getUserInfo() {
        try {
            const response = await this.client.get("/users/@me");
            return response.data;
        } catch (err) {
            // something went wrong
            return null;
        }
    }

    async getUserGuilds() {
        try {
            const response = await this.client.get("/users/@me/guilds");
            return response.data;
        } catch (err) {
            return null;
        }
    }
}

export {DiscordAPIClient};