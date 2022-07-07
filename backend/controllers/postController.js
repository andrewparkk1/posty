const asyncHandler = require("express-async-handler")
const Post = require("../models/postModel")

const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
})

const addPost = asyncHandler(async (req, res) => {
    const {name, year, title, content} = req.body

    const post = await Post.create({
        name,
        year, 
        title,
        content
    })

    if (post) {
        res.status(201).json({
            _id: post.id,
            name: post.name,
            year: post.year,
            content: post.content,
            date: post.createdAt
        })
    } else {
        res.status(400).send("error")
    }
})

module.exports = {
    getPosts,
    addPost
}