import React,{useState,useEffect} from 'react';
import BlogList from './BlogList';

function Home() {

 const [blogs,setBlogs] = useState([
     {title:'My new Website', body:"lorem ipsom.....",author:'crook',id:1},
     {title:'Welcome to the party', body:"lorem ipsom.....",author:'pop Smoke',id:2},
     {title:'Webdev Top Tips', body:"lorem ipsom.....",author:'Ninja',id:3},
 ]);

const [name,setName] = useState('crookzart');

const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
}

useEffect(() => {
 console.log('Use Effect runs==>');
 console.log(blogs);
 console.log(name);
},[name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('netphantom')}>change me</button>
            <p>{name}</p>
        </div>
    )
}

export default Home
