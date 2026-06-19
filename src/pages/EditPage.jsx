import { useState } from "react"
import Navbar from "../component/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


function EditPage(){
    const navigate=useNavigate()
   const{id}= useParams()
    const [data,setdata]=useState({
        title:"",
        subtitle:"",
        description:"",
        image:""
    })
    const handleChange=(e)=>{
        const name=e.target.name 
        const value=e.target.value 
        setdata({
            ...data,
            [name]:name==="image" ? e.target.files[0] : value
        })

    }
    const editBlog=async(e)=>{
         e.preventDefault()
     const response= await  axios.patch("http://localhost:3000/blog/" +id,data,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        if(response.status==200){
        navigate("/blog/" + id)
     }
     else{
        alert('somoething went wrong')
     }
    }

    return(
        <>
       
        
         <Navbar />
         <section className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Blog Post</h1>
        
        <form   className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={editBlog} >
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
<input className="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="file_input" type="file" name="image" onChange={handleChange}/>

            </div>

            {/* <!-- description --> */}
            <div className="mb-4">
                <label  className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea id="description" name="description" required 
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Write your blog content here" onChange={handleChange} ></textarea>
            </div>
            

            {/* <!-- Submit Button --> */}
            <div className="text-center">
                <button type="submit"
                        className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition" >
                    Edit Post
                </button>
            </div>
        </form>
    </section>
        
        </>
    )
}

export default EditPage