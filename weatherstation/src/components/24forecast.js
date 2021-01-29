import React, { useState, useEffect } from 'react'
import "./style/24forecast.css"
import {Marker, Popup, StaticMap} from "react-map-gl"
import useSwr from "swr";
import moment from 'moment';
import NavBar from './NavBar';

const Forecast = () => {
    const url = "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast";

    const [viewport, setViewport] = useState({
        latitude: 1.353,
        longitude: 103.822,
        width: "1903px",
        height: "600px",
        zoom: 10.4
    })

    const fetcher = (...args) => fetch(...args).then(response => response.json()); //fetch api
    const {data, error} = useSwr(url, fetcher);  //store api data into data var

    //first
    const data_west = data && !error ? data.items[0].periods[0].regions.west:[];
    const data_north = data && !error ? data.items[0].periods[0].regions.north:[];
    const data_south = data && !error ? data.items[0].periods[0].regions.south:[];
    const data_east = data && !error ? data.items[0].periods[0].regions.east:[];
    const data_central = data && !error ? data.items[0].periods[0].regions.central:[];
    const datedatastart = data && !error ? data.items[0].periods[0].time.start:"";
    const datedataend = data && !error ? data.items[0].periods[0].time.end:"";

    const [westdata, setWestdata] = useState(null);
    const [northdata, setNorthdata] = useState(null);
    const [centraldata, setCentraldata] = useState(null);
    const [southdata, setSouthdata] = useState(null);
    const [eastdata, setEastdata] = useState(null);
    var date_first = moment(datedatastart).format("ddd") + " " + moment(datedatastart).format("LT") + " - " + moment(datedataend).format("ddd") + " " + moment(datedataend).format("LT");
    
    //second
    const data_west1 = data && !error ? data.items[0].periods[1].regions.west:[];
    const data_north1 = data && !error ? data.items[0].periods[1].regions.north:[];
    const data_south1 = data && !error ? data.items[0].periods[1].regions.south:[];
    const data_east1 = data && !error ? data.items[0].periods[1].regions.east:[];
    const data_central1 = data && !error ? data.items[0].periods[1].regions.central:[];
    const datedatastart1 = data && !error ? data.items[0].periods[1].time.start:"";
    const datedataend1 = data && !error ? data.items[0].periods[1].time.end:"";

    const [westdata1, setWestdata1] = useState(null);
    const [northdata1, setNorthdata1] = useState(null);
    const [centraldata1, setCentraldata1] = useState(null);
    const [southdata1, setSouthdata1] = useState(null);
    const [eastdata1, setEastdata1] = useState(null);
    var date_second = moment(datedatastart1).format("ddd") + " " + moment(datedatastart1).format("LT") + " - " + moment(datedataend1).format("ddd") + " " + moment(datedataend1).format("LT");

    //third
    const data_west2 = data && !error ? data.items[0].periods[2].regions.west:[];
    const data_north2 = data && !error ? data.items[0].periods[2].regions.north:[];
    const data_south2 = data && !error ? data.items[0].periods[2].regions.south:[];
    const data_east2 = data && !error ? data.items[0].periods[2].regions.east:[];
    const data_central2 = data && !error ? data.items[0].periods[2].regions.central:[];
    const datedatastart2 = data && !error ? data.items[0].periods[2].time.start:"";
    const datedataend2 = data && !error ? data.items[0].periods[2].time.end:"";

    const [westdata2, setWestdata2] = useState(null);
    const [northdata2, setNorthdata2] = useState(null);
    const [centraldata2, setCentraldata2] = useState(null);
    const [southdata2, setSouthdata2] = useState(null);
    const [eastdata2, setEastdata2] = useState(null);
    var date_third = moment(datedatastart2).format("ddd") + " " + moment(datedatastart2).format("LT") + " - " + moment(datedataend2).format("ddd") + " " + moment(datedataend2).format("LT");

    useEffect(() => {
        const esclistener = e => {
            if (e.key === "Escape"){
                setWestdata(null);
                setCentraldata(null);
                setNorthdata(null);
                setSouthdata(null);
                setEastdata(null);

                setWestdata1(null);
                setCentraldata1(null);
                setNorthdata1(null);
                setSouthdata1(null);
                setEastdata1(null);

                setWestdata2(null);
                setCentraldata2(null);
                setNorthdata2(null);
                setSouthdata2(null);
                setEastdata2(null);
            }
        };
        window.addEventListener("keydown", esclistener);
    }, []);
    
    return (
// =====================================================================  FirstMAP  =====================================================================
        <div>
            <div className="background3"/>    
            <NavBar />  
            <div className="map_main">
            <div className="first_forecast">
                <div className='forecast_mainheader'>
                    <h1>24-HOUR FORECAST</h1>
                </div>

                <div className="date">{date_first}</div>

                <StaticMap 
                    {...viewport}
                    mapboxApiAccessToken={"pk.eyJ1IjoiamluZ2ppZTIyMDUiLCJhIjoiY2tqYjVrYzM3MnV6NTJwcGRtd3BwaXhlcSJ9.DEfPLacpsYGfm0SVub3x4Q"}
                    onViewportChange={viewport =>{
                        setViewport(viewport); 
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v11">

{/* =====================================================================  West  ===================================================================== */}
                    { data_west ? (
                        <Marker
                            key = "west" 
                            latitude = {1.395}
                            longitude = {103.66}>
                                
                            <button
                            className="button-west"
                            onClick = {e =>{
                                e.preventDefault();
                                setWestdata(data_west);
                            }}>                              
                                <img src={"/images/" + data_west +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {westdata ? (
                        <Popup 
                        className = "pop-west"
                        latitude = {1.387}
                        longitude = {103.702}>
                        
                            <div className="popfont">
                                <p>West: {data_west}</p>
                            </div>
                        </Popup>
                    ) : null } 
{/* =====================================================================  Central  ===================================================================== */}
                    { data_central ? (
                        <Marker
                            key = "central" 
                            latitude = {1.403}
                            longitude = {103.764}>
                                
                            <button
                            className="button-central"
                            onClick = {e =>{
                                e.preventDefault();
                                setCentraldata(data_central);
                            }}>                              
                                <img src={"/images/" + data_central +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {centraldata ? (
                        <Popup 
                        className = "pop-central"
                        latitude = {1.393}
                        longitude = {103.805}>
                        
                            <div className="popfont">
                                <p>Central: {data_central}</p>
                            </div>
                        </Popup>
                    ) : null } 

{/* =====================================================================  North  ===================================================================== */}
                    { data_north ? (
                        <Marker
                            key = "north" 
                            latitude = {1.465}
                            longitude = {103.764}>
                                
                            <button
                            className="button-north"
                            onClick = {e =>{
                                e.preventDefault();
                                setNorthdata(data_north);
                            }}>                              
                                <img src={"/images/" + data_north +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {northdata ? (
                        <Popup 
                        className = "pop-north"
                        latitude = {1.457}
                        longitude = {103.805}>
                        
                            <div className="popfont">
                                <p>North: {data_north}</p>
                            </div>
                        </Popup>
                    ) : null }                

{/* =====================================================================  South  ===================================================================== */}
                    { data_south ? (
                        <Marker
                            key = "south" 
                            latitude = {1.34}
                            longitude = {103.764}>
                                
                            <button
                            className="button-south"
                            onClick = {e =>{
                                e.preventDefault();
                                setSouthdata(data_south);
                            }}>                              
                                <img src={"/images/" + data_south +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {southdata ? (
                        <Popup 
                        className = "pop-south"
                        latitude = {1.33}
                        longitude = {103.805}>
                        
                            <div className="popfont">
                                <p>South: {data_south}</p>
                            </div>
                        </Popup>
                    ) : null }     

{/* =====================================================================  East  ===================================================================== */}
                    { data_east ? (
                        <Marker
                            key = "east" 
                            latitude = {1.386}
                            longitude = {103.88}>
                                
                            <button
                            className="button-east"
                            onClick = {e =>{
                                e.preventDefault();
                                setEastdata(data_east);
                            }}>                              
                                <img src={"/images/" + data_east +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {eastdata ? (
                        <Popup 
                        className = "pop-east"
                        latitude = {1.377}
                        longitude = {103.921}>
                        
                            <div className="popfont">
                                <p>East: {data_east}</p>
                            </div>
                        </Popup>
                    ) : null }                         
                    
                </StaticMap>
            </div>
{/* =====================================================================  SecondMAP  ===================================================================== */}
            
            <div className="second_forecast">
                <div className="date">{date_second}</div>
                <StaticMap 
                    {...viewport}
                    mapboxApiAccessToken={"pk.eyJ1IjoiamluZ2ppZTIyMDUiLCJhIjoiY2tqYjVrYzM3MnV6NTJwcGRtd3BwaXhlcSJ9.DEfPLacpsYGfm0SVub3x4Q"}
                    onViewportChange={viewport =>{
                        setViewport(viewport); 
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v11">

{/* =====================================================================  West  ===================================================================== */}
                    { data_west1 ? (
                        <Marker
                            key = "west" 
                            latitude = {1.395}
                            longitude = {103.66}>
                                
                            <button
                            className="button-west"
                            onClick = {e =>{
                                e.preventDefault();
                                setWestdata1(data_west1);
                            }}>                              
                                <img src={"/images/" + data_west1 +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {westdata1 ? (
                        <Popup 
                        className = "pop-west"
                        latitude = {1.387}
                        longitude = {103.702}>
                        
                            <div className="popfont">
                                <p>West: {data_west1}</p>
                            </div>
                        </Popup>
                    ) : null } 
{/* =====================================================================  Central  ===================================================================== */}
                    { data_central1 ? (
                        <Marker
                            key = "central" 
                            latitude = {1.403}
                            longitude = {103.764}>
                                
                            <button
                            className="button-central"
                            onClick = {e =>{
                                e.preventDefault();
                                setCentraldata1(data_central1);
                            }}>                              
                                <img src={"/images/" + data_central1 +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {centraldata1 ? (
                        <Popup 
                        className = "pop-central"
                        latitude = {1.393}
                        longitude = {103.805}>
                        
                            <div className="popfont">
                                <p>Central: {data_central1}</p>
                            </div>
                        </Popup>
                    ) : null } 

{/* =====================================================================  North  ===================================================================== */}
                    { data_north1 ? (
                        <Marker
                            key = "north" 
                            latitude = {1.465}
                            longitude = {103.764}>
                                
                            <button
                            className="button-north"
                            onClick = {e =>{
                                e.preventDefault();
                                setNorthdata1(data_north1);
                            }}>                              
                                <img src={"/images/" + data_north1 +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {northdata1 ? (
                        <Popup 
                        className = "pop-north"
                        latitude = {1.457}
                        longitude = {103.805}>
                        
                            <div className="popfont">
                                <p>North: {data_north1}</p>
                            </div>
                        </Popup>
                    ) : null }                

{/* =====================================================================  South  ===================================================================== */}
                    { data_south1 ? (
                        <Marker
                            key = "south" 
                            latitude = {1.34}
                            longitude = {103.764}>
                                
                            <button
                            className="button-south"
                            onClick = {e =>{
                                e.preventDefault();
                                setSouthdata1(data_south1);
                            }}>                              
                                <img src={"/images/" + data_south1 +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {southdata1 ? (
                        <Popup 
                        className = "pop-south"
                        latitude = {1.33}
                        longitude = {103.805}>
                        
                            <div className="popfont">
                                <p>South: {data_south1}</p>
                            </div>
                        </Popup>
                    ) : null }     

{/* =====================================================================  East  ===================================================================== */}
                    { data_east1 ? (
                        <Marker
                            key = "east" 
                            latitude = {1.386}
                            longitude = {103.88}>
                                
                            <button
                            className="button-east"
                            onClick = {e =>{
                                e.preventDefault();
                                setEastdata1(data_east1);
                            }}>                              
                                <img src={"/images/" + data_east1 +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {eastdata1 ? (
                        <Popup 
                        className = "pop-east"
                        latitude = {1.377}
                        longitude = {103.921}>
                        
                            <div className="popfont">
                                <p>East: {data_east1}</p>
                            </div>
                        </Popup>
                    ) : null }     
                </StaticMap>
            </div>
        
            {/* =====================================================================  ThirdMAP  ===================================================================== */}
            
            <div className="third_forecast">
                <div className="date">{date_third}</div>
                <StaticMap 
                    {...viewport}
                    mapboxApiAccessToken={"pk.eyJ1IjoiamluZ2ppZTIyMDUiLCJhIjoiY2tqYjVrYzM3MnV6NTJwcGRtd3BwaXhlcSJ9.DEfPLacpsYGfm0SVub3x4Q"}
                    onViewportChange={viewport =>{
                        setViewport(viewport); 
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v11">

{/* =====================================================================  West  ===================================================================== */}
                    { data_west2 ? (
                        <Marker
                            key = "west" 
                            latitude = {1.395}
                            longitude = {103.66}>
                                
                            <button
                            className="button-west"
                            onClick = {e =>{
                                e.preventDefault();
                                setWestdata2(data_west2);
                            }}>                              
                                <img src={"/images/" + data_west2 +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {westdata2 ? (
                        <Popup 
                        className = "pop-west"
                        latitude = {1.387}
                        longitude = {103.702}>
                        
                            <div className="popfont">
                                <p>West: {data_west2}</p>
                            </div>
                        </Popup>
                    ) : null } 
{/* =====================================================================  Central  ===================================================================== */}
                    { data_central2 ? (
                        <Marker
                            key = "central" 
                            latitude = {1.403}
                            longitude = {103.764}>
                                
                            <button
                            className="button-central"
                            onClick = {e =>{
                                e.preventDefault();
                                setCentraldata2(data_central2);
                            }}>                              
                                <img src={"/images/" + data_central2 +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {centraldata2 ? (
                        <Popup 
                        className = "pop-central"
                        latitude = {1.393}
                        longitude = {103.805}>
                        
                            <div className="popfont">
                                <p>Central: {data_central2}</p>
                            </div>
                        </Popup>
                    ) : null } 

{/* =====================================================================  North  ===================================================================== */}
                    { data_north2 ? (
                        <Marker
                            key = "north" 
                            latitude = {1.465}
                            longitude = {103.764}>
                                
                            <button
                            className="button-north"
                            onClick = {e =>{
                                e.preventDefault();
                                setNorthdata2(data_north2);
                            }}>                              
                                <img src={"/images/" + data_north2 +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {northdata2 ? (
                        <Popup 
                        className = "pop-north"
                        latitude = {1.457}
                        longitude = {103.805}>
                        
                            <div className="popfont">
                                <p>North: {data_north2}</p>
                            </div>
                        </Popup>
                    ) : null }                

{/* =====================================================================  South  ===================================================================== */}
                    { data_south2 ? (
                        <Marker
                            key = "south" 
                            latitude = {1.34}
                            longitude = {103.764}>
                                
                            <button
                            className="button-south"
                            onClick = {e =>{
                                e.preventDefault();
                                setSouthdata2(data_south2);
                            }}>                              
                                <img src={"/images/" + data_south2 +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {southdata2 ? (
                        <Popup 
                        className = "pop-south"
                        latitude = {1.33}
                        longitude = {103.805}>
                        
                            <div className="popfont">
                                <p>South: {data_south2}</p>
                            </div>
                        </Popup>
                    ) : null }     

{/* =====================================================================  East  ===================================================================== */}
                    { data_east2 ? (
                        <Marker
                            key = "east" 
                            latitude = {1.386}
                            longitude = {103.88}>
                                
                            <button
                            className="button-east"
                            onClick = {e =>{
                                e.preventDefault();
                                setEastdata2(data_east2);
                            }}>                              
                                <img src={"/images/" + data_east2 +".png"} alt={"wind"}/>
                            </button>
                        </Marker>
                    ) : null }
                    {eastdata2 ? (
                        <Popup 
                        className = "pop-east"
                        latitude = {1.377}
                        longitude = {103.921}>
                        
                            <div className="popfont">
                                <p>East: {data_east2}</p>
                            </div>
                        </Popup>
                    ) : null }     
                </StaticMap>
            </div>
            </div>
        </div>    
    
    )
}

export default Forecast
