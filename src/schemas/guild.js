import mongoose from "mongoose"

import {commandSchema} from "./command.js"

const schema = new mongoose.Schema(
    {
        discord_id: {
            type: String,
            required: true,
            unique: true,
        },
        commands: [commandSchema]
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })

const Guild = mongoose.model("Guild", schema)

export {Guild}