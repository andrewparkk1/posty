import { useState } from 'react'

function Header() {
    const [data, setData] = useState([])
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.post.value)
        console.log('asdf')
    }


    return (
        <div>
            <div className='flex flex-row justify-between items-center px-24'>
                <div className='flex flex-col text-left py-8 gap-4'>
                    <h1 className='text-5xl font-bold'>Posty</h1>
                    <h2 className='text-lg font-medium'>A forum for incoming students</h2>
                </div>

                <label for="my-modal" class="btn modal-button">open modal</label>
            </div >


            {/* Add Modal */}
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <div className='flex flex-row justify-between items-center pb-5'>
                        <div className="font-bold text-2xl">Add a post</div>

                        {/* <label for="my-modal" className="hover:cursor-pointer hover:text-slate-300">X</label> */}

                        <div class="modal-action">
                            <label for="my-modal" class="btn">X</label>
                        </div>


                    </div>
                    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
                        <div class="form-control w-full flex flex-col gap-1">
                            <span class="label-text w-full">Name?</span>
                            <input type="text" placeholder="I go by..." class="input input-bordered w-full" name="name" value={data.name} onChange={e => setData((oldData) => ({ ...oldData, [e.target.name]: e.target.value }))} />
                        </div>

                        <div class="form-control w-full flex-col gap-1">
                            <span class="label-text">Graduation Year</span>
                            <input type="number" placeholder="I graduate in..." class="input input-bordered w-full" name="year" value={data.year} onChange={e => setData((oldData) => ({ ...oldData, [e.target.name]: parseInt(e.target.value) }))} />
                        </div>

                        <div class="form-control w-full flex-col gap-1">
                            <span class="label-text">My thoughts</span>
                            <textarea class="textarea textarea-bordered h-40" placeholder="Gatton is..." name="post"></textarea>
                        </div>
                        <button className="btn" type='submit'>Post</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Header