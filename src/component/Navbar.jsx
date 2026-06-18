import { Link } from "react-router-dom"


function Navbar(){
    return(
        <>
         <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        MyBlog
      </div>

      {/* Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <Link to='/' className="hover:text-blue-600 cursor-pointer">Home</Link>
        <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>


      {/* Button */}
      <Link to='/create'>
     <button class="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create Blog
</button>
</Link>
     
    </nav>
        </>
    )
}
export default Navbar