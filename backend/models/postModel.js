const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
    {
        //add type, required, unique
        name: String,
        year: Date,
        title: String,
        content: String
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Post", postSchema)