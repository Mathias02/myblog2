"use client"



import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import OneComment from './OneComment';

const Comment = ({commentId}) => {
 const [commentPost,setCommentPost] = useState([]);

 useEffect(() => {
  freshComment();
},[])

  const freshComment = async () => {
    const commentNew = await GlobalApi.getComments(commentId).then((resp) => resp.data.data)
     setCommentPost(commentNew);
  }


  return (
    <div className="bg-gray-100 py-3 px-4">
      {commentPost?.map((comment, index) => {
        return (
          <div key={index}>
              <OneComment  comment={comment} />
          </div>
        );
      })}
    </div>
  );
}

export default Comment