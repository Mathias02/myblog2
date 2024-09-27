"use client"

import React, { useEffect } from 'react'

const OneComment = ({comment}) => {

  useEffect(() =>{
    console.log(comment)
  },[])
  return (
    <div className='flex flex-col gap-2'>
      {comment.attributes?.comments?.data.map((item, index) => {
          return (
            <p key={index}>
              {item.attributes.content}
            </p>
          );
        })}
    </div>
  )
}

export default OneComment