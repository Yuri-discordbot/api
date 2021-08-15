import lodash from "lodash"
import {makeExecutableSchema} from "@graphql-tools/schema"
import gql from "graphql-tag"

import {resolvers as commandResolver, typeDef as commandTypeDef} from "./command.js"
import {resolvers as guildResolvers, typeDef as guildTypeDef} from "./guild.js"
import {resolvers as userResolvers, typeDef as userTypeDef} from "./users.js"

const query = gql`
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`

const schema = makeExecutableSchema({
    typeDefs: [query, commandTypeDef, guildTypeDef, userTypeDef],
    resolvers: lodash.merge({}, commandResolver, guildResolvers, userResolvers)
})

export {schema}