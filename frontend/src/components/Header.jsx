import { useState } from 'react'

function Header() {
    const [input, setInput] = useState({
        name: '',
        year: '',
        title: '',
        content: ''
    })
    
    const onSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const year = e.target.year.value
        const title = e.target.title.value
        const content = e.target.content.value
        setInput({})
    }

    function handleChange(e) {
        const {name, value} = e.target
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }


    return (
        <div>
            <div className='flex flex-row justify-between items-center px-24'>
                <div className='flex flex-col text-left py-8 gap-4'>
                    <h1 className='text-5xl font-bold'>Posty</h1>
                    <h2 className='text-lg font-medium'>A forum for incoming students</h2>
                </div>

                <label htmlFor="my-modal" className="btn modal-button">open modal</label>
            </div >


            {/* Add Modal */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='flex flex-row justify-between items-center pb-5'>
                        <div className="font-bold text-2xl">Add a post</div>

                        {/* <label for="my-modal" className="hover:cursor-pointer hover:text-slate-300">X</label> */}

                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">X</label>
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
                            <span className="label-text">My thoughts</span>
                            {/* <input type="text" placeholder="Gatton is..." className="textarea textarea-bordered h-40" name="content" value={input.content} onChange={handleChange} /> */}

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