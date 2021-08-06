import mongoose from "mongoose";

const schema = new mongoose.Schema({
    discord_id: {
        type: String,
        required: true,
        unique: true,
    }
});

const Guild = mongoose.model("Guild", schema);

export {Guild};