import React,{useState} from 'react';

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('crook');
    const [isPending,setIsPending] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title, body, author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('New Blog Added')
            setIsPending(false)
        })
    }
    return (
        <div>
            <div className="createBlog">
                <h2>Add a new Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog title:</label>
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange= {(e)=>setTitle(e.target.value)}
                    />
                    <label>Blog Body:</label>
                    <textarea
                        value={body}
                        onChange= {(e)=>setBody(e.target.value)}
                        required
                    ></textarea>
                    <label>Author:</label>
                    <select 
                        value={author}
                        onChange= {(e)=>setAuthor(e.target.value)}
                    >
                        <option value="crook">crook</option>
                        <option value="netphantom">netphantom</option>
                    </select>
                    {!isPending && <button>Add Blog</button>}
                    {isPending && <button disabled>Adding Blog....</button>}
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
