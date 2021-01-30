import React, { useState, useEffect } from 'react'
// import "./style/Map.css"
// import ReactMapGL, {Marker, Popup} from "react-map-gl"
// import useSwr from "swr";
import NavBar from './NavBar';

function Carpark() {
    const [data, setData] = useState([]);
    // const [, setCases] = useState([]);
    const carpark_info = [];
    const carpark_num = []; //store name of carpark into an array

    useEffect(() => {
        const getcarpark = async () => {
            await fetch ("https://api.data.gov.sg/v1/transport/carpark-availability")
                .then((response) => response.json())
                .then((data) => {
                    setData(data.items[0].carpark_data);
            });
        };
        getcarpark();
    }, []);

    data.map( datas => {
        carpark_num.push(datas.carpark_number);
    })

    carpark_num.map( (carpark, index) => {
        fetch (`https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q=${carpark}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.result.records.length == 0){
                    }
                    // carpark_info.push(data);
            });
    } )

    console.log(carpark_info);
    return (
        <div>
            <NavBar />
            hi
        </div>
    )
}

export default Carpark;
