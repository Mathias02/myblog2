"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';

const AddComment = ({commentId}) => {
    const [content,setContent] = useState('');


    const router = useRouter();
    
    useEffect(() =>{
        console.log(commentId);
    },[commentId])

    const data1 = {
        data: {
         id: commentId, content
        }
    }


    function comments(e) {
        e.preventDefault();
        console.log(content);
        GlobalApi.addComments(commentId);
        setContent('');
        router.refresh(''); 
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

export default AddComment