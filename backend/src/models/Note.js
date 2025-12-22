import mongoose from "mongoose";

// 1- create a schema
// 2- create a model using the schema

const noteScema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    },
    { timestamps: true } // createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema)

export default Note