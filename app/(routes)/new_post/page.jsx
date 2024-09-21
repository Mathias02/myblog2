"use client"

import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');


  const router = useRouter();

  const data = {
    data:{
      title, content
    }
  }

  function details (e) {
    e.preventDefault();
    console.log(data); 
    GlobalApi.postData(data);
    setTitle('');
    setContent('');
    router.push('/posts');
    router.refresh()
  }

  return (
    <div className='flex justify-center flex-col'>

        <h2 className='mb-3 p-4 text-xl text-left'>Please write your topic</h2>
        <form className='flex flex-col mb-5 max-w-4xl mx-auto w-full' onSubmit={details}>
            <div className='p-3'>
                <input type="text" name='title' value={title} placeholder='Enter title'  onChange={(e) =>{setTitle(e.target.value)}} className='w-full p-5 border rounded-lg outline-none'required/>
            </div>
            <div className='p-3'>
                <textarea rows='7' value={content} name='content' placeholder='Enter content' onChange={(e) => {setContent(e.target.value)}} className='w-full border p-5 rounded-ls outline-none resize-none rows-5' required></textarea>
            </div>
            <button className='p-5 bg-primary text-white rounded-lg outline-none hover:bg-[#AC8049]'>Submit</button>
        </form>
    </div>
  )
}

export default page