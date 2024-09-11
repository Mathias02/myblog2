"use client"

import Link from 'next/link'
import React from 'react'


const DisplayData = ({data}) => {
  return (
    <div>
      <div className='px-3 flex items-center justify-between bg-gray-50'>
          <h2 className='text-xl m-3 p-5'>Topics displayed</h2>
          <Link href={'/new_post'} className='text-xl hover:text-primary bg-gray-200 p-5 rounded-lg'>Create a New Post</Link>
      </div>
        
      <div className='bg-green-300 grid grid-cols-3'>
            {data&&data?.map((post,index) => {
               return (
               <div key={index} className='flex border p-10 text-white'>
                    <h2 className='bg-black text-center'>{post.attributes?.title}</h2>
                    <p>{post.attributes?.content}</p>
                </div>
               )
            })}
        </div>
    </div>
  )
}

export default DisplayData