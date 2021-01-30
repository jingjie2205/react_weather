import React, { useState, useEffect } from 'react'
import "./style/Map.css"
import ReactMapGL, {Marker, Popup} from "react-map-gl"
import useSwr from "swr";
import NavBar from './NavBar';


const Map = () => {
    const url = "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast";
    const [selectedData, setSelectedData] = useState(null); // store lat long 
    const [index, setIndex] = useState(null); // store forecasts.forecast

    const [viewport, setViewport] = useState({
        latitude: 1.34,
        longitude: 103.84,
        width: "1920px",
        height: "900px",
        zoom: 10.5
    })

    const fetcher = (...args) => fetch(...args).then(response => response.json()); //fetch api
    const {data, error} = useSwr(url, fetcher);  //store api data into data var
    const datas = data && !error ? data.area_metadata:[];  //extract data.area_metadata as datas
    const dataforecast = data && !error ? data.items[0].forecasts:[];  //extract data.items.forecasts as dataforecasts

    useEffect(() => {
        const esclistener = e => {
            if (e.key === "Escape"){
                setSelectedData(null);
            }
        };
        window.addEventListener("keydown", esclistener);
    }, []);

    return(
        <div>
            <div className="background"></div>
            <NavBar />
                <div className="map">
                    <ReactMapGL 
                        {...viewport}
                        mapboxApiAccessToken={"pk.eyJ1IjoiamluZ2ppZTIyMDUiLCJhIjoiY2tqYjVrYzM3MnV6NTJwcGRtd3BwaXhlcSJ9.DEfPLacpsYGfm0SVub3x4Q"}
                        onViewportChange={viewport =>{
                            setViewport(viewport); 
                        }}
                        mapStyle="mapbox://styles/mapbox/streets-v11">

                        {datas.map((data,index) => (
                            <Marker
                                key = {data.name}
                                latitude = {data.label_location.latitude + 0.03}
                                longitude = {data.label_location.longitude - 0.013}>
                                    
                                <button 
                                    className="loc-btn"
                                    onClick = {e =>{
                                        e.preventDefault();
                                        setSelectedData(data);
                                        setIndex(index);
                                    }}>
                                    <img src="https://img.icons8.com/color/48/000000/marker.png" alt="wind"/>

                                </button>
                            </Marker>
                        ))}

                        {selectedData ? (
                            <Popup 
                            latitude = {selectedData.label_location.latitude + 0.03}
                            longitude = {selectedData.label_location.longitude + 0.001}>
                            
                                <div className="popfont">
                                    <p>{selectedData.name} : {dataforecast[index].forecast}</p>
                                </div>
                            </Popup>
                        ) : null }

                    </ReactMapGL> 
                </div>
        </div>
    )
}

export default Map