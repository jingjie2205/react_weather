import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import moment from 'moment';
import "./style/WeatherCard.css"

function WeatherCard({ info, icon}) {
    const date = moment(info.datetime).format("ddd");
    const low = info.low_temp;
    const high = info.max_temp;
    return (
        <Card style={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
                <div className="container_date">{date}</div>
                {/* <img src={"https://www.weatherbit.io/static/img/icons/" + icon + ".png"}/> */}
                <img src={"images/" + icon + ".png"}/>
                <div className="temp_container">
                    <div className="low">
                        {low}°
                    </div>
                    <div className="high">
                        {high}°
                    </div>
                </div> 
        </Card>                     
    )
}

export default WeatherCard
