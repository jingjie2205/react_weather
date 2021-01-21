import React from 'react'
import { Card, CardContent, Typography} from "@material-ui/core"
import "./style/Statusbox.css"

function Statusbox({status, num, active, isRed, isYellow, isDred, ...props}) {
    return (
        <Card 
        onClick = {props.onClick} 
        className ={ `statusbox 
        ${active && `statusbox--selected`}` }>
            <CardContent>
                <Typography className="Statusbox_status" color="textSecondary">{status}</Typography>    
                <h1 className="Statusbox_num">{num}</h1>
            </CardContent>
        </Card>
    )
}

export default Statusbox
