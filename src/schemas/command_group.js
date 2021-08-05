import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    commands: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Command"
    }]
});

const CommandGroup = mongoose.model("CommandGroup", schema);

export {CommandGroup};