import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import "./style/NewsCard.css"
import moment from 'moment';

function NewsCard({data}) {
        
    var date = moment(data.publishedAt).startOf('day').fromNow();

    return (
        <div className="newscard" display="flex">
            <Card className="card" style={{borderRadius: 20, opacity: 0.9}}>
                <CardContent style={{ height: '100%' }}>
                    <Typography className="NewsCard_Title" color="textSecondary">{data.title}</Typography>
                    <a href={data.url} target="_blank">
                        <img className="NewsCard_Image" src={data.urlToImage}/>
                    </a>
                    <Typography className="NewsCard_Desc" color="textSecondary">{data.description}</Typography>
                    <div className="source_date">
                        <h4 className="NewsCard_Source" color="textSecondary">{data.source.name}</h4>
                        <h4 className="NewsCard_Date" color="textSecondary">{date}</h4>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
    
}

export default NewsCard
