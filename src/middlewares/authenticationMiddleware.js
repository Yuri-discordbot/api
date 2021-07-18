import {DiscordAPIClient} from "../discord/discordApiClient.js";

let knownTokens = {};

setInterval(() => {
    knownTokens = {};
}, 604800000); // clear cache every week

const authenticationMiddleware = async (req, res, next) => {
    const authorizationHeader = req.header("Authorization");

    if (authorizationHeader === undefined || authorizationHeader === null) {
        res.status("401").send("Unauthorized");
        return;
    }

    if (!(authorizationHeader.startsWith("Bot ") || authorizationHeader.startsWith("Bearer "))) {
        res.status("401").send("Unauthorized");
        return;
    }

    if (knownTokens[authorizationHeader] === undefined) {
        // token is unknown
        let discordAPIClient = new DiscordAPIClient(authorizationHeader);
        let userInfo = await discordAPIClient.getUserInfo();

        if (userInfo === null) {
            res.status("401").send("Unauthorized");
            return;
        }

        knownTokens[authorizationHeader] = {};
        knownTokens[authorizationHeader].userInfo = userInfo;
        knownTokens[authorizationHeader].discordClient = discordAPIClient;

    }

    req.userInfo = knownTokens[authorizationHeader].userInfo;
    req.discordClient = knownTokens[authorizationHeader].discordClient;

    next();
};

export {authenticationMiddleware};