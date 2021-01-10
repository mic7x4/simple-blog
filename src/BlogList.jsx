import React from 'react'

function BlogList({blogs,title}) {

    return (
        <div className="blogList"> 
            <h1>{title}</h1>
            {blogs.map((blog) =>(
                <div className="blog__preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        {/* <button onClick={()=>handleDelete(blog.id)}>Delete blog</button> */}
                    </div>
            ) )}        
        </div>
    )
}

export default BlogList
