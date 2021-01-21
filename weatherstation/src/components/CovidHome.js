import "./style/CovidHome.css";
import {MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core"
import React, { useState, useEffect } from 'react'
import Statusbox from "./Statusbox"
import Table from "./Table"
import Graph from "./Graph"
import moment from 'moment';
import { Line } from 'react-chartjs-2'
import Covidgraph from './Covidgraph'

function Covidhome() {
    const [lscountries, setLsCoutries] = useState([]);
    const [country, setCountry] = useState("SG");
    const [apiinfo, setApiinfo] = useState({});
    const [table, setTable] = useState([]);
    const [statustype, setStatustype] = useState("Confirmed");
    var nf = new Intl.NumberFormat();

    //display default value (SG) data
    useEffect(() => {
        fetch("https://api.covid19api.com/country/SG")
            .then((response) => response.json())
            .then((data) => {
                const datas = data[data.length-1]
                setApiinfo(datas);
            })
    }, []);

    //populate menu item
    useEffect(() => {
        const getcountry = async () => {
            await fetch ("https://api.covid19api.com/summary")
                .then((response) => response.json())
                .then((data) => {
                const datas = data.Countries
                const countries = datas.map((country) => ({
                    name : country.Country,
                    ISO2 : country.CountryCode,
                }));
                setTable(datas);
                setLsCoutries(countries);
            });
        };
        getcountry();
    }, []);

    //onclick event to retrieve user input data
    const countrychange = async (evt) => {
        const countryISO2 = evt.target.value;
        setCountry(countryISO2);

        const url = `https://api.covid19api.com/total/dayone/country/${countryISO2}`
        
            await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(countryISO2);
                setApiinfo(data[data.length-1]); //retreive the last data of the array
            })
    }
    return (
        <div>
            <div className='app_mainheader' >
                <h1>COVID-19 GRAPH</h1>
                <FormControl className="country_dropdown" style={{minWidth: 150}}>
                    <Select 
                    variant="standard" 
                    value = {country}
                    onChange = {countrychange}>
                        {lscountries.map((country) => (
                            <MenuItem value = {country.ISO2}>{country.name}</MenuItem>
                        ))}
                    </Select>    
                </FormControl>
            </div>

            <div className="app_mainbody">
                <div className = "app_maincontent">
                    <div className="app_statusbox">
                        <Statusbox 
                        isRed
                        status="Total Cases" 
                        num={nf.format(apiinfo.Confirmed)} 
                        onClick={(e) => setStatustype("Confirmed")}
                        active={statustype === "Confirmed"}
                        />

                        <Statusbox 
                        status="Recovered" 
                        num={nf.format(apiinfo.Recovered)} 
                        onClick={(e) => setStatustype("Recovered")}
                        active={statustype === "Recovered"}/>

                        <Statusbox 
                        isDred
                        status="Deaths" 
                        num={nf.format(apiinfo.Deaths)} 
                        onClick={(e) => setStatustype("Deaths")}
                        active={statustype === "Deaths"}/>

                        <Statusbox 
                        isYellow
                        status="Active" 
                        num={nf.format(apiinfo.Active)} 
                        onClick={(e) => setStatustype("Active")}
                        active={statustype === "Active"}/>
                    </div>
                        <div className="app_graph">
                            <Graph state = {statustype} country={country}/>
                        </div>
                </div>    
                <Card className="app_sidebar">
                    <CardContent>
                        <h3>Total Cases By Country</h3>
                        <Table countries={table}/>
                    </CardContent>
                </Card>    
            </div>    
        </div>
    )
}

export default Covidhome
