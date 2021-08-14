import gql from "graphql-tag"
import {GuildService} from "../services/guildService.js"

const typeDef = gql`
    type Guild {
        id: ID!
        discord_id: String!,
        commands: [Command]!,
        created_at: String!
        updated_at: String
    }

    extend type Query {
        guilds: [Guild]!,
        guildById(id: ID!): Guild,
        guildByDiscordId(discord_id: String!): Guild,
    }

    extend type Mutation {
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