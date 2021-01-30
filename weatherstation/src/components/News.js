import React , { useState, useEffect } from 'react'
import moment from 'moment';

function News() {

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=sg&apiKey=d7a4acd03f334cf8b485bfcabf484bb2")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default News
