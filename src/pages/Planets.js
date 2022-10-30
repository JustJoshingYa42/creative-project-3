import React from 'react';


import Footer from "./Footer.js";

const Planets = () => {
  return (
  
        <div class="page">
            
            <div class="content">
                
                <div class="planet-container">
                    <img class="planet-img" src={require("../images/mercury.jpg")} alt= "mercuryImg"/>
                    <p class = "planet-fact">Mercury is the second most dense planet, right after Earth. It has longed stopped its geological activity.
                    This is evidenced by the prevalance of craters on the surface, since these would be destroyed if the surface was still geologically active.
                    There are large impact basins that are up to 1550km  in diameter.</p>
                </div>
                
                <div class="planet-container">
                    <img class="planet-img" src={require("../images/venus.jpeg")} alt= "venusImg"/>
                    <p class = "planet-fact">Even though Mercury is closer to the Sun, Venus is the hottest of all the planets. This is due to its thick 
                    atmosphere of Carbon Dioxide. The surface gets up to temperatures of 475 C with a surface air pressure 90x of Earth. Venus also rotates backwards (retrograde).
                    </p>
                </div>
                
                <div class="planet-container">
                    <img class="planet-img" src={require("../images/earth.jpg")} alt= "earthImg"/>
                    <p class = "planet-fact">The planet Earth is the only known planet to harbor life. This may be for a number of reasons. One is that being the largest of the terrestrial
                    planets, Earth still has yet to cool. This means Earth is still geologically active, with surface tectonics and volcanoes, which help recycle material and serves as an energy source for microbes deep within the ocean.
                    The Earth's Moon, which regulates the tides, is thought to be formed from a massive impact early in Earth's development, where a Mars sized object hit the Earth, ejecting material that would form the Moon.</p>
                </div>
                
                <div class="planet-container">
                    <img class="planet-img" src={require("../images/mars.jpg")} alt= "marsImg"/>
                    <p class = "planet-fact">Mars is the 3 largest terrestrial planet. As such, it has already cooled and surface activity has stopped. Mars' most notable features are the 
                    Valles Marineris and its polar ice caps. The Valles Marineris is one of the largest canyons in the solar system, spanning 4000km with a width of 200km and depth 7km. The atmosphere is 
                    very thin and composed primarily of carbon dioxide</p>
                </div>
                
                <div class="planet-container">
                    <img class="planet-img" src={require("../images/jupiter.jpeg")} alt= "juptierImg"/>
                    <p class = "planet-fact">The most massive of the planets, Jupiter is about 1000 times more massive than Earth, but 1000 times less massive than the Sun. Being a gas planet,
                    Jupiter is composed primarily of Hydrogen and Helium. Jupiter also has 75 moons and a faint ring system. Finally, Jupiter's Great Red Spot is a storm that appears to be slowly fading that has been raging for over a century.</p>
                </div>
                
                <div class="planet-container">
                    <img class="planet-img" src={require("../images/saturn-hex.jpg")} alt= "saturnImg"/>
                    <p class = "planet-fact">Saturn's most memorable feature is its rings, but these rings are actually a recent addition to Saturn in astronomical timescales. These rings are thought to be the remains of a moon that got to close 
                    and was torn apart by Saturn's tidal forces. Their age is thought to be about 100 million years old - halfway through its life. An unsolved mystery of Saturn is the pecuilar hexagon on its north pole. So far there are no good theories to explain this behavior. 
                    Saturn is also the least dense of all the planets - it would even float in water!</p>
                </div>
                
                <div class="planet-container">
                    <img class="planet-img" src={require("../images/uranus.jpg")} alt= "uranusImg"/>
                    <p class = "planet-fact">Likely the most common fact people know about Uranus is that it spins on its side. The prevailing theory is that a collision with an Earth sized object caused this behavior. Uranus is the planet with then next most prominent rings after Saturn. 
                    While also primarily composed of Hydrogen and Helium, its blue hue comes from the methane in its atmosphere.</p>
                </div>
                
                <div class="planet-container">
                    <img class="planet-img" src={require("../images/neptune.jpg")} alt= "neptuneImg"/>
                    <p class = "planet-fact">Neptune is oft the forgotten child the of solar system planets. It is like the twin to Uranus, being an ice giant with its blue hue coming from methan. However, Neptune has the most viscous winds in all the solar system, getting up to 1200mph near Neptune's
                    version of the Great Red Spot - the Great Dark Spot. Interestingly, the now dwarf planet Pluto's orbit is so elliptical that it can be closer to the Sun than Neptune!</p>
                </div>
                
            </div>
            <Footer />
        </div>
  

  
  );
};

export default Planets;