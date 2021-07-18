import {DiscordAPIClient} from "../discord/discordApiClient";

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

    let token;
    if (authorizationHeader.startsWith("Bot ")) {
        console.log("bot");
        token = authorizationHeader.substr("Bot ".length);
    } else if (authorizationHeader.startsWith("Bearer ")) {
        console.log("Bearer");
        token = authorizationHeader.substr("Bearer ".length);
    } else {
        console.log("wtf");
        res.status("401").send("Unauthorized");
        return;
    }

    if (knownTokens[token] === undefined) {
        // token is unknown

        let discordAPIClient = new DiscordAPIClient(authorizationHeader);
        let userInfo = await discordAPIClient.getUserInfo();

        if (userInfo === null) {
            res.status("401").send("Unauthorized");
            return;
        }

        knownTokens[token].userInfo = userInfo;
        knownTokens[token].discordClient = discordAPIClient;
    }

    req.userInfo = knownTokens[token].userInfo;
    req.discordClient = knownTokens[token].discordClient;

    next();
};

export {authenticationMiddleware};