import { Link } from "react-router-dom"



function Card({blog}){
    const isVideo = blog.imageUrl && /\.(mp4|webm|ogg|mov)$/i.test(blog.imageUrl)
    console.log(blog)

    return (
        <>
       
       <div
      style={{
        maxWidth: "350px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        overflow: "hidden",
        fontFamily: "Arial",
      }}
    >
   
       {isVideo ? (
        <video
          src={blog.imageUrl}
          controls
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover"
          }}
        />
       ) : (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover"
          }}
        />
       )}

      {/* Content */}
      <div style={{ padding: "15px" }}>
        
        {/* Category */}
        <div
          style={{
            color: "blue",
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
            {blog.title}
        </div>

        {/* Title */}
        <h2 style={{ margin: "10px 0", fontSize: "20px" }}>
          {blog.subtitle}
        </h2>

        {/* Description */}
        <p style={{ color: "#555", fontSize: "14px" }}>
          
         {blog.description}
        </p>

         
          
       
       

        {/* Button */}
        <button
          style={{
            marginTop: "15px",
            width: "100%",
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <Link to={`/blog/${blog._id}`}>Read More</Link>
          
        </button>
      </div>
    </div>
   
        </>
    )

}

export default Card
