import React from 'react'
import "./style/NavBar.css"
import { Link } from 'react-router-dom'
import {AppBar, Toolbar, Button, Typography} from '@material-ui/core'

function NavBar() {
    return (
        <div className="header">
            <AppBar style={{ background: 'transparent'}}>
                <Toolbar>
                    <Typography variant="h6" style={{align : "left"}}>~~oOo~~</Typography>
                    <Link to = "/">    
                        <Button color='inherit'>
                            Home
                        </Button>
                    </Link>  
                    <Link to = "/covid">  
                        <Button color='inherit'>
                            Covid-19
                        </Button>
                    </Link>
                    <Link to = "/map">  
                        <Button color='inherit'>
                            Search
                        </Button>
                    </Link>
                    <Link to = "/24-hour">  
                        <Button color='inherit'>
                            24-hour
                        </Button>
                    </Link>
                    <Link to = "/news">  
                        <Button color='inherit'>
                            News
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
