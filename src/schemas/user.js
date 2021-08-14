import mongoose from "mongoose"

const schema = new mongoose.Schema(
    {
        discord_id: {
            type: String,
            required: true,
            unique: true
        },
        is_global_admin: {
            type: Boolean,
            required: true,
        },
        admins_guilds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Guild",
        }],
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })

const User = mongoose.model("User", schema)

export {User}