import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import "./style/NewsCard.css"

function NewsCard({data}) {
    return (
        <div className="newscard" display="flex">
            <Card style={{ height: '100%' }} variant="outlined">
                <CardContent>
                    <Typography className="NewsCard_Title" color="textSecondary">{data.title}</Typography>
                    <a href={data.url} target="_blank">
                        <img className="NewsCard_Image" src={data.urlToImage}/>
                    </a>
                    <Typography className="NewsCard_Desc" color="textSecondary">{data.description}</Typography>
                    <div className="source_date">
                        <Typography className="NewsCard_Source" color="textSecondary">{data.source.name}</Typography>
                        <Typography className="NewsCard_Date" color="textSecondary">{data.publishedAt}</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
    
}

export default NewsCard
