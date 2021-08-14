import gql from "graphql-tag";
import {CommandService} from "../services/commandService.js";

const typeDef = gql`
    type Command {
        id: ID!,
        name: String!,
        description: String!,
        embed_text: String,
        images_urls: [String],
        nsfw: Boolean!,
        created_at: String!
        updated_at: String
    }

    extend type Query {
        commandsInGuild(guild_id: ID!): [Command]!,
        commandInGuildByName(guild_id: ID!, name: String!): Command,
    }

    extend type Mutation {
        createCommandInGuild(guild_id: ID!, name: String!, description: String!, embed_text: String, images_urls: [String], nsfw: Boolean!): Command,
    }
`;

const resolvers = {
    Query: {
        commandsInGuild: async (_root, args, _context) => {
            return await CommandService.findAllInGuild(args.guild_id)
        },
        commandInGuildByName: async (_root, args, _context) => {
            return await CommandService.findInGuildByName(args.guild_id, args.name)
        }
    },

    Mutation: {
        createCommandInGuild: async (_root, args, context) => {
            return await CommandService.createCommandInGuild(context.currentUser, args.guild_id, args.name, args.description, args.embed_text, args.images_urls, args.nsfw)
        },
    },
}

export {typeDef, resolvers}