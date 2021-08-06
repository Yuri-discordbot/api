import lodash from "lodash"
import {makeExecutableSchema} from "@graphql-tools/schema";
import gql from "graphql-tag";

import {resolvers as commandResolver, typeDef as commandTypeDef} from "./command.js";
import {resolvers as guildResolvers, typeDef as guildTypeDef} from "./guild.js";

const query = gql`
    type Query {
        _empty: String
    }
    
    type Mutation {
        _empty: String
    }
`;

const schema = makeExecutableSchema({
    typeDefs: [query, commandTypeDef, guildTypeDef],
    resolvers: lodash.merge({}, commandResolver, guildResolvers)
});

export {schema}