import React, { useState, useEffect } from "react"
import "../gutemberg.css";
import './Contact.css';

const Contact = () => {

    const [data, setData] = useState(null);
    const REACT_APP_URL = process.env.REACT_APP_URL;

    useEffect(
        () => {
            fetch(REACT_APP_URL + 'wp-json/wp/v2/pages/182')
            .then(response => response.json())
            .then(data => setData(data))
        }, [REACT_APP_URL]
    );

    if(!data) return <p>Loading...</p>   

    return(
        <div className="contact">
            <h1 className="contact-us">Contact us</h1>
            <div dangerouslySetInnerHTML={{__html:data.content.rendered}} />
        </div>
        );
    };
    
    export default Contact;