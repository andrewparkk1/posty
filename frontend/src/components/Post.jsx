import React from 'react'

function Post({post}) {
    let date = new Date(post.createdAt).toLocaleDateString()
    let year = new Date(post.year).getFullYear()

    return (
        <div>
            <div class="card bg-base-300 shadow-xl">
                <div class="card-body">
                    <div className='flex flex-row justify-between'>
                        <h2 class="card-title">{post.title}</h2>
                        <h3>{date}</h3>
                    </div>
                    <h3>{post.name} : {year} </h3>
                    <p>{post.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Post