import gql from "graphql-tag"
import {CommandService} from "../../services/commandService.js"

const typeDef = gql`
    "The object representing a guild command"
    type Command {
        "The unique id of the command"
        id: ID!,
        "The name of the command is unique per guild"
        name: String!,
        "The description of the command"
        description: String!,
        "The text that appears in the discord message when a command is invoked"
        embed_text: String!,
        "A list of images that should be displayed randomly when invoking a command"
        images_urls: [String],
        "If the command should be restricted to NSFW channels"
        nsfw: Boolean!,
        "The timestamp at which the command has been created"
        created_at: String!
        "The timestamp at which the command has been last updated"
        updated_at: String
    }

    "All the data required to create a command in a guild"
    input CreateCommandInput {
        "The id of the guild in which the command should be created"
        guild_id: ID!,
        "The name of the command to create, must not already exists"
        name: String!,
        "The description of the command to create"
        description: String!,
        "The text that should be used when invoking the command. %sender and %receiver will be converted to their respective mention on invokation"
        embed_text: String!,
        "An array of image urls that can appear when the command is invoked"
        images_url: [String],
        "If the command should be restricted to NSFW channels"
        nsfw: Boolean!
    }

    input EditCommandInput {
        guild_id: ID!,
        command_id: ID!,
        name: String,
        description: String,
        embed_text: String,
        images_urls: [String],
        nsfw: Boolean
    }

    extend type Query {
        "Find all commands in a guild"
        commandsInGuild(guild_id: ID!): [Command]!,
        "Find a command in a guild by its id"
        commandInGuildById(guild_id: ID!, command_id: ID!): Command
        "Find a command in a guild by its name"
        commandInGuildByName(guild_id: ID!, name: String!): Command,
    }

    extend type Mutation {
        "Create a command in a guild"
        createCommand(input: CreateCommandInput!): Command,
        "Edit a command. Null fields will be ignored, fields with a value will overwrite the existing ones"
        editCommand(input: EditCommandInput): Command
        "Delete a command in a guild"
        deleteCommand(guild_id: ID!, command_id: ID!): String
    }
`

const resolvers = {
    Query: {
        commandsInGuild: async (_root, args, _context) => {
            return CommandService.findAllInGuild(args.guild_id)
        },
        commandInGuildById: async (_root, args, _context) => {
            return CommandService.findAllInGuildById(args.guild_id, args.command_id)
        },
        commandInGuildByName: async (_root, args, _context) => {
            return CommandService.findInGuildByName(args.guild_id, args.name)
        }
    },

    Mutation: {
        createCommand: async (_root, args, context) => {
            return CommandService.createCommandInGuild(context.currentUser, args.input.guild_id, args.input.name, args.input.description, args.input.embed_text, args.input.images_urls, args.input.nsfw)
        },
        editCommand: async (_root, args, context) => {
            return CommandService.editCommandInGuild(context.currentUser, args.input.guild_id, args.input.command_id, args.input.name, args.input.description, args.input.embed_text, args.input.images_urls, args.input.nsfw)
        },
        deleteCommand: async (_root, args, context) => {
            await CommandService.deleteCommandInGuild(context.currentUser, args.guild_id, args.command_id)
            return "Ok"
        }
    },
}

export {typeDef, resolvers}