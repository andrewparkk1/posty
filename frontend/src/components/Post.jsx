import { useState } from 'react'


function Post({ post }) {
    // const [text, setText] = useState(`${post.content.slice(0, 200)}`)
    const [collapse, setCollapse] = useState(true)

    let date = new Date(post.createdAt).toLocaleDateString()
    let year = new Date(post.year).getFullYear() + 1
    let num = 250

    const onClick = () => {
        setCollapse(prevState => {
            return !prevState
        })
        console.log(year === 2021)
    }

    return (
        <div>
            <div className='card bg-base-300 shadow-2xl border-2 border-gray-700 min-h-[18rem]'>
                {/* <div className={`card bg-base-300 shadow-2xl mb-8 border-2 ${year === 2021 ? 'border-green-900' : 'border-gray-700'}`}> */}
                <div className={`card-body ${(post.content.length > num ? 'hover:cursor-pointer' : '')}`} onClick={onClick}>
                    <div className='flex flex-row justify-between'>
                        <h2 className="card-title">{post.title}</h2>
                        <h3>{date}</h3>
                    </div>
                    <h3>{post.name} : {year} </h3>

                    <p>{collapse ? `${post.content.slice(0, num)}${(post.content.length > num ? '...' : '')}` : post.content}</p>

                    {/* <p>{post.content}</p> */}


                </div>
            </div>
        </div>
    )
}

export default Post