const express = require("express")
const router = express.Router()

const {
    getPosts,
    addPost
} = require("../controllers/postController")

// router.get('/', getPosts)
router.route("/").get(getPosts).post(addPost)

module.exports = router