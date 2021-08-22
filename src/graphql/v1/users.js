import gql from "graphql-tag"
import {UserService} from "../../services/userService.js"

const typeDef = gql`
    extend type Mutation {
        "Update the administration status of the current user. This might be needed when registering a new guild due to the facts that Yuri uses discord tokens for identifications and caches the adnimistrated guilds in the database"
        updateCurrentUserAdminsGuilds: String
    }
`

const resolvers = {
    Mutation: {
        updateCurrentUserAdminsGuilds: async (_root, _args, context) => {
            await UserService.updateAdminsGuild(context.currentUser, context.authToken)
            return "Ok"
        }
    }
}

export {typeDef, resolvers}