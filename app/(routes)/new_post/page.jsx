import React from 'react'

const page = () => {
  return (
    <div>
        <h2 className='mb-3 p-4'>Please write your topic</h2>
        <form className='flex flex-col mb-5'>
            <div className='p-3'>
                <input type="text" name='title' placeholder='enter title' className='w-full p-5 border rounded outline-none'/>
            </div>
            <div className='p-3'>
                <textarea rows='7' name='content' placeholder='enter content' className='w-full border p-5 rounded outline-none resize-none rows-5'></textarea>
            </div>
            <button className='p-5 bg-primary text-white rounded outline-none hover:bg-[#AC8049]'>Submit</button>
        </form>
    </div>
  )
}

export default page