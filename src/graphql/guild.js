import gql from "graphql-tag";
import {GuildService} from "../services/guildService.js";

const typeDef = gql`
    type Guild {
        id: ID!
        discord_id: String!
    }

    extend type Query {
        guilds: [Guild]!,
        guild(discord_id: String!): Guild,
    }

    extend type Mutation {
        registerGuild(discord_id: String!): Guild
    }
`;

const resolvers = {
    Query: {
        guilds: (_root, _args, _context) => {
            return GuildService.findAll();
        },
        guild: (_root, args, _context) => {
            return GuildService.findByDiscordId(args.discord_id);
        }
    },
    Mutation: {
        registerGuild: (_root, args, _context) => {
            return GuildService.createGuild(args.discord_id);
        }
    }
}

export {typeDef, resolvers};