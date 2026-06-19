import { useState } from "react"
import Navbar from "../component/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function CreateBlog(){
    const navigate= useNavigate()
    // const [title,settitle]=useState("")
    // const [subtitle,setsubtitle]=useState("") yo pani garna milxa tarw yo mastai ko lagi naramro way ho 
    //esko kam chai frontend maa vada kaam garni ho jastai kei title maa type garyo vani tyo eha store garxa
    const [data,setData]=useState({
        title:"",
        subtitle:"",
        description:"",
        image:""
    })
    const handleChange=(e)=>{
        const value=e.target.value
        const name=e.target.name
        setData({
            ...data,
            [name]:name ==="image" ? e.target.files[0]:value
        })
    }
    const createBlog=async (e)=>{
        e.preventDefault()
     const response= await  axios.post("http://localhost:3000/blog",data,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
     })
     if(response.status==200){
        navigate("/")
     }

    }
   
    console.log(data)
    return(
        <>
        <Navbar />
         <section className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create a New Blog Post</h1>
        
        <form action="/addBlog" method="POST" className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={createBlog}>
            {/* <!-- Title --> */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Title</label>
                <input type="text" id="title" name="title" required
                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                       placeholder="Enter blog title" onChange={handleChange}/>
            </div>
            {/* <!-- Title --> */}
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Sub Title</label>
                <input type="text" id="subtitle" name="subtitle" required
                       className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                       placeholder="Enter blog title" onChange={handleChange}/>
            </div>
            {/* Image */}
            <div className="mb-4">
               
<label className="block mb-2.5 text-sm font-medium text-heading" >Upload Image</label>
<input className="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="file_input" type="file" name="image"/>

            </div>

            {/* <!-- description --> */}
            <div className="mb-4">
                <label  className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea id="description" name="description" required 
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Write your blog content here" onChange={handleChange}></textarea>
            </div>
            

            {/* <!-- Submit Button --> */}
            <div className="text-center">
                <button type="submit"
                        className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition">
                    Publish Post
                </button>
            </div>
        </form>
    </section>
        </>
    )
}

export default CreateBlog