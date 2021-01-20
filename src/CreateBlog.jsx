import React,{useState} from 'react';

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('crook');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title, body, author};
        console.log(blog);
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
                    <button>Add Blog</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
