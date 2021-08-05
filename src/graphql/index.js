import _ from "lodash"
import {makeExecutableSchema} from "graphql-tools";
import gql from "graphql-tag";

import {resolvers as commandsResolver, typeDef as commandsTypeDef} from "./commands.js";

const query = gql`
    type Query {
        _empty: String
    }
`;

const schema = makeExecutableSchema({
    typeDefs: [query, commandsTypeDef],
    resolvers: _.merge({}, commandsResolver)
});

export {schema}