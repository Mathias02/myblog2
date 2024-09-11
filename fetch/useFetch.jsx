
// import {useEffect, useState}from 'react'

// const useFetch = (url) => {
//     const[loading,setLoading] = useState(true);
//     const[error,setError] = useState(null);
//     const[data,setData] = useState([]);

//     useEffect(()=>{

//         const fetchDetails = async () => {
//             setLoading(true)
            
//             try {
             
//             const res = await fetch(url)
//             const details = await res.json()
//             setData(details)
//             setLoading(false)
                
//             } catch (error) {
//                 setError(error)
//                 setLoading(false)   
//             }

//         }
        
//         fetchDetails()
        
//     },[url])

//   return {loading, error, data}

// }

// export default useFetch