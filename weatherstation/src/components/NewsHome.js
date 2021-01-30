import React , { useState, useEffect } from 'react'
import NavBar from './NavBar';
import News from './News';


function NewsHome() {

    return (
        <div>
            <div className="background2">
                <NavBar />
                    <div>
                        <News />
                    </div>
            </div>
        </div>
    )
}

export default NewsHome
