import gql from "graphql-tag";

const typeDef = gql`
    type Command {
        id: ID!,
        name: String!,
        embed_text: String,
        images_urls: [String]
    }

    extend type Query {
        commands: [Command]!,
        command(id: ID!): Command,
    }
`;

const resolvers = {
    Query: {
        commands: () => {
            return [
                {
                    id: "id1",
                    name: "pat",
                    embed_text: "$sender is patting $receiver",
                    images_urls: [
                        "https://url1.com",
                        "https://url2.com",
                    ],
                },
                {
                    id: "id2",
                    name: "uwu",
                    embed_text: "uwu",
                }
            ];
        },
        command: (_, {id}) => {
            return {
                id,
                name: "name",
                embed_text: "awa",
            }
        }
    }
}

export {typeDef, resolvers}