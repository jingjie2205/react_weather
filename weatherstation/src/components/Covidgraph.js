import React from 'react'
import "./style/Covidgraph.css"
import { Line } from 'react-chartjs-2'
import useSwr from "swr";
import moment from 'moment';

const Covidgraph = () => {
    const url = "https://api.covid19api.com/country/singapore/status/confirmed";
    const confirmed = [];
    const dates = [];

    const fetcher = (...args) => fetch(...args).then(response => response.json()); //fetch api
    const {data, error} = useSwr(url, fetcher);
    const datas = data && !error ? data:[];

    datas.map( data => {
        confirmed.push(data.Cases);
        var date = moment(data.Date).format("D MMM");
        dates.push(date);
    })

    return (
        <div>
            <Line 
            data = {{
                labels: dates,
                datasets: [{
                    label: "Total Cases",
                    data : confirmed,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
            }}
            height = {400}
            width = {500}
            options = {{
                maintainAspectRatio: false,
            }}/>
        </div>
    );
} 

export default Covidgraph