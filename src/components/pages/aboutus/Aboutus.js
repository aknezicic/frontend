import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import "../gutemberg.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Aboutus.css';



const Aboutus = () => {

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    const [data, setData] = useState(null);
    
        useEffect(
            () => {
                fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/pages/185')
                .then(response => response.json())
                .then(data => setData(data))
            }, []
        );
            
        if(!data) return <p>Loading...</p>   

           
    return(
        <div className="slider overflow-hidden">
            <h1 className="about-us">About us</h1>
            <Slider {...settings}>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/arabba.jpg'>
                            <img src="img/arabba.jpg" alt="Arabba" className="Arabba" /></Link>
                        <span className="image-caption">Arabba</span>
                    </div>
                    <div className="slider-slide">
                        <Link to ='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Cortina-dAmpezzo.jpg'>
                            <img src="img/Cortina-dAmpezzo.jpg" alt="Cortina d'Ampezzo" className="Cortina dAmpezzo" /></Link>
                        <span className="image-caption">Cortina d'Ampezzo</span>
                    </div>
                    <div className="slider-slide">
                        <Link to ='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/PassoTrecroci.jpg'>
                            <img src="img/PassoTrecroci.jpg" alt="Passo Tre Croci" className="PassoTrecroci" /></Link>
                        <span className="image-caption">Passo Tre Croci</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Lago_di_Sorapis.jpg'>
                            <img src="img/Lago_di_Sorapis.jpg" alt="Lago di Sorapis" className="Lago_di_Sorapis" /></Link>
                        <span className="image-caption">Lago di Sorapis</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Passo_Pordoi.jpg'>
                            <img src="img/Passo_Pordoi.jpg" alt="Passo Pordoi" className="Passo_Pordoi" /></Link>
                        <span className="image-caption">Passo Pordoi</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Passo_Pordoi-1.jpg'>
                            <img src="img/Passo_Pordoi-1.jpg" alt="Passo Pordoi" className="Passo_Pordoi-1" /></Link>
                        <span className="image-caption">Passo Pordoi</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Piz_Boe.jpg'>
                            <img src="img/Piz_Boe.jpg" alt="Piz Boe" className="Piz_Boe"/></Link>
                        <span className="image-caption">Piz Boe</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Lago_di_Fedai.jpg'>
                            <img src="img/Lago_di_Fedai.jpg" alt="Lago di Fedai" className="Lago_di_Fedai"/></Link>
                        <span className="image-caption">Lago di Fedai</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Viel_del_Pan.jpg'>
                            <img src="img/Viel_del_Pan.jpg" alt="Viel del Pan" className="Viel_del_Pan"/></Link>
                        <span className="image-caption">Viel del Pan</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Passo_-Falzarego.jpg'>
                            <img src="img/Passo_-Falzarego.jpg" alt="Passo Falzarego" className="Passo_-Falzarego"/></Link>
                        <span className="image-caption">Passo Falzarego</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Cinque_Torri.webp'>
                            <img src="img/Cinque_Torri.webp" alt="Cinque Torri" className="Cinque_Torri"/></Link>
                        <span className="image-caption">Cinque Torri</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Averau.jpg'>
                            <img src="img/Averau.jpg" alt="Averau" className="Averau"/></Link>
                        <span className="image-caption">Averau</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Nuvolau.jpg'>
                            <img src="img/Nuvolau.jpg" alt="Nuvolau" className="Nuvolau"/></Link>
                        <span className="image-caption">Nuvolau</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Nuvolau-1.jpg'>
                            <img src="img/Nuvolau-1.jpg" alt="Nuvolau" className="Nuvolau-1"/></Link>
                        <span className="image-caption">Nuvolau</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Malga_Ciapela.jpg'>
                            <img src="img/Malga_Ciapela.jpg" alt="Malga Ciapela" className="Malga_Ciapela"/></Link>
                        <span className="image-caption">Malga Ciapela</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Seraut.jpg'>
                            <img src="img/Seraut.jpg" alt="Seraut" className="Seraut"/></Link>
                        <span className="image-caption">Seraut</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Marmolada.jpg'>
                            <img src="img/Marmolada.jpg" alt="Marmolada" className="Marmolada"/></Link>
                        <span className="image-caption">Marmolada</span>
                    </div>
                    <div>
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Tre_Cime_di_Lavaredo.jpg'>
                            <img src="img/Tre_Cime_di_Lavaredo.jpg" alt="Tre Cime di Lavaredo" className="Tre_Cime_di_Lavaredo"/></Link>
                        <span className="image-caption">Tre Cime di Lavaredo</span>
                    </div>
                    <div>
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Misurina.jpg'>
                            <img src="img/Misurina.jpg" alt="Misurina" className="Misurina"/></Link>
                        <span className="image-caption">Misurina</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Ra_Valles.webp'>
                            <img src="img/Ra_Valles-1.webp" alt="Ra Valles" className="Ra_Valles-1"/></Link>
                        <span className="image-caption">Ra Valles</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Ra_Valles.jpg'>
                            <img src="img/Ra_Valles.jpg" alt="Ra Valles" className="Ra_Valles"/></Link>
                        <span className="image-caption">Ra Valles</span>
                    </div>
                    <div className="slider-slide">
                        <Link to='https://frontend.internetskimarketing.eu/backend/wp-content/uploads/2025/02/Cima_Tofana.jpg'>
                            <img src="img/Cima_Tofana.jpg" alt="Cima Tofana" className="Cima_Tofana"/></Link>
                        <span className="image-caption">Cima Tofana</span>
                    </div>
            </Slider>
            <div dangerouslySetInnerHTML={{__html:data.content.rendered}} />
        </div>
       );
    };
    
    export default Aboutus;