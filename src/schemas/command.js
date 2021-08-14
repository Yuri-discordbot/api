import mongoose from "mongoose"

const commandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true
        },
        description: {
            type: String,
            required: false,
        },
        embed_text: {
            type: String,
            required: false
        },
        images_urls: {
            type: Array,
            required: false
        },
        nsfw: {
            type: Boolean,
            required: true,
        },
        discord_id: {
            type: String,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)

export {commandSchema}