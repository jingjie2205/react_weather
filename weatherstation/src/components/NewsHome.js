import React from 'react'
import NavBar from './NavBar';
import NewsInt from './News';

function NewsIntHome() {

    
    
    return (
        <div>
            <div className="background2">
                <NavBar />
                    <div>
                        <NewsInt/>
                    </div>
            </div>
        </div>
    )
}

export default NewsIntHome

