import React from 'react'
import "./style/NavBar.css"
import { Link } from 'react-router-dom'
import {AppBar, Toolbar, Button, Typography, Grid} from '@material-ui/core'

function NavBar() {
    return (
        <div className="header">
            <AppBar style={{ background: 'transparent', underline: 'none', display: 'flex'}}>
                <Toolbar>
                    <Grid justify="space-evenly"  container spacing={1}>
                        <Grid item>
                            <Typography variant="h6" style={{align : "left"}}>~~oOo~~</Typography>
                        </Grid>
                        <Grid item>   
                            <Link to = "/" style={{ textDecoration: 'none' }}>    
                                <Button style={{borderRadius: 20, backgroundColor: "#FFFF", fontSize: "15px"}} variant="contained">
                                    Home
                                </Button>
                            </Link>  
                        </Grid>    
                        <Grid item> 
                            <Link to = "/covid" style={{ textDecoration: 'none' }}>  
                                <Button style={{borderRadius: 20, backgroundColor: "#FFFF", fontSize: "15px"}} variant="contained">
                                    Covid-19
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to = "/map" style={{ textDecoration: 'none' }}>  
                                <Button style={{borderRadius: 20, backgroundColor: "#FFFF", fontSize: "15px"}} variant="contained">
                                    Search
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to = "/24-hour" style={{ textDecoration: 'none' }}>  
                                <Button style={{borderRadius: 20, backgroundColor: "#FFFF", fontSize: "15px"}} variant="contained">
                                    24-hour
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to = "/news" style={{ textDecoration: 'none' }}>  
                                <Button style={{borderRadius: 20, backgroundColor: "#FFFF", fontSize: "15px"}} variant="contained">
                                    News
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
