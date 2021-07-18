import axios from "axios";
import {DiscordRateLimiter} from "./discordRateLimiter.js";

/*** TODO: ADD RATE LIMITING ***/

class DiscordAPIClient {
    constructor(token) {
        this.client = axios.create({
            baseURL: "https://discord.com/api/v9",
            headers: {
                Authorization: token
            },
        });

        this.rateLimiter = new DiscordRateLimiter(this.client);
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
}

export {DiscordAPIClient};