import mongoose from "mongoose";

const schema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        embed_text: {
            type: String,
            required: false
        },
        images_urls: {
            type: Array,
            required: false
        }
    }
);

const Command = mongoose.model("Command", schema);

export {Command}