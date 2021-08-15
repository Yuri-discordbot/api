import gql from "graphql-tag"
import {CommandService} from "../../services/commandService.js"

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
        deleteCommandInGuild(guild_id: ID!, command_id: ID!): String
    }
`

const resolvers = {
    Query: {
        commandsInGuild: async (_root, args, _context) => {
            return CommandService.findAllInGuild(args.guild_id)
        },
        commandInGuildByName: async (_root, args, _context) => {
            return CommandService.findInGuildByName(args.guild_id, args.name)
        }
    },

    Mutation: {
        createCommandInGuild: async (_root, args, context) => {
            return CommandService.createCommandInGuild(context.currentUser, args.guild_id, args.name, args.description, args.embed_text, args.images_urls, args.nsfw)
        },
        deleteCommandInGuild: async (_root, args, context) => {
            await CommandService.deleteCommandInGuild(context.currentUser, args.guild_id, args.command_id)
            return "Ok"
        }
    },
}

export {typeDef, resolvers}