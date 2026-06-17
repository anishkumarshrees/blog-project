import { useEffect, useState } from "react"
import Card from "../component/card"
import Navbar from "../component/Navbar"
import axios from "axios"



function Home(){
    const [blogs,setblogs]=useState([])
    const fetchBlogs= async ()=>{
     const response =  await axios.get("http://localhost:3000/blog")
     setblogs(response.data.data)
    
    }
    useEffect(()=>{
        fetchBlogs()
    },[])
     console.log(blogs)
    return(
        <>
        <Navbar />
        <div className="flex flex-wrap gap-5">
            {
                //loops array matra launa painxa
               blogs.map((blog) => (
    <Card key={blog._id} blog={blog} />
))
            }
       
       
 </div>
        </>
    )
}
export default Home