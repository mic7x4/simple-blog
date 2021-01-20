import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({blogs,title}) {

    return (
        <div className="blogList"> 
            <h1>{title}</h1>
            {blogs.map((blog) =>(
                <div className="blog__preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>
                        {/* <button onClick={()=>handleDelete(blog.id)}>Delete blog</button> */}
                    </div>
            ) )}        
        </div>
    )
}

export default BlogList
