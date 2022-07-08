import { useState, useEffect } from 'react'
import Post from './Post'

function PostList() {

    const [postList, setPostList] = useState([])

    useEffect(() => {
        fetch("/api/posts").then(res => {
            if (res.ok) {
                return res.json()
            }
        })
            .then(jsonRes => {
                setPostList(jsonRes)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])


    return (
        <>
            <div className='box-border grid place-items-stretch sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 gap-y-6'>
                {/* <div className='mx-auto sm:columns-1 md:columns-2 lg:columns-3 gap-7'> */}
                {postList.map(post => {
                    return <Post post={post} key={post._id} className="inline-block box-border"></Post>
                })}
            </div>
        </>
    )
}


export default PostList