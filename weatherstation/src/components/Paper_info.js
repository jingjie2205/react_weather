import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import moment from 'moment';
import "./style/Paper_info.css"

function Paper_info({ info, icon}) {
    const date = moment(info.datetime).format("ddd");
    const low = info.low_temp;
    const high = info.max_temp;
    return (
        <Card style={{ backgroundColor: "transparent" }}>
                <div className="container_date">{date}</div>
                <img src={"https://www.weatherbit.io/static/img/icons/" + icon + ".png"}/>
                <div className="temp_container">
                    <div className="low">
                        {low}
                    </div>
                    <div className="high">
                        {high}
                    </div>
                </div> 
        </Card>                     
    )
}

export default Paper_info
