import { useEffect, useState } from "react"
import Navbar from "../component/Navbar"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"




function SignlePage(){
const {id}=useParams()
const [blog,setblog]=useState({})
const navigate= useNavigate()
const isVideo = blog.imageUrl && /\.(mp4|webm|ogg|mov)$/i.test(blog.imageUrl)
const fetchSingleBlog=async ()=>{
 const response =  await axios.get(`http://localhost:3000/blog/${id}`)
 setblog(response.data.data)
}

    useEffect(()=>{
        fetchSingleBlog()

    },[])
    const deleteFunction=async ()=>{
     const response= await  axios.delete("http://localhost:3000/blog/"+id)
     console.log(response.status)
     if(response.status == 200){
        navigate("/")
     }else{
        alert("something went wrong")
     }
    }
    return(
        <>
        <Navbar/>
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div >
                    {isVideo ? (
                        <video
                            src={blog.imageUrl}
                            controls
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover"
                            }}
                        />
                    ) : (
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover"
                            }}
                        />
                    )}
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                    <Link to={`/edit/${blog._id}`}>
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">Edit</button>
                        </Link>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={deleteFunction}>Delete</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 name="title" className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {blog.subtitle}
                </p>
                 <p style={{ color: "red", fontSize: "20px" }}>
  {blog.description}
</p>
               
                
                
                
                    
                  
                
            </div>
        </div>
    </div>
</div>

        </>
    )
}

export default SignlePage
