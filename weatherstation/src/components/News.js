import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard';
import "./style/NewsCard.css"
import {MenuItem, FormControl, Select} from "@material-ui/core"

function NewsInt() {

    const [country, setCountry] = useState("sg");
    const [data, setData] = useState([]);

    //default value (SG)
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d7a4acd03f334cf8b485bfcabf484bb2")
            .then((response) => response.json())
            .then((data) => {
                setData(data.articles);
            })
    }, []);

    //on search bar change
    const countrychange = async (evt) => {
        const countryISO2 = evt.target.value;

        const url = `https://newsapi.org/v2/top-headlines?country=${countryISO2}&apiKey=d7a4acd03f334cf8b485bfcabf484bb2`
        
            await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(countryISO2);
                setData(data.articles);
            })
    }

    console.log(data);
    
    return (
        <div>
            <div className="newscountry_dropdown">
                <FormControl style={{minWidth: 150}} variant="filled">
                    <Select className="selectmenu" variant="standard" onChange = {countrychange} value = {country}>
                        <MenuItem value = "ar">Argentina</MenuItem>
                        <MenuItem value = "gr">Greece</MenuItem>
                        <MenuItem value = "nl">Netherlands</MenuItem>
                        <MenuItem value = "za">South Africa</MenuItem>
                        <MenuItem value = "sg">Singapore</MenuItem>

                        <MenuItem value = "au">Australia</MenuItem>
                        <MenuItem value = "hk">Hong Kong</MenuItem>
                        <MenuItem value = "nz">New Zealand</MenuItem>
                        <MenuItem value = "kr">South Korea</MenuItem>
                    
                        <MenuItem value = "at">Austria</MenuItem>
                        <MenuItem value = "hu">Hungary</MenuItem>
                        <MenuItem value = "ng">Nigeria</MenuItem>
                        <MenuItem value = "se">Sweden</MenuItem>

                        <MenuItem value = "be">Belgium</MenuItem>
                        <MenuItem value = "in">India</MenuItem>
                        <MenuItem value = "no">Norway</MenuItem>
                        <MenuItem value = "ch">Switzerland</MenuItem>

                        <MenuItem value = "br">Brazil</MenuItem>
                        <MenuItem value = "id">Indonesia</MenuItem>
                        <MenuItem value = "ph">Philippines</MenuItem>
                        <MenuItem value = "tw">Taiwan</MenuItem>

                        <MenuItem value = "bg">Bulgaria</MenuItem>
                        <MenuItem value = "ie">Ireland</MenuItem>
                        <MenuItem value = "pl">Poland</MenuItem>
                        <MenuItem value = "th">Thailand</MenuItem>

                        <MenuItem value = "ca">Canada</MenuItem>
                        <MenuItem value = "il">Israel</MenuItem>
                        <MenuItem value = "pt">Portugal</MenuItem>
                        <MenuItem value = "tr">Turkey</MenuItem>

                        <MenuItem value = "cn">China</MenuItem>
                        <MenuItem value = "it">Italy</MenuItem>
                        <MenuItem value = "ro">Romania</MenuItem>
                        <MenuItem value = "ae">UAE</MenuItem>

                        <MenuItem value = "co">Colombia</MenuItem>
                        <MenuItem value = "jp">Japan</MenuItem>
                        <MenuItem value = "ru">Russia</MenuItem>
                        <MenuItem value = "ua">Ukraine</MenuItem>

                        <MenuItem value = "cu">Cuba</MenuItem>
                        <MenuItem value = "lv">Latvia</MenuItem>
                        <MenuItem value = "sa">Saudi Arabia</MenuItem>
                        <MenuItem value = "gb">United Kingdom</MenuItem>

                        <MenuItem value = "cz">Czech Republic</MenuItem>
                        <MenuItem value = "lt">Lithuania</MenuItem>
                        <MenuItem value = "rs">Serbia</MenuItem>
                        <MenuItem value = "us">United States</MenuItem>

                        <MenuItem value = "eg">Egypt</MenuItem>
                        <MenuItem value = "my">Malaysia</MenuItem>
                        <MenuItem value = "ve">Venuzuela</MenuItem>
                        <MenuItem value = "fr">France</MenuItem>

                        <MenuItem value = "mx">Mexico</MenuItem>
                        <MenuItem value = "sk">Slovakia</MenuItem>
                        <MenuItem value = "de">Germany</MenuItem>
                        <MenuItem value = "ma">Morocco</MenuItem>
                        <MenuItem value = "si">Slovenia</MenuItem>
                    </Select>    
                </FormControl>
            </div>
            <div className="news_main">
                {data.map( (news) => (
                    <NewsCard data={news}/>
                ))}
            </div>
        </div>    
    )
}

export default NewsInt
