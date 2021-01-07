import React from 'react'

function BlogList({blogs,title}) {

    return (
        <div className="blogList"> 
            <h1>{title}</h1>
            {blogs.map((blog) =>(
                <div className="blog__preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                    </div>
            ) )}        
        </div>
    )
}

export default BlogList
