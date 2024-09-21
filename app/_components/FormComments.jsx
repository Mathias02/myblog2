"use client"

import React, { useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';
import { useRouter } from 'next/navigation';

const FormComments = () => {

    const [content,setContent] = useState('');

    const router = useRouter();

    const data = {
        data:{
            content
        }
    }

 function comments(e) {
        e.preventDefault();
        console.log(content);
        GlobalApi.addComments(data);
        setContent('');
        router.refresh();
    }

  return (
    <div>
        <div>
            <form className='mb-8 mt-5' onSubmit={comments}>
                <label htmlFor='comment' className='text-gray-500 block mb-5 mt-3 text-xl font-semibold'>Add comment</label>
                <input className='mb-8 border w-full p-4 rounded-lg outline-none' value={content} onChange={(e) => {setContent(e.target.value)}} type='text' name='comments' placeholder='Enter comments' required />
               <button className='text-xl border p-3 rounded bg-primary text-white px-4 hover:bg-[#AC8049]'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default FormComments