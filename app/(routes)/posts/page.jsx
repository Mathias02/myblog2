
"use client"


import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import DisplayData from '@/app/_components/DisplayData';

const pagePost = () => {
  const[data,setData] = useState([]);


  useEffect(() => {
    fetchedData()
  },[])

  const fetchedData = () => {
   GlobalApi.getPosts().then(resp =>{
    console.log(resp.data.data)
    setData(resp.data.data)
   })

    }

  return (
    <div>   
        <DisplayData  data={data} />
    </div>
  )
}



export default pagePost


//import DisplayData from "@/app/_components/DisplayData";
// import useFetch from "@/fetch/useFetch";
// import { useState } from "react";


// export default function posts() {


//   const {loading, error, data} = useFetch('http://localhost:1337/api/posts')
//   if(loading) return <p>Loading...</p>
//   if(error) return <p>error!</p>
//   console.log(data.data)

//   return (
//     <div className="grid grid-cols-3 border p-11">
//       {
//         data.map((post, index) => {
//           <div>{post.data?.attributes?.title}</div>
//         })
//       }
//     </div>
//   )
//  }






