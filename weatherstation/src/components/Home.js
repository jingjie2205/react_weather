import React, { useState } from 'react'
import "./style/Home.css"
import axios from 'axios';
import Map from './Map';
// import ReactMapGL, {Marker, Popup} from "react-map-gl"
// import useSwr from "swr";

const Home = () => {
    const [input, setInput] = useState("");     //store user textbox input
    const [weather, setWeather] = useState("");     //store weather status
    const [temp, setTemp] = useState([]);       //store temp
    const [loc, setLoc] = useState([]);       //store location

    //GET 2-hour api 
    const get2HWeatherData = (input) =>{
        const locations = ["Ang Mo Kio", "Bedok", "Bishan", "Boon Lay", "Bukit Batok", "Bukit Merah", "Bukit Panjang", "Bukit Timah", "Central Water Catchment", "Changi", "Chua Chu Kang", "Clementi", "City", "Geylang", "Hougang", "Jalan Bahar", "Jurong East", "Jurong Island", "Jurong West", "Kallang", "Lim Chu Kang", "Mandai", "Marine Parade", "Novena", "Pasir Ris", "Paya Lebar", "Pioneer", "Pulau Tekong",  "Pulau Ubin", "Punggol", "Queenstown", "Seletar", "Sembawang", "Sengkang", "Sentosa", "Serangoon", "Southern Islands", "Sungei Kadut", "Tampines", "Tanglin", "Tengah", "Toa Payoh", "Tuas", "Western Islands", "Western Water Catchment",  "Woodlands", "Yishun"];
        axios({
            method:"GET",
            url: "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"
        })
            .then((response) => {
                console.log(response);
                // setApidata([response]);
                setWeather(response.data.items[0].forecasts[locations.indexOf(input)].forecast);
                setLoc(response.data.items[0].forecasts[locations.indexOf(input)].area);
                
            })
            .catch((error) => {
                console.log(error);
            })
    }


    //GET 24-hour api 
    const get24HWeatherData = () =>{
        axios({
            method:"GET",
            url: "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast"
        })
            .then((response) => {
                setTemp(response.data.items[0].general.temperature.low + "°c");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="home">
            <div className="searchbox">
                <input
                    type="text" 
                    list = "location_select"
                    placeholder = "Enter Location"
                    value={input} 
                    onChange= {(e) => setInput(e.target.value)}
                    />

                    <datalist id = "location_select">
                        <option value = "Ang Mo Kio"/>
                        <option value = "Bedok"/>    
                        <option value = "Bishan"/>
                        <option value = "Boon Lay"/>
                        <option value = "Bukit Batok"/>
                        <option value = "Bukit Merah"/>
                        <option value = "Bukit Panjang"/>
                        <option value = "Bukit Timah"/>
                        <option value = "Central Water Catchment"/>
                        <option value = "Changi"/>
                        <option value = "Chua Chu Kang"/>
                        <option value = "Clementi"/>
                        <option value = "City"/>
                        <option value = "Geylang"/>    
                        <option value = "Hougang"/>
                        <option value = "Jalan Bahar"/>
                        <option value = "Jurong East"/>
                        <option value = "Jurong Island"/>
                        <option value = "Jurong West"/>
                        <option value = "Kallang"/>
                        <option value = "Lim Chu Kang"/>
                        <option value = "Mandai"/>
                        <option value = "Marine Parade"/>
                        <option value = "Novena"/>
                        <option value = "Pasir Ris"/>
                        <option value = "Paya Lebar"/>
                        <option value = "Pioneer"/>
                        <option value = "Pulau Tekong"/>    
                        <option value = "Pulau Ubin"/>
                        <option value = "Punggol"/>
                        <option value = "Queenstown"/>
                        <option value = "Seletar"/>
                        <option value = "Sembawang"/>
                        <option value = "Sengkang"/>
                        <option value = "Sentosa"/>
                        <option value = "Serangoon"/>
                        <option value = "Southern Islands"/>
                        <option value = "Sungei Kadut"/>
                        <option value = "Tampines"/>
                        <option value = "Tanglin"/>    
                        <option value = "Tengah"/>
                        <option value = "Toa Payoh"/>
                        <option value = "Tuas"/>
                        <option value = "Western Islands"/>
                        <option value = "Western Water Catchment"/>
                        <option value = "Woodlands"/>
                        <option value = "Yishun"/>  
                    </datalist>
                <button 
                    onClick = {() => {
                        get2HWeatherData(input);
                        get24HWeatherData();
                    }}>
                        Search
                </button>        
            </div>

            <div className = "data-info">
                <div className="locationbox">
                    <div className="location">{loc}</div>
                </div>

                <div className="weatherbox">
                    <div className="temp"> {temp} </div>
                    <div className="weather">{weather}</div>
                </div>
            </div> 
                <Map />
        </div>
    )
}

export default Home
