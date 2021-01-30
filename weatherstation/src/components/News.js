import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard';
import moment from 'moment';
import "./style/NewsCard.css"

function News() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=sg&apiKey=d7a4acd03f334cf8b485bfcabf484bb2")
            .then((response) => response.json())
            .then((data) => {
                setData(data.articles);
            })
    }, []);

    console.log(data);

    return (
        <div className="news_main">
            {data.map( (news) => (
                <NewsCard data={news}/>
            ))}
        </div>
    )
}

export default News
