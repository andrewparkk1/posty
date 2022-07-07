import { useState, useEffect } from 'react'
import Post from './Post'
import axios from "axios"
import {getPosts} from '../features/postService'

function PostList() {

    const [postList, setPostList] = useState([])

    useEffect(() => {
        fetch("/posts/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setPostList(jsonRes))
        return
    }, [postList])

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