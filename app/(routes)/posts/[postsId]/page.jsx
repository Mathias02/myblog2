"use client"
import AddComments from '@/app/_components/AddComment';
import Comments from '@/app/_components/Comments';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const singlePage = ({params}) => {

const [single,setSingle] = useState([]);
 

useEffect(() =>{
  singleData();
  console.log(params.postsId)

},[])

const singleData = () =>{
  GlobalApi.postId(params.postsId).then((resp) => {
    setSingle(resp.data.data)
  })
}
  return (
    <div className='mt-8'>
      <div>{single.map((item,index) => {
        return(
          <div key={index}>
             <h2 className='bg-slate-200 text-2xl font-semibold p-4'>{item.attributes.title}</h2>
             <div className='flex px-2 mt-3 flex-col gap-6'>
                <p className='text-gray-500'>{item.attributes.content}</p>
                <p className='text-gray-500 flex justify-end'>{item.attributes.createdAt}</p>
             </div>
          </div>
        )
      })}</div>
      <Comments  commentId={params.postsId} />
      <AddComments  commentId={params.postsId}  />
    </div>
  )
}

export default singlePage