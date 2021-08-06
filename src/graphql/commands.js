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
        commands: (_root, _args, _context) => {
            return Command.find();
        },
        command: (_root, args, _context) => {
            return Command.findOne({"name": args.name});
        }
    }
}

export {typeDef, resolvers}