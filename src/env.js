const environment = {
    botToken: process.env.DISCORD_BOT_TOKEN,
    applicationId: process.env.DISCORD_APPLICATION_ID,
    mongoUrl: process.env.MONGO_URL,
}

for (const [key, value] of Object.entries(environment)) {
    if (!value) {
        throw new Error(`${key} environment variable is not set.`)
    }
}

export {environment}

