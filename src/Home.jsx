import React,{useState,useEffect} from 'react';
import BlogList from './BlogList';

function Home() {

 const [blogs,setBlogs] = useState(null);

const [name,setName] = useState('crookzart');

// const handleDelete = (id) => {
//     const newBlog = blogs.filter((blog) => blog.id !== id);
//     setBlogs(newBlog);
// }

useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setBlogs(data);
    })
 
},[]);

    return (
        <div className="home">
            {
              blogs &&  <BlogList blogs={blogs} title="All Blogs!"/>
            }
        </div>
    )
}

export default Home
