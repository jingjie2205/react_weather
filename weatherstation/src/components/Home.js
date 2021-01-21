import React, { useState, useEffect } from 'react'
import "./style/Home.css"
import {MenuItem, FormControl, Select} from "@material-ui/core"
import Paper_info from "./Paper_info"

const Home = () => {
    const [lscountries, setLscountries] = useState([]);
    const [country, setCountry] = useState("Singapore");   
    const [description, setDescription] = useState([]); 
    const [icon, setIcon] = useState("");
    const [icon2, setIcon2] = useState("");
    const [temp, setTemp] = useState("");
    const [api, setApi] = useState({});

    //get local country json file 
    useEffect(() => {
        var data = require('D:/weather_react/weatherstation/src/data/countries.json');
        setLscountries(data);
    }, []);

    //display default value (SG) data
    useEffect(() => {
        fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=Singapore&key=349c00f0a1f9440b89703a5fb036c265&days=7")
            .then((response) => response.json())
            .then((data) => {
                setDescription(data.data[0].weather.description);
                setIcon(data.data[0].weather.icon);
                setTemp(data.data[0].temp);
                setApi(data.data[1]);
                setIcon2(data.data[1].weather.icon);
            })
    }, []);

    console.log(icon2);

    //onchange event handler
    const countrychange = async (evt) => {
    const countryname = evt.target.value;
    setCountry(countryname);
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${countryname}&key=349c00f0a1f9440b89703a5fb036c265&days=7`
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="background">
        <div className="home" >
            
            <div className="home_mainheader">
                <FormControl className="country_dropdown" style={{minWidth: 150}}>
                    <Select 
                    variant="standard"
                    value = {country}
                    onChange = {countrychange}>
                        {lscountries.map((country) => (
                            <MenuItem value = {country.country_name}>{country.country_name}</MenuItem>
                        ))}
                    </Select>    
                </FormControl>
            </div>


            <div className="home_body">

                <div className="content_container">
                    <div className="body_low">
                        low
                    </div>

                    <div className="body_main">
                        
                        <div className = "main_card">
                            <img src={"https://www.weatherbit.io/static/img/icons/" + icon + ".png"} />
                            {/* <img src={"https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/master/dist/icons/black/png/128x128/tstorms.png"} /> */}
                            <h1 className="main_weather">{description}</h1>
                            <h1 className="main_temp">{temp}°</h1>
                        </div>
                    </div>

                    <div className="body_high">
                        high
                    </div>
                </div>    

            </div>    


            <div className="home_footer">
                <div className="footer_main_container">
                    <div className="footer_main">
                        <Paper_info 
                        info = {api}
                        icon = {icon2}/>
                    </div>
                </div>
            </div>    
        </div>
        </div>
    )
}

export default Home
