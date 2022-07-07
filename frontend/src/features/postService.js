import axios from 'axios'

const getPosts = async () => {
    const response = await axios.get("/")
    return response.data
}

const addPost = async(postData) => {
    const response = await axios.post("/", postData)
    return response.data
}

const postService = {
    getPosts,
    addPost
}

export default postService