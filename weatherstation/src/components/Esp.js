import React from 'react';
import NavBar from './NavBar';
import "./style/Esp.css"

function Esp() {
    return (
        <div>
            <div className="esp_background"></div>
            <NavBar />
            <div className="esp_title">
                <h1>ESP-32</h1>
            </div>
            <div className="esp_graph">
                <iframe className="temp_thingspeak" width="auto" height="750" src="https://thingspeak.com/channels/1255293/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line&xaxis=Time&yaxis=Temp%28°C%29&api_key=51FA2P03Z9GIXNC7&width=auto&height=auto"></iframe>
                <iframe className="humidity_thingspeak" width="auto" height="750" src="https://thingspeak.com/channels/1255293/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&title=Humidity&type=line&xaxis=Time&api_key=51FA2P03Z9GIXNC7&width=auto&height=auto"></iframe>
                <iframe className="pressure_thingspeak" width="auto" height="750" src="https://thingspeak.com/channels/1255293/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&title=Pressure&type=line&xaxis=Time&api_key=51FA2P03Z9GIXNC7&width=auto&height=auto"></iframe>
            </div>
        </div>
    )
}

export default Esp

