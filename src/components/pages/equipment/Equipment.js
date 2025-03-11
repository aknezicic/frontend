import React from "react"
import './Equipment.css';

const Equipment = () => {
    return(
    <>
        <div className="body-equipment">
            <section className="equipment">
                <div className="container">
                    <div className="row align-items-center">
                        <h1 className="equipment">Equipment</h1>
                        <div className="tagline">
                            <div className="tagline-line"></div>
                            <h5>Let's watch the video :<br /> Hiking Gear - What to Bring?</h5>
                        </div>
                        
                        <video width="1320" height="600" controls>
                            <source src="/img/video.mp4" type="video/mp4" />
                            <source src="/img/video.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    
                        <div className="col-md-12 equipment">	
                            <h2 className="head">Hiking Gear: What to Bring?</h2>
                                <p>There are so many places to find your perfect hiking trail, from mountain trails to coastal paths. Maybe you want to discover new horizons or
                                explore the surroundings around your base camp, take a break after a busy week, push yourself, or get lost in the sights and sounds of nature.Whatever drives you, your gear shouldn’t be a burden. In this article we’ll discuss everything you need to make your equipment work for whatever adventure you pursue. Essentials only. Keep that pack light!</p>
                            <h6>Define the type of hike</h6>
                                <p>Knowing what gear to pack means knowing what you are going to be doing. Begin by considering what kind of hike you’re going on (time, distance, 
                                climbing, technical difficulty) and the conditions you expect (climate, season, weather.Awareness of the nature of your hike and the weather conditions will help you make a decision regarding the gear and clothes to pack.</p>				
                            <h7>The duration of the hike</h7>
                                <p>Essential equipment doesn’t vary too much between a half-day or full-day hike (except for the amount of food and water you’re packing).Gear
                                choices for a multi-day trek get more complex.Are you packing a tent, a sleeping bag, or a camping stove? Will you need freeze dried meals? Extra clothing layers? There’s so much equipment to choose from, but only so much space in your pack!</p>
                            <h7>Distance and ascent</h7>
                                <p>The distance and ascent included in your itinerary will dictate a hike’s difficulty more than the time duration. The further the hike or the more
                                climbing it has, the more crucial it is to hike light.Every pound saved means more energy and less stress on your legs, especially by the end of the trail.</p>	   
                            <h7>Technical difficulty </h7>
                                <p>Let’s talk about the differences between hiking and mountaineering.  In this article, we only deal with the type of hiking that doesn’t need  
                                climbing rope (however a short hiking rope can be sometimes used to make exposed sections safer), crampons or other mountaineering gear eg, ice axes or screws, skis, etc.Backcountry skiing or glacier walking are disciplines that need special equipment and expert knowledge of the conditions in the mountains in the wintertime.Prepare your itinerary in advance so you know exactly where you’re going and don’t find yourself venturing into terrain that is too technical. Local recreation areas (national parks and forests, state parks) make topographic maps available, or you can find some easily with an online search.</p>	  	   
                            <div className="row">
                                <div className="col-md-6 equipment" >
                                    <img src="/img/equipment01.jpg" alt="a woman and a man are hiking while observing the beautiful environment" className="equipment01" />
                                </div>
                                <div className="col-md-6 equipment" >
                                    <img src="/img/equipment02.jpg" alt="a woman and a man are hiking through a coniferous forest" className="equipment02" />
                                </div>
                            </div>
                            <h7>Climate, season and weather</h7>
                                <p>The conditions that you hike in will influence your clothing choices:</p>
                                    <ul>
                                        <li className="h7"><b>Climate</b> : climate varies greatly between the coast and the mountains. Focus on protecting yourself from the cold or heat, or
                                                    from the rain
                                            or the sun</li>
                                        <li className="h7"><b>Season</b> : the climate will help you choose the best season for your hike. Conditions can range widely within the same
                                                        itinerary (snowy, cold or hot conditions etc)</li>
                                        <li className="h7"><b>Weather</b> : check the forecast for the day of your hike or for the period of your trek. You should take extra layers of 
                                                        clothing if there is the slightest chance of bad weather (a waterproof jacket or windbreaker, rain pants, a change of clothes</li>
                                    </ul>
                            <p>For every type of hike, you should always take the following gear with you (you may need to adapt according to the conditions and terrain):</p>
                            <h6>Which equipment is essential for hiking?</h6>
                                <ol>
                                    <li>Good quality hiking shoes</li>
                                    <li>A hiking backpack</li>
                                    <li>Clothing suited to the weather</li>
                                    <li>Items to protect you from the sun: sunglasses, cap, sunscreen</li>
                                    <li>A hydration system and food supplies</li>
                                    <li>A navigation tool depending on what you are used to: smartphone with maps, a map, a compass, an altimeter, a hiking GPS, or a GPS watch.</li>
                                    <li>First aid supplies: first aid kit, emergency blanket, multi tool with a knife, headlamp, cellphone.</li>
                                </ol>
                            <div className="row">
                                <div className="col-md-12 equipment" >
                                    <img src="/img/equipment03.jpg" alt="a hiker walks on a ridge with high peaks in the background" className="equipment03" />
                                </div>
                            </div>
                            <h6>Adapt your gear to the type of hike</h6>
                                <p>You’ve decided on the type of hike you are going to do, now you need to adapt your gear while accounting for weather.</p>
                                <h7>Equipment</h7>
                                <p>Essential equipment required for hiking is as follows:</p>
                                    <ul>
                                        <li className="h7"><b>A good pair of shoes</b> : suited to your hiking terrain and fitness level</li>
                                        <li className="h7"><b>Backpack</b> : a volume of 10 liters for hikes of several hours and up to 70 liters for a multi-day trek without 
                                                        accommodation</li>
                                        <li className="h7"><b>Hydration system</b> : a reservoir, a water bottle or a flask should always be on hand</li>
                                    </ul>
                                <p>Optional:</p>
                                    <ul>
                                        <li className="h7"><b>Walking poles</b> : helpful on steep terrain, if you’re accustomed to them</li>
                                        <li className="h7"><b>Rain cover</b> : to put over your backpack if it rains</li>
                                        <li className="h7"><b>Tent, sleeping bag or camping mat</b> : for multi-day hikes requiring shelter</li>
                                        <li className="h7">Sleeping bag liner for nights in mountain huts</li>
                                        <li className="h7">Microfiber travel towel</li>
                                        <li className="h7">Camping stove, camping pot and pans and cutlery: if you hike independently for several days</li>
                                        <li className="h7">Harness, rope, carabiner: if you have planned to hike on exposed terrain</li>
                                    </ul>
                            <div className="row">
                                <div className="col-md-6 equipment" >
                                    <img src="/img/equipment04.jpg" alt="three hikers are walking on the autumn grassy hills" className="equipment04" />
                                </div>
                                <div className="col-md-6 equipment" >
                                    <img src="/img/equipment05.jpg" alt="five hikers walk along a path in autumn nature" className="equipment05" />
                                </div>
                            </div>
                                <h7>Clothing</h7>
                                <p>Your choice of clothing is very important, both the clothing you wear and the clothing you pack:</p>
                                    <ul>
                                        <li className="h7"><b>Socks</b> : good quality walking socks are essential for your comfort and important for avoiding rubbing and blisters</li>
                                        <li className="h7"><b>Pants or shorts</b> depending on the weather (you can also find pants that turn into shorts)</li>
                                        <li className="h7"><b>Breathable underwear</b> made from synthetic fibers or merino wool (a comfortable sports bra for women)</li>
                                        <li className="h7"><b>A fleece mid-layer</b> or a thin down jacket for cold mornings or for the summits</li>
                                    </ul>
                                <p>Optional:</p>
                                    <ul>
                                        <li className="h7">A change of <b>T-shirt</b> for when you reach the summit or for the descent, as you will no doubt be sweaty</li>
                                        <li className="h7">A change of underwear for multi-day hikes</li>
                                        <li className="h7">A windbreaker jacket or a waterproof jacket in case rain is forecast</li>
                                        <li className="h7">Waterproof over-pants in case of rain</li>
                                        <li className="h7">A <b>down jacket</b> is an essential item to have at the bottom of your pack for when it’s cold. They’re warm and have a great
                                                    weight/space ratio.</li>
                                        <li className="h7"><b>Cap, sun hat, bandana or beanie</b> depending on the weather and what you are used to wearing.</li>
                                        <li className="h7"><b>Gloves</b> : in case it’s cold.</li>
                                        <li className="h7"><b>Gaiters</b> : in case there is snow or you have low cut shoes.</li>
                                    </ul>
                            <div className="row">
                                <div className="col-md-6 equipment" >
                                    <img src="/img/equipment06.jpg" alt="a woman and a man walk on a grassy knoll towards a tree in front of them" className="equipment06" />
                                </div>
                                <div className="col-md-6 equipment" >
                                    <img src="/img/equipment07.jpg" alt="a woman and a man with a dog are walking on the autumn hills" className="equipment07" />
                                </div>
                            </div>
                                <h7>Food and hydration</h7>
                                <p>Your <b>hydration system</b> should be able to hold at least 1 liter of water. Go for a backpack with a separate dedicated compartment to hold your
                                water, either inside the pack or on the straps. Take more water if it’s hot, or if there are long stretches without access to water.<br />
                                An <b>insulated bottle</b> or a thermos of tea is always appreciated during a break when it’s cold.<br />
                                Bring water purification tablets or a filter for remote treks.<br />
                                Take enough <b>food, energy bars and dried fruits</b> for the whole hike. Eat regularly to avoid hypoglycemia and other conditions that will slow you down. 
                                Save the joy of your freeze-dried meal for autonomous treks as well as breakfast rations. Always have an extra energy gel or bar at the bottom of your bag 
                                (or even in your first aid kit).</p>
                                <h7>Navigation</h7>
                                    <p><b>Always plan your itinerary</b> in advance and do as much research as possible on the internet or by reading guidebooks. Depending on what
                                        you are used to using, you could take:</p>
                                        <ul>
                                            <li className="h7"><b>Your cellphone</b> with a GPS application and remember to download the maps before you leave so you can access them
                                                            offline</li>
                                            <li className="h7"><b>A GPS watch</b> : opt for a watch with an altimeter and barometer)</li>
                                            <li className="h7"><b>A topographic map</b></li>
                                            <li className="h7">A compass and altimeter (not used as often due to the proliferation of cell phones and watches)</li>
                                        </ul>
                            <div className="row">
                                <div className="col-md-6 equipment" >
                                    <img src="/img/equipment08.jpg" alt="view of the rocky peaks of the high mountains" className="equipment08" />
                                </div>
                                <div className="col-md-6 equipment" >
                                    <img src="/img/equipment09.jpg" alt="a mountaineer stands on a rock face with a magnificent view of the lake below and the high peaks around" className="equipment09" />
                                </div>
                            </div>			
                                <h7>Security and first aid supplies</h7>
                                <p>Prepare your first aid kit so that it covers any situation you can may encounter while avoiding extra weight.</p>
                                <p><b>Essential items:</b></p>
                                    <ul>
                                        <li className="h7"><b>Sunglasses and sunscreen</b> (except if its pouring with rain of course!)</li>
                                        <li className="h7"><b>First aid kit</b> suited to the hike</li>
                                        <li className="h7"><b>Emergency blanket</b></li>
                                        <li className="h7">A knife or <b>multitool</b> with knife</li>
                                        <li className="h7"><b>A headlamp</b> (at least a light emergency model at the bottom of your bag)</li>
                                        <li className="h7"><b>A charged cell phone with emergency contacts saved</b></li>
                                        <li className="h7"><b>Identity documents</b> and numbers of all the people to call in case of an accident plus information about any medical
                                                        conditions you have or medication you are on. This information could be really useful in case of an accident.</li>
                                    </ul>		
                                <p>Optional depending on conditions:</p>
                                    <ul>
                                        <li className="h7">Matches/lighter and candles if it’s cold. If you are hiking in dry weather, don’t forget to check the potential wildfire risk,
                                                    as carrying some items may be banned.</li>
                                        <li className="h7">An extra battery for your cell phone and GPS in case they run out of charge</li>
                                        <li className="h7">Two-way radio/satellite telephone/GPS tracks in case of remote hiking.</li>
                                    </ul>		
                                <h7>Personal Hygiene</h7>
                                <p>A <b>packet of tissues</b> isn’t very heavy and can come to the rescue in various situations.<br />
                                A good <b>mosquito repellent</b> could turn out to be useful in affected areas. More and more people use <b>tick repellent</b>.</p>
                                <h7>Extras</h7>
                                <p>Is hiking part of other hobbies you pursue like photography, plant/ animal spotting or paragliding? Keep your equipment light (camera with lenses,
                                binoculars, notebook or drawing equipment). Being weighed down by your pack isn’t much fun and will restrict your movement.</p>
                                <p>Whether you are going for a short hike or an exposed trek, <b>avoid going alone and share your itinerary with at least one person</b>. These
                                simple precautions could turn out to be very important in unexpected circumstances.</p>
                                <p>Please keep our hiking paths clean. <b>Carry a small bag to take your litter and any litter you find home with you.</b></p>
                                <p><b>If you want to keep on playing, play mindfully!</b></p>
                            <div className="row">
                                <div className="col-md-12 equipment" >
                                    <img src="/img/equipment10.jpg" alt="three mountaineers climb a grassy hill at the top of which the sun is shining" className="equipment10" />
                                </div>
                            </div>	
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
       );
    };
    
    export default Equipment;