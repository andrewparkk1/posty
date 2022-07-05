import { useState } from 'react'
import Post from './Post'


function PostList() {
    const [postList, setPostList] = useState([
        { id: 1, name: 'Andrew Park', year: 2022, title: "fun", post: "first post" },
        { id: 2, name: 'Andrew Park', year: 2022, title: "fun", post: "first post" },
        { id: 3, name: 'Andrew Park', year: 2022, title: "fun", post: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will u" },
        { id: 4, name: 'Andrew Park', year: 2022, title: "fun", post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deaker including versions of Lorem Ipsum." },
        { id: 5, name: 'Andrew Park', year: 2022, title: "fun", post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 6, name: 'Andrew Park', year: 2022, title: "fun", post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktoorem Ipsum." },
        { id: 7, name: 'Andrew Park', year: 2022, title: "fun", post: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset she with desktoorem Ipsum." }
    ])

    return (
        <>

            {/* <div className='box-border grid grid-cols-4 auto-rows-[13.3rem] gap-x-12 gap-y-2 w-9/12 mx-auto'>
            {postList.map(post => {
                return <Post post={post} key={post.id}></Post>
            })}   */}


            <div className='grid grid-cols-4 gap-4 w-9/12 mx-auto'>
                <Post post={postList[0]}></Post>
                <Post post={postList[1]}></Post>
                <Post post={postList[2]}></Post>
                <Post post={postList[3]}></Post>
                <Post post={postList[4]}></Post>
                <Post post={postList[5]}></Post>
                <Post post={postList[6]}></Post>
            </div>

        </>
    )
}


export default PostList