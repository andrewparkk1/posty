import { useState } from 'react'
import axios from "axios"
import { MdClose } from "react-icons/md"
import { BsPlusSquare } from "react-icons/bs"

function Header() {
    const [input, setInput] = useState({
        name: '',
        year: '',
        title: '',
        content: ''
    })

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        const newPost = {
            name: input.name,
            year: input.year,
            title: input.title,
            content: input.content
        }
        axios.post("/api/posts", newPost)
        setInput({})
        window.location.reload(false);
    }

    function handleChange(e) {
        const { name, value } = e.target
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }


    return (
        <div>
            <div className='flex flex-row justify-between items-center pb-5'>
                <div className='flex flex-col text-left sm:py-2 md:py-5 lg:py-8 gap-4 pr-8'>
                    <h1 className='text-5xl font-bold'>Posty</h1>
                    <h2 className='text-lg font-medium'>A forum for incoming students</h2>
                </div>

                <div className="flex flex-col justify-end items-end gap-5">
                    <label htmlFor="my-modal" className="modal-button hover:cursor-pointer hover:text-slate-300"><BsPlusSquare size={25}></BsPlusSquare></label>
{/* 
                    <div className="flex flex-row justify-center-items-center gap-5">
                        <button className='btn' onClick={handleFilter}>2022</button>
                        <button className='btn' onClick={handleFilter}>2023</button>
                        <button className='btn' onClick={handleFilter}>All</button>
                    </div> */}
                </div>

            </div >


            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='flex flex-row justify-between items-center pb-5'>
                        <div className="font-bold text-2xl">Add a post</div>
                        <div className="modal-action m-0">
                            <label htmlFor="my-modal" className="hover:cursor-pointer hover:text-slate-300"><MdClose size={25}></MdClose></label>
                        </div>
                    </div>
                    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
                        <div className="form-control w-full flex flex-col gap-1">
                            <span className="label-text w-full">Name?</span>
                            <input type="text" placeholder="I go by..." className="input input-bordered w-full" name="name" value={input.name} onChange={handleChange} />
                        </div>

                        <div className="form-control w-full flex-col gap-1">
                            <span className="label-text">Graduation Year</span>
                            <input type="number" placeholder="I graduate in..." className="input input-bordered w-full" name="year" value={input.year} onChange={handleChange} />
                        </div>

                        <div className="form-control w-full flex-col gap-1">
                            <span className="label-text">Title</span>
                            <input type="text" placeholder="Title..." className="input input-bordered w-full" name="title" value={input.title} onChange={handleChange} />
                        </div>

                        <div className="form-control w-full flex-col gap-1">
                            <span className="label-text">Any thoughts, advice, introspection, or hateful comments</span>
                            <textarea className="textarea textarea-bordered h-40" placeholder="Gatton is..." name="content" value={input.content} onChange={handleChange}></textarea>
                        </div>
                        <button className="btn" type='submit'>Post</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Header