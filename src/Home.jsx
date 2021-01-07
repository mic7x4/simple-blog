import React,{useState} from 'react';
import BlogList from './BlogList';

function Home() {

 const [blogs,setBlogs] = useState([
     {title:'My new Website', body:"lorem ipsom.....",author:'crook',id:1},
     {title:'Welcome to the party', body:"lorem ipsom.....",author:'pop Smoke',id:2},
     {title:'Webdev Top Tips', body:"lorem ipsom.....",author:'Ninja',id:3},
 ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
        </div>
    )
}

export default Home
