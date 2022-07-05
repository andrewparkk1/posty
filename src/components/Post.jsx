import React from 'react'

function Post({post}) {
    return (
        <div>
            <div class="card bg-base-300 shadow-xl">
                <div class="card-body">
                    <div className='flex flex-row justify-between'>
                        <h2 class="card-title">{post.title}</h2>
                        <h3>{post.id}</h3>
                    </div>
                    <h3>{post.name} : {post.year} </h3>
                    <p>{post.post}</p>
                </div>
            </div>
        </div>
    )
}

export default Post