"use client"



import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'

const Comment = ({commentId}) => {
 const [commentPost,setCommentPost] = useState([]);

  useEffect(() => {
    freshComment();
    console.log(commentPost)
  },[])

  const freshComment = async () => {
    const commentNew = await GlobalApi.getComments(commentId)
    console.log(commentNew)
     setCommentPost(commentNew)
  }
 
  return (
    <div className='bg-gray-200 p-10'>
     {
      commentPost.map((comment,index) => {
        return(
          <div key={index}>
              <p>{comment.attributes?.comments?.data?.attributes?.content}</p>
          </div>
        )
      })
     }
    </div>
  )
}

export default Comment