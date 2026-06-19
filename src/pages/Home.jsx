import { useEffect, useState } from "react"

import Navbar from "../component/Navbar"
import axios from "axios"
import Card from "../component/Card"




function Home(){
    const [blogs,setblogs]=useState([])
    const fetchBlogs= async ()=>{
     const response =  await axios.get("https://full-stack-esqu.onrender.com/blog")
     setblogs(response.data.data)
    
    }
    useEffect(()=>{
        fetchBlogs()
    },[])
     console.log(blogs)
    return(
        <>
        <Navbar />
           <div className="flex flex-wrap">
            {
                blogs.map(function(blog){
                    return(
                        <Card blog={blog} />
                    )
                })
            }
       
       
 </div>
        </>
    )
}
export default Home
