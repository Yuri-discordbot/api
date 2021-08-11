import {DiscordAPIClient} from "../network/discordAPIClient.js";
import {UserService} from "./userService.js";

let knownTokens = {};

setInterval(() => {
    knownTokens = {};
}, 604800000); // clear cache every week

const checkTokenWithDiscordAndConvertToUser = async (token) => {
    const discordApiService = new DiscordAPIClient(token);
    const userInfo = await discordApiService.getUserInfo();

    if (!userInfo) return null;

    let user = await UserService.getByDiscordId(userInfo.id);

    if (!user) {
        const userGuilds = await discordApiService.getUserGuilds();
        user = await UserService.createUserFromDiscordData(userInfo, userGuilds);
    }

    knownTokens[token] = user._id;
    return user;
}

const AuthenticationService = {
    tradeTokenForUser: async (token) => {
        if (!token) return null;

        let userId = knownTokens[token];

        return userId
            ? await UserService.getById(userId)
            : await checkTokenWithDiscordAndConvertToUser(token);
    }
}

export {AuthenticationService};