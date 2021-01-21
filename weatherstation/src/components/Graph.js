import React , { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment';

function Graph({state , country}) {
    const confirmed = [];
    const active = [];
    const recovered = [];
    const deaths = [];
    const dates =[];
    const [cases, setCases] = useState([]);

    useEffect(() => {
        const getcountry = async () => {
            await fetch (`https://api.covid19api.com/total/dayone/country/${country}`)
                .then((response) => response.json())
                .then((data) => {
                    setCases(data);
            });
        };
        
        getcountry();
    }, [country]);

    cases.map( num => {
        confirmed.push(num.Confirmed);
        active.push(num.Active);
        recovered.push(num.Recovered);
        deaths.push(num.Deaths);
        var date = moment(num.Date).format("D MMM");
        dates.push(date);
    })
    
    if(state === 'Confirmed') {
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
                height = {570}
                // width = {500}
                options = {{
                    maintainAspectRatio: false,
                }}/>
            </div>
        )
    } else if (state === 'Active'){
        return (
            <div>
                <Line 
                data = {{
                    labels: dates,
                    datasets: [{
                        label: "Total Active",
                        data : active,
                        backgroundColor: [
                            'rgba(255, 255, 0, 0.4)'
                        ],
                        borderColor: [
                            'rgba(255, 255, 0, 1)',
                        ],
                        borderWidth: 1
                    }]
                }}
                height = {570}
                // width = {500}
                options = {{
                    maintainAspectRatio: false,
                }}/>
            </div>
        )
    } else if (state === 'Recovered') {
        return (
            <div>
                <Line 
                data = {{
                    labels: dates,
                    datasets: [{
                        label: "Total Recovered",
                        data : recovered,
                        backgroundColor: [
                            'rgba(0, 255, 0, 0.2)'
                        ],
                        borderColor: [
                            'rgba(0, 255, 0, 0.2)',
                        ],
                        borderWidth: 1
                    }]
                }}
                height = {570}
                // width = {500}
                options = {{
                    maintainAspectRatio: false,
                }}/>
            </div>
        )
    } else {
        return (
            <div>
                <Line 
                data = {{
                    labels: dates,
                    datasets: [{
                        label: "Total Deaths",
                        data : deaths,
                        backgroundColor: [
                            'rgba(128, 0, 0, 0.5)'
                        ],
                        borderColor: [
                            'rgba(128, 0, 0, 0.5)',
                        ],
                        borderWidth: 1
                    }]
                }}
                height = {570}
                // // width = {500}
                options = {{
                    maintainAspectRatio: false,
                }}/>
            </div>
        )
    }
  
}

export default Graph
