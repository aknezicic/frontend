import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SingleCountry.css';

const SingleCountry = () => {
    const { name } = useParams();
    const [singleCountry, setSingleCountry] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/alpha/' + name)
            .then(response => response.json())
            .then(data => setSingleCountry(data[0]))
            .catch(error => console.error('Error fetching country data:', error));
    }, [name]);

    if (!singleCountry) return <p>Loading...</p>;

    return (
        <div className="container singlecountry">
            <h1>{singleCountry.name.common}</h1>
            <div>
                <h3>Region:</h3>
                <p>{singleCountry.region}</p>
            </div>
            <div>
                <h3>Subregion:</h3>
                <p>{singleCountry.subregion}</p>
            </div>
            <div>
                <h3>Borders:</h3>
                <p>{singleCountry.borders ? singleCountry.borders.join(', ') : 'No borders'}</p>
            </div>
            <div>
                <h3>Languages:</h3>
                <p>{singleCountry.languages ? Object.values(singleCountry.languages).join(', ') : 'N/A'}</p>
            </div>
            <div>
                <h3>Currencies:</h3>
                <p>{singleCountry.currencies ? Object.values(singleCountry.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') : 'N/A'}</p>
            </div>
            <div>
                <h3>Timezones:</h3>
                <p>{singleCountry.timezones.join(', ')}</p>
            </div>
            <div>
                <h3>Capital:</h3>
                <p>{singleCountry.capital ? singleCountry.capital.join(', ') : 'N/A'}</p>
            </div>
            <div>
                <h3>Map:</h3>
                <a href={singleCountry.maps.googleMaps} target="_blank" rel="noopener noreferrer">
                    Look at Google Maps
                </a>
            </div>
            <div>
                <h3>Flag:</h3>
                <img src={singleCountry.flags.svg} alt={`Flag of ${singleCountry.name.common}`} />
            </div>
            <div>
                <h3>Coat of Arms:</h3>
                {singleCountry.coatOfArms.svg ? (
                    <img src={singleCountry.coatOfArms.svg} alt={`Coat of Arms of ${singleCountry.name.common}`} />
                ) : (
                    <p>No coat of arms available</p>
                )}
            </div>
        </div>
    );
};

export default SingleCountry;
