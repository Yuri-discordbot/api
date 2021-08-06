import mongoose from "mongoose";

const schema = new mongoose.Schema({
    discord_id: {
        type: String,
        required: true,
        unique: true
    },
    global_admin: {
        type: Boolean,
        required: true,
    },
    admins_guilds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guild",
    }],
});

const User = mongoose.model("User", schema);

export {User};