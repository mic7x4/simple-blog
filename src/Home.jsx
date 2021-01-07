import React,{useState} from 'react';

function Home() {
    const [name,setName] = useState('Crookzart');
    const [age,setAge] = useState(24);

    const handleClick = () => {
        setName('Netphantom');
        setAge(40);

    }
    return (
        <div className="home"> 
            <h1>Home Page</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Home
