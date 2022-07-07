import { useState, useEffect } from 'react'
import Post from './Post'
import axios from "axios"
import { getPosts } from '../features/postService'

function PostList() {

    const [postList, setPostList] = useState([])

    useEffect(() => {
        console.log("get json")
        fetch("/api/posts").then(res => {
            console.log("in the fetch")
            if (res.ok) {
                console.log("res is ok")
                return res.json()
            }
        })
            .then(jsonRes => {
                console.log("in the then")
                console.log(jsonRes)
                setPostList(jsonRes)
            })
            .catch((error) => {
                console.log("there is error")
                console.log(error);
            });
    }, [])

    return (
        <>
            <div className='box-border grid grid-cols-4 auto-rows-[13.3rem] gap-x-12 gap-y-2 w-9/12 mx-auto'>
                {postList.map(post => {
                    return <Post post={post} key={post._id}></Post>
                })}
            </div>
        </>
    )
}


export default PostList