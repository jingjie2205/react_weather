import React from 'react'
import { Card, CardContent, Typography} from "@material-ui/core"

function Statusbox({status, num}) {
    return (
        <Card>
            <CardContent>
                <Typography className="Statusbox_status" color="textSecondary">{status}</Typography>    
                <h2 className="Statusbox_num">{num}</h2>
            </CardContent>
        </Card>
    )
}

export default Statusbox
