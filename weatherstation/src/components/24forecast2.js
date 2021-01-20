import React, { useState, useEffect } from 'react'
import "./style/Home24.css"
import ReactMapGL, {Marker, Popup} from "react-map-gl"
import useSwr from "swr";


const Forecast2 = () => {
    const url = "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast";

    const [viewport, setViewport] = useState({
        latitude: 1.353,
        longitude: 103.822,
        width: "1000px",
        height: "600px",
        zoom: 10.4
    })

    const fetcher = (...args) => fetch(...args).then(response => response.json()); //fetch api
    const {data, error} = useSwr(url, fetcher);  //store api data into data var

    const data_west = data && !error ? data.items[0].periods[2].regions.west:[];
    const data_north = data && !error ? data.items[0].periods[2].regions.north:[];
    const data_south = data && !error ? data.items[0].periods[2].regions.south:[];
    const data_east = data && !error ? data.items[0].periods[2].regions.east:[];
    const data_central = data && !error ? data.items[0].periods[2].regions.central:[];

    const [westdata, setWestdata] = useState(null);
    const [northdata, setNorthdata] = useState(null);
    const [centraldata, setCentraldata] = useState(null);
    const [southdata, setSouthdata] = useState(null);
    const [eastdata, setEastdata] = useState(null);

    useEffect(() => {
        const esclistener = e => {
            if (e.key === "Escape"){
                setWestdata(null);
                setCentraldata(null);
                setNorthdata(null);
                setSouthdata(null);
                setEastdata(null);
            }
        };
        window.addEventListener("keydown", esclistener);
    }, []);
    
    return (

            <div>
                <ReactMapGL 
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
                        
                            <div>
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
                        
                            <div>
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
                        
                            <div>
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
                        
                            <div>
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
                        
                            <div>
                                <p>East: {data_east}</p>
                            </div>
                        </Popup>
                    ) : null }                         
                    

                </ReactMapGL>
                <div>third</div>
            </div>
    
    )
}

export default Forecast2