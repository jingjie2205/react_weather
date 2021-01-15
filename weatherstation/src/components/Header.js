import React from 'react'
import "./style/Header.css"

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src = "https://pngimg.com/uploads/thunder/thunder_PNG3.png" alt="https://pngimg.com/uploads/sun/sun_PNG13410.png"/>

            <div className="header_nav">
                
                <div className="header_option">            
                    <span className="header_option_one">
                        Home
                    </span>    
                </div>

                <div className="header_option">            
                    <span className="header_option_two">
                        2-Hour
                    </span>
                </div>

                <div className="header_option">   
                    <span className="header_option_three">
                        24-Hour
                    </span>
                </div>

                <div className="header_option">   
                    <span className="header_option_four">
                        Covid
                    </span>
                </div>
            
            </div>

        </div>
    )
}

export default Header
