import React, { useEffect } from "react";
import './Singlepost3.css';

const Singlepost3 = () => {

    // Pomicanje na vrh stranice prilikom učitavanja stranice
            useEffect(() => {
                window.scrollTo(0, 0);  // Pomakni na vrh stranice
            }, []); // Ovaj useEffect se poziva samo jednom pri prvom renderir
            
    return(
    <>
        <body className="body-single-post">
            <section className="single-post py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <h1 className="single-post">Be prepared for the Mountains and beyond!</h1>
                        
                        <div className="col-md-12 single-post-image">
                            <a href="/img/03.jpg" alt="a compass in the hand of a hiker and wonderful views in the background" className="03">
                            <img src="/img/single-post-03.jpg" alt="stone fence and wonderful mountains in the background" className="single-post-03" />
                            </a>
                        </div>
                        
                        <div className="col-md-12 single-post">	
                            <div className="count">03</div>
                            <div className="tagline">
                                <div className="tagline-line"></div>
                                <h5 className="heading-tagline">Where you go is the key</h5>
                            </div>
                            <h2 className="head">Understand Your Map & Timing</h2>
                            <p>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.</p>
                            <h6>Do I need to learn to use a compass and read a map to go hiking?</h6>
                                <p>Getting lost out in the mountains or in remote areas is something you need to take seriously. Check that at least one of you and ideally more, has
                                decent navigation skills. If you are planning walks into the mountains this is essential as the weather can change quickly leading to a loss in visibility of the path ahead.</p>				
                            <h6>Do you know how to navigate in low visibility conditions?</h6>
                                <p>Ask the group you are hiking with about their experience, where they have walked before and in what conditions. Do they know how to use a compass
                                and map?If you are planning on hiking on your own or you are the leader of your group then it’s important that you know how to read a map and use a compass. You should also take a smart phone with a mapping app downloaded.</p>
                            <h6>Hiking for Beginners Guide to Map Reading</h6>
                                <p>Lots of people on long hikes into the countryside and mountains carry a compass but actually don’t know how to use one. Practice on local short
                                walks, watch youtube videos or take a course before you go anywhere remote (especially if hiking solo) so you have a basic understanding of how to use a compass.Even with a GPS in your phone, it’s important to know how to use a compass just in case technology fails or visibility is poor.</p>	
                            <h6>How do I get the most accurate weather forecast for hiking?</h6>
                                <p>The weather can make a huge difference to your day out hiking, especially if you’re up high in the mountains. Being prepared for the weather makes
                                an even bigger difference.You can download more detailed weather apps if you are walking in the mountains. These weather apps can help you ensure you will get lovely views (and great pics to share!) rather than be stuck in low cloud for most of the day.</p>		
                            <h6>How do I stay safe when hiking?</h6>
                                <p>Here’s a simple checklist for staying safe when hiking.</p>
                                <ul>
                                    <li>Weather</li>
                                        <p>Check the weather using a few different sources and choose a clear day until you have more experience with navigating. As a hiking
                                        beginner practice in clear conditions with no risk of ice first.</p>
                                    <li>Livestock</li>
                                        <p>Respect livestock and keep an eye for signs and pay particular notice when paths cross cattle fields as they can become aggressive if
                                        protecting their calves, especially if you have a dog with you.</p>
                                    <li>Road Walking</li>
                                        <p>Take care on narrow country roads without pavements and walk facing oncoming traffic.</p>
                                    <li>Hills & Slopes</li>
                                        <p>Risk of slips and falls is much greater, so make sure you have appropriate footwear for the route and the conditions.</p>
                                    <li>Battery Drain</li>
                                        <p>Make sure your phone is charged and reliable, carry two for piece of mind. One for pictures and the route guide and one just for
                                        emergencies.</p>		
                                </ul>
                        </div>
                    </div>
                </div>
            </section>
        </body>    
    </>
        );
    };
    
    export default Singlepost3;