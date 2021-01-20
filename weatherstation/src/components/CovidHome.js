import "./style/CovidHome.css";
import {MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core"
import React, { useState, useEffect } from 'react'
import Statusbox from "./Statusbox"
import Table from "./Table"

function Covidhome() {
    const [lscountries, setLsCoutries] = useState([]);
    const [country, setCountry] = useState("SG");
    const [apiinfo, setApiinfo] = useState({});
    const [table, setTable] = useState([]);
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
                // console.log(datas);
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
        console.log(countryISO2);

        const url = `https://api.covid19api.com/total/dayone/country/${countryISO2}`
        
            await fetch(url)
            .then(response => response.json())
            .then(data => {
                const datas = data[data.length-1]
                setCountry(countryISO2);
                setApiinfo(datas);
            })
    }

    return (
        <div>
            <div className='app_mainheader'>
                <h1>COVID-19 GRAPH</h1>
                <FormControl className="country_dropdown">
                    <Select 
                    variant="standard" 
                    value = {country}
                    onChange = {countrychange}>    
                        {/* <MenuItem value="SG">Singapore</MenuItem> */}
                        {lscountries.map((country) => (
                            <MenuItem value = {country.ISO2}>{country.name}</MenuItem>
                        ))}
                    </Select>    
                </FormControl>
            </div>

            <div className="app_mainbody">
                <div className = "app_maincontent">
                    <div className="app_statusbox">
                        <Statusbox status="Total Cases" num={nf.format(apiinfo.Confirmed)}/>
                        <Statusbox status="Recovered" num={nf.format(apiinfo.Recovered)}/>
                        <Statusbox status="Deaths" num={nf.format(apiinfo.Deaths)}/>
                        <Statusbox status="Active" num={nf.format(apiinfo.Active)}/>
                    </div>
                    <div className="app_graph">
                        <Graph />
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
