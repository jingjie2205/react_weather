import React from 'react'
import "./style/NavBar.css"
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="header">

            <nav>
                <h1>~~oOo~~</h1>
                {/* <img className="header_logo" src = "/logo192.png" alt="https://pngimg.com/uploads/sun/sun_PNG13410.png"/> */}
                <Link to = "/">
                    <li>Home</li>
                </Link>    
                <Link to = "/covid">
                    <li>Covid</li>
                </Link>    
            </nav>

        </div>
    )
}

export default NavBar
