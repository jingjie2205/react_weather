import React from 'react'
import { Card, CardContent } from "@material-ui/core"
import "./style/NewsCard.css"

function NewsCard({title, desc, source, date}) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography className="NewsCard_Title" color="textSecondary">{title}</Typography>
                    <img className="NewsCard_Image" />
                    <Typography className="NewsCard_Desc" color="textSecondary">{desc}</Typography>
                    <div className="source_date">
                        <Typography className="NewsCard_Source" color="textSecondary">{source}</Typography>
                        <Typography className="NewsCard_Date" color="textSecondary">{date}</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default NewsCard
