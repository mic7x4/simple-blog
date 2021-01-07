import React from 'react'

function Home() {
    const handleClick = () => {
        console.log('Hello, Netphantom');
    }
    return (
        <div className="home"> 
            <h1>Home Page</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Home
