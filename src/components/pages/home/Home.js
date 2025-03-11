
import React from "react"
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    
    return(
    <>
    <div className="container-fluid hero-section">

        <div className="container-fluid content-wrapper hero py-5" id="Start">
			
            <div className="row">
                <div className="col-md-2">
                    <div className="social-links">
                        <div className="text-block">Follow us</div>
                        <div className="social-icon">
                            <Link to="/" className="instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg></Link>
                            <Link to="/" className="twitter"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                                </svg></Link>
                        </div>
                    </div>
                </div>	
                <div className="col-md-8">	
                    <div className="content-hero" id="luxy">
                        <div className="tagline">
                            <div className="tagline-line"></div>
                            <h5 className="heading-tagline">A Hiking guide</h5>
                        </div>
                            <h1 className="h1-title">Be prepared for the Mountains and beyond!</h1>
                            <a href="#section" className="link-to hero">
                                <div>scroll down</div>
                                    <div className="icon-scroll">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                                        </svg>
                                    </div>
                            </a>
                    </div>
                </div>	
                <div className="col-md-2">
                    <div className="nav-slider">
                        <div className="nav-slider-links">
                            <a href="/#Start" className="slider-link">Start</a>
                            <a href="/#section1" className="slider-link">01</a>
                            <a href="#section2" className="slider-link">02</a>
                            <a href="#section3" className="slider-link">03</a>
                        </div>
                        <div className="indicator-line">
                            <div className="indicator"></div>
                        </div>
                    </div>
                </div>	
            </div>		
            
        </div>		
    
    <div>
        <img src="/img/group.png" alt="beautiful views of the surrounding mountains and the person photographing them" className="group" />
    </div>

</div>			

<div className="content-section" id="section">
    <section className="content first" id="section1">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7 order-2 order-lg-1 content-text me-auto">
                    <div className="count">01</div>
                        <div className="tagline">
                            <div className="tagline-line"></div>
                            <h5 className="heading-tagline">Get Started</h5>
                        </div>
                        <h2 className="head">What level of  hiker are you?</h2>
                        <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</p>
                        <Link to="/singlepost1" className="link-to hero more">
                            <div>read more</div>
                                <div className="icon-scroll more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                    </svg>
                                </div>
                        </Link>
                </div>
                <div className="col-lg-5 order-1 order-lg-2 text-md-end">
                    <picture>
                        <source media="(min-width: 992px)" srcset="/img/01.jpg" alt="a hiker walking along a hiking trail surrounded by wonderful views of the surrounding mountains" className="01" />
                        <source media="(min-width: 465px)" srcset="/img/01(1).jpg" alt="a hiker walking along a hiking trail surrounded by wonderful views of the surrounding mountains" className="01(1)" />
                        <img src="/img/01.jpg" alt="a hiker walking along a hiking trail surrounded by wonderful views of the surrounding mountains" className="01" />
                    </picture>
                </div>
            </div>
        </div>
    </section>

    <section className="content second" id="section2">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 order-1 order-lg-1">
                    <picture>
                        <source media="(min-width: 992px)" srcset="/img/02.jpg" alt="a mountaineer on top of a rock admires the beautiful views of the surrounding mountains" className="02" />
                        <source media="(min-width: 465px)" srcset="/img/02(1).jpg" alt="a mountaineer on top of a rock admires the beautiful views of the surrounding mountains" className="02" />
                        <img src="/img/02.jpg" alt="a mountaineer on top of a rock admires the beautiful views of the surrounding mountains" className="02" />
                    </picture>
                </div>
                <div className="col-lg-7 order-2 order-lg-2 content-text ms-auto">
                    <div className="count">02</div>
                        <div className="tagline">
                            <div className="tagline-line"></div>
                            <h5 className="heading-tagline">Hiking Essentials</h5>
                        </div>
                        <h2 className="head">Picking the right Hiking Gear!</h2>
                        <p>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.<br />Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
                        <Link to="/singlepost2" className="link-to hero more">
                            <div>read more</div>
                                <div className="icon-scroll more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                    </svg>
                                </div>
                        </Link>
                </div>
                    
            </div>
        </div>
    </section>

    <section className="content third" id="section3">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7 order-2 order-lg-1 content-text me-auto">
                    <div className="count">03</div>
                        <div className="tagline">
                            <div className="tagline-line"></div>
                            <h5 className="heading-tagline">where you go is the key</h5>
                        </div>
                        <h2 className="head">Understand Your Map & Timing</h2>
                        <p>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.</p>
                        <Link to="/singlepost3" className="link-to hero more">
                            <div>read more</div>
                                <div className="icon-scroll more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                    </svg>
                                </div>
                        </Link>
                </div>
                <div className="col-lg-5 order-1 order-lg-2">
                    <picture>
                        <source media="(min-width: 992px)" srcset="/img/03.jpg" alt="a compass in the hand of a hiker and wonderful views in the background" className="03" />
                        <source media="(min-width: 465px)" srcset="/img/03(1).jpg" alt="a compass in the hand of a hiker and wonderful views in the background" className="03" />
                        <img src="/img/03.jpg" alt="a compass in the hand of a hiker and wonderful views in the background" className="03" />
                    </picture>
                </div>
            </div>
        </div>
    </section>

       

</div>
</>
    );
};

export default Home;