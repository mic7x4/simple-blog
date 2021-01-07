import React,{useState} from 'react';

function Home() {

 const [blogs,setBlogs] = useState([
     {title:'My new Website', body:"lorem ipsom.....",author:'crook',id:1},
     {title:'Welcome to the party', body:"lorem ipsom.....",author:'pop Smoke',id:2},
     {title:'Webdev Top Tips', body:"lorem ipsom.....",author:'Ninja',id:3},
 ]);
    return (
        <div className="home"> 
            {blogs.map((blog) =>(
                <div className="blog__preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                    </div>
            ) )}
        </div>
    )
}

export default Home
