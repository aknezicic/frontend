import React, { useEffect } from "react";
import './Singlepost1.css';

const Singlepost1 = () => {
    
    // Pomicanje na vrh stranice prilikom učitavanja stranice
    useEffect(() => {
        window.scrollTo(0, 0);  // Pomakni na vrh stranice
    }, []); // Ovaj useEffect se poziva samo jednom pri prvom renderiranju

    return(
    <>
        <body className="body-single-post">
            <section className="single-post py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <h1 className="single-post">Be prepared for the Mountains and beyond!</h1>
                        
                        <div className="col-md-12 single-post-image">
                            <a href="/img/01.jpg" alt="a hiker walking along a hiking trail surrounded by wonderful views of the surrounding mountains" className="01">
                            <img src="/img/single-post-01.jpg" alt="view from the top of the rock on the lake below and the surrounding peaks" className="single-post-01" />
                            </a>
                        </div>
                        
                        <div className="col-md-12 single-post">	
                            <div className="count">01</div>
                            <div className="tagline">
                                <div className="tagline-line"></div>
                                <h5 className="heading-tagline">Get Started</h5>
                            </div>
                            <h2 className="head">What level of  hiker are you?</h2>
                            <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, advanced novice, moderate, advanced moderate, expert, or expert backpacker?</p>
                            <ol>
                                <li>Novice</li>
                                <p>Someone who is new to hiking or has little experience with hiking. A pace for a beginning hiker would be slow or easy paced. This person may not exercise in other areas of their life. Or they may and just be new to hiking. Elevation gains and distances are minimal. Surfaces are generally flat with minimal difficult terrain.</p>
                                <li>Advanced Novice</li>
                                <p>A person new to hiking but still unfamiliar with different types of terrain or elevation gains. They may have experienced hikes of a few hours with small levels of inclines of 500-1000 feet. An advanced novice hiker hikes at a generally easy pace but may have to take breaks more frequently as the distance or elevation of the hike increases.</p>
                                <li>Moderate</li>
                                <p>This type of person hikes on a more regular basis. This type of person may also partake in more frequent types of exercise in other aspects of their life. Hikes can last for half a day and have elevation gains of a few thousand feet. A moderate hiker will be able to hike at a faster pace and be able to handle longer inclines without feeling exhausted. At this stage, a moderate hiker has also started venturing out into hikes with different weather conditions that require more planning.</p>
                                <li>Advanced Moderate</li>
                                <p>This person has experience with many hikes lasting at least half a day. This type of hiker is able to handle elevation gains of several thousand feet. Hiking takes place at a moderate place but the hiker also has enough experience of when to slow the pace to conserve energy. Hikes can last all day. An advanced moderate hiker also has experience hiking in different weather conditions and has a general idea of what to prepare for in colder and hot conditions.</p>
                                <li>Expert</li>
                                <p>This type of hiker has had much experience with day hikes and hiking in different weather conditions. At this point, the hiker is prepared to be out there throughout the night, has the knowledge of when to hike at a fast pace, at a slow pace to conserve energy, and when to rest. This type of hiker will be able to plan hikes of up to a few days and how to plan accordingly.</p>
                                <li>Expert backpacker</li>
                                <p>Now, I’d imagine there are different levels of a backpacker just as there are a hiker. I can say that knowing that I’ve never been backpacking before. But, an expert backpacker is someone who has been hiking for multiple days at a time and has put together at least a week of hiking/camping time in. This type of hiker is prepared to take on the Pacific Crest Trail, John Muir Trial, or spend several days hiking through various types of wilderness.</p>
                            </ol>
                            <p>Knowing what hiking level you’re at can be important for planning future hikes. When looking at hiking ratings through different apps and websites,
                            you can use your own experience as a guide for determining the true level of difficulty. </p>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    </>
    );
};

export default Singlepost1;
