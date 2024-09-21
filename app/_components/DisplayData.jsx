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
        
      <div className='grid lg:grid-cols-3 lg:grid-cols-4p-7 text-center'>

            {data.map((post, index) => {
               return (
                
                  <Link href={`/posts/${post.id}`} key={index} className='bg-slate-100 m-3 p-3'>
                        <h2 className='pb-2 pt-3 text-xl text-left bg-slate-200 w-full text-primary font-bold'>{post.attributes?.title}</h2>
                        <p className='text-left mt-4'>{post.attributes?.content}</p>
                        <div className='flex items-baseline justify-between'>
                            <p className='mt-3 text-right p-3 bg-slate-200 rounded-md'>{post.attributes?.createdAt}</p>
                        </div>    
                  </Link>
               )
            })}
        </div>
    </div>
  )
}

export default DisplayData