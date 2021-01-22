import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page can not be found</p>
            <Link to='/'>
                Go back to  Homepage....
            </Link>
        </div>
    )
}

export default NotFound
