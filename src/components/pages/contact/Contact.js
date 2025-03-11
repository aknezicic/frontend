import React, { useState, useEffect } from "react"
import "../gutemberg.css";
import './Contact.css';

const Contact = () => {

    const [data, setData] = useState(null);

    useEffect(
        () => {
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/pages/182')
            .then(response => response.json())
            .then(data => setData(data))
        }, []
    );

    if(!data) return <p>Loading...</p>   

    return(
        <div>
            <h1 className="contact-us">Contact us</h1>
            <div dangerouslySetInnerHTML={{__html:data.content.rendered}} />
        </div>
        );
    };
    
    export default Contact;