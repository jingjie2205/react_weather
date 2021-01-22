import React, { useState, useEffect } from 'react'
import "./style/Home.css"
import {MenuItem, FormControl, Select} from "@material-ui/core"
import WeatherCard from "./WeatherCard"
import NavBar from './NavBar';

const Home = () => {
    const [lscountries, setLscountries] = useState([]);
    const [country, setCountry] = useState("Singapore");   
    const [description, setDescription] = useState([]); 
    const [icon, setIcon] = useState("");
    const [temp, setTemp] = useState("");

    const [api, setApi] = useState({});
    const [icon2, setIcon2] = useState("");

    const [api2, setApi2] = useState({});
    const [icon3, setIcon3] = useState("");

    const [api3, setApi3] = useState({});
    const [icon4, setIcon4] = useState("");

    const [api4, setApi4] = useState({});
    const [icon5, setIcon5] = useState("");

    const [api5, setApi5] = useState({});
    const [icon6, setIcon6] = useState("");

    const [api6, setApi6] = useState({});
    const [icon7, setIcon7] = useState("");

    //get local country json file 
    useEffect(() => {
        // var data = require('D:/weather_react/weatherstation/src/data/countries.json');
        var data = require('../data/countries.json');
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

                setApi2(data.data[2]);
                setIcon3(data.data[2].weather.icon);

                setApi3(data.data[3]);
                setIcon4(data.data[3].weather.icon);


                setApi4(data.data[4]);
                setIcon5(data.data[4].weather.icon);

                setApi5(data.data[5]);
                setIcon6(data.data[5].weather.icon);

                setApi6(data.data[6]);
                setIcon7(data.data[6].weather.icon);
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
            setDescription(data.data[0].weather.description);
            setIcon(data.data[0].weather.icon);
            setTemp(data.data[0].temp);

            setApi(data.data[1]);
            setIcon2(data.data[1].weather.icon);

            setApi2(data.data[2]);
            setIcon3(data.data[2].weather.icon);

            setApi3(data.data[3]);
            setIcon4(data.data[3].weather.icon);


            setApi4(data.data[4]);
            setIcon5(data.data[4].weather.icon);

            setApi5(data.data[5]);
            setIcon6(data.data[5].weather.icon);

            setApi6(data.data[6]);
            setIcon7(data.data[6].weather.icon);
        })
    }

    return (
        <div>
            <div className="background"></div>
            <NavBar />
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
                            <div className="body_main">
                                <div className = "main_card">
                                    <img src={"images/" + icon + ".png"}/>
                                    <h1 className="main_description">{description}</h1>
                                    <h1 className="main_temp">{temp}°</h1>
                                </div>
                            </div>
                        </div>    
                    </div>    

                    <div className="home_footer">
                        <div className="footer_main_container">
                            <div className="footer_main">
                                <WeatherCard info = {api} icon = {icon2}/>
                                <WeatherCard info = {api2} icon = {icon3}/>
                                <WeatherCard info = {api3} icon = {icon4}/>
                                <WeatherCard info = {api4} icon = {icon5}/>
                                <WeatherCard info = {api5} icon = {icon6}/>
                                <WeatherCard info = {api6} icon = {icon7}/>
                            </div>
                        </div>
                    </div>    
                   
            </div>
        </div>
        
    )
}

export default Home
