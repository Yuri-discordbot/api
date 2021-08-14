import {DiscordAPIClient} from "../network/discordAPIClient.js"
import {UserService} from "./userService.js"

let knownTokens = {}

const SECONDS_IN_ONE_DAY = 86400
setInterval(() => {
    knownTokens = {}
}, SECONDS_IN_ONE_DAY) // clear cache every day

const checkTokenWithDiscordAndConvertToUser = async (token) => {
    const discordApiService = new DiscordAPIClient(token)
    const userInfo = await discordApiService.getUserInfo()

    if (!userInfo) {
        console.log("Could not retrieve user info from discord")
        return null
    }

    let user = await UserService.getByDiscordId(userInfo.id)

    if (!user) {
        const userGuilds = await discordApiService.getUserGuilds()
        user = await UserService.createUserFromDiscordData(userInfo, userGuilds)
    }

    knownTokens[token] = user._id
    return user
}

const AuthenticationService = {
    tradeTokenForUser: async (token) => {
        if (!token) return null

        const userId = knownTokens[token]

        return userId
            ? UserService.getById(userId)
            : checkTokenWithDiscordAndConvertToUser(token)
    }
}

export {AuthenticationService}