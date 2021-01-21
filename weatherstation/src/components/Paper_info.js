import React from 'react'
import { Paper, Typography } from "@material-ui/core"
import moment from 'moment';
import "./style/Paper_info.css"

function Paper_info({ info, icon}) {
    const date = moment(info.datetime).format("ddd");
    const low = info.low_temp;
    const high = info.max_temp;
    return (
        // <Paper variant="outlined" className="paper_container">
            <div className="container">
                <div className="container_date">{date}</div>
                <img src={"https://www.weatherbit.io/static/img/icons/" + icon + ".png"}/>
                <div>{low}   {high}</div>
            </div>    
        // </Paper>
    )
}

export default Paper_info
