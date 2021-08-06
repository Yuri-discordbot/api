import mongoose from "mongoose";

const schema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true,
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
        guilds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Guild"
        }]
    }
);

const Command = mongoose.model("Command", schema);

export {Command};