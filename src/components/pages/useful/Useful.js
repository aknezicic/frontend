import React from "react"
import './Useful.css';
import {Link} from 'react-router-dom';

const Useful = () => {
    
    return(
    <div className="container-fluid useful">
        <h1>Useful</h1>
        <h2>Here you can find links to information that is useful on any trip</h2>
        <div className="row">
                <div className="col-lg-6 left me-auto">
                    <Link to="/countries" className="countries btn">Countries</Link>
                    <p>Here you can find various information about all the countries of the world (e.g. in which region and subregion they are located, with which countries they border,
                       which language is spoken in them, which currency is used, in which time zone the country is, which is the capital, a view on Google Maps as well as a view of the flag
                       and coat of arms of the country)</p>
                </div>
                <div className="col-lg-6">
                    <img src="/img/world.jpg" alt="map of the world" className="world" />
                </div>

                <div className="col-lg-6">
                    <img src="/img/currencies.jpg.webp" alt="world currencies" className="currencies" />
                </div>
                <div className="col-lg-6 right ms-auto">   
                    <Link to="/exchange" className="exchange btn">Exchange</Link>
                    <p>Here you can find a list of all world currencies, then enter a certain amount of the selected currency, and convert it very easily to any other world currency.</p>
                </div>    

                <div className="col-lg-6 left me-auto">
                    <Link to="/weather" className="weather-btn">Weather</Link>
                    <p>Here you can find the weather forecast for seven days: by entering the desired destination, data on air temperature (°C), wind speed (m/s), air pressure (hPa) and 
                       a graphic display of the weather are displayed.</p>
                    <p> </p>
                </div>
                <div className="col-lg-6">
                    <img src="/img/weatherforecast.jpg" alt="weatherforecast" className="weatherforecast" />
                </div>   
        </div>
    </div>
    );
};

export default Useful;