# Yuri API

The backend of Yuri.

Currently, only graphql is supported on the `/v1/graphql` endpoint. It is possible to explore the api by opening a
browser on the `/v1/graphql` endpoint.

This api uses MongoDB as its database.

## Authentication and Authorization

This api uses discord tokens for authentication and authorization since it is made to interact with discord. Please
refer to [this link](https://discord.com/developers/docs/topics/oauth2) for more information

## Setup

- Install NodeJs and npm
- Install MongoDB
- Clone this repository
- Run `npm install`

## Executing

Create a discord bot then simply run the `npm start` command with the following environment variables:

- MONGO_URL: The mongodb connection string
- DISCORD_APPLICATION_ID: Can be found under the "General Information" section of your bot
- DISCORD_BOT_TOKEN: Can be found under the "Bot" section of you bot