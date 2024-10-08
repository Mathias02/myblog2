"use client"

import AddComment from '@/app/_components/AddComment';
import Comments from '@/app/_components/Comments';
import GlobalApi from '@/app/_utils/GlobalApi';
import { useEffect, useState } from 'react';


const singlePage = ({params}) => {

  const [single,setSingle] = useState();

useEffect(() => {
  singleData();
},[])


const singleData = () =>{
  GlobalApi.postId2(params.postsId).then((resp) =>{
    setSingle(resp.data.data)
  })
  
}

  return (
    <div className='pt-6'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-xl font-bold'>{single?.attributes?.title}</h2>
        <p className='tracking-wide'>{single?.attributes?.content}</p>
      </div>
        

      <Comments  commentId={params.postsId} />
      <AddComment commentId={params.postsId} />
      
    </div>
  )
}

export default singlePage