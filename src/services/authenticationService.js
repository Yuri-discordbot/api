import {DiscordApiService} from "../services/discordApiService.js";
import {UserService} from "../services/userService.js";

let knownTokens = {};

setInterval(() => {
    knownTokens = {};
}, 604800000); // clear cache every week

let userService = new UserService();

class AuthenticationService {
    async tradeTokenForUser(token) {
        if (!token) return null;

        let userId = knownTokens[token];

        return userId
            ? await userService.getById(userId)
            : await this.checkTokenWithDiscordAndConvertToUser(token);
    }

    async checkTokenWithDiscordAndConvertToUser(token) {
        const discordApiService = new DiscordApiService(token);
        const userInfo = await discordApiService.getUserInfo();

        if (!userInfo) return null;

        let user = await userService.getByDiscordId(userInfo.id);

        if (!user) {
            const userGuilds = await discordApiService.getUserGuilds();
            user = await userService.createUserFromDiscordData(userInfo, userGuilds);
        }

        knownTokens[token] = user._id;
        return user;
    }
}

export {AuthenticationService};