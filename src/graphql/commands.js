import gql from "graphql-tag";
import {Command} from "../schemas/command.js";

const typeDef = gql`
    type Command {
        id: ID!,
        name: String!,
        embed_text: String,
        images_urls: [String]
    }

    extend type Query {
        commands: [Command]!,
        command(name: String!): Command,
    }
`;

const resolvers = {
    Query: {
        commands: () => {
            return Command.find();
        },
        command: (_, {name}) => {
            return Command.findOne({"name": name});
        }
    }
}

export {typeDef, resolvers}