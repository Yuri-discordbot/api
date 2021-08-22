import gql from "graphql-tag"
import {GuildService} from "../../services/guildService.js"

const typeDef = gql`
    "The object representing a discord guild"
    type Guild {
        "The internal id of the guild used by yuri"
        id: ID!
        "The discord id associated with that guild"
        discord_id: String!,
        "An array of commands that can be used in that guild"
        commands: [Command]!,
        "The timestamp at which the guild was added to yuri"
        created_at: String!
        "The timestamp at which the guild was last updated"
        updated_at: String
    }

    extend type Query {
        "Find all guilds registered with Yuri"
        guilds: [Guild]!,
        "Find a guild by its id"
        guildById(id: ID!): Guild,
        "Find a guild by its discord id"
        guildByDiscordId(discord_id: String!): Guild,
    }

    extend type Mutation {
        "Register a guild for use with Yuri"
        registerGuild(discord_id: String!): Guild
    }
`

const resolvers = {
    Query: {
        guilds: (_root, _args, _context) => {
            return GuildService.findAll()
        },
        guildById: (_root, args, _context) => {
            return GuildService.findById(args.id)
        },
        guildByDiscordId: (_root, args, _context) => {
            return GuildService.findByDiscordId(args.discord_id)
        }
    },

    Mutation: {
        registerGuild: (_root, args, _context) => {
            return GuildService.createGuild(args.discord_id)
        }
    }
}

export {typeDef, resolvers}