const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
    {
        //add type, required, unique
        name: {
            type: String,
            required: [true, 'Please add a text value']
        },
        year: {
            type: Date,
            required: [true, 'Please add a text value']
        },
        title: {
            type: String,
            required: [true, 'Please add a text value']
        },
        content: {
            type: String,
            required: [true, 'Please add a text value']
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Post", postSchema)