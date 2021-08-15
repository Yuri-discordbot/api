import gql from "graphql-tag"
import {UserService} from "../services/userService.js"

const typeDef = gql`
    extend type Mutation {
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