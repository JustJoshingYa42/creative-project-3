import HRDiagramImg from './../images/HRDiagram.jpg'
import stephensonImg from './../images/stephenson.png'
import neutronStar from './../images/neutron-star-remnants.jpg'
import whitedwarfImg from './../images/whitedwarf.jpg'

import { Outlet, Link } from "react-router-dom";


const Stars = () => {
  return (
  
        <div class="page">
            
            <div class="content star-container">
                <div class="star-block">
                    <div class="star-header">
                        <h1>An overview of stars</h1>
                    </div>
                    <div class="star-content">
                        <div class="star-section text">
                            All stars are powered in the same way - nuclear fusion, or the fusing of atoms. This can only occur when the temperature and pressure of gas is high enough to allow it to occur. Normally temperatures of 150 million Celsius are needed,
                             but with quantum tunneling effectsm the temperatures needed are much lower, only 1 million degrees. The smallest of stars - and the most common - red dwarfs - barely meet this criteria with masses from 0.08 to .8 the mass of the Sun. 
                             The vast majority of stars fall under the "main sequence" as shown in the image. Only stars that are close to death or are dead are not on it, like red giants, white dwarfs, and neutron stars. We can see that this diagram shows that 
                             as surface temperature increases, so too does the brightness of the star, which can then give us a guess as to the distance of the star.
                        </div>
                        <div class="star-section left-border">
                            <img class = "star-image" src = {HRDiagramImg} alt = "HR Diagram" />
                        </div>                
                    </div>

                </div>
                <div class="star-block">
                    <div class="star-header">
                        <h1>Supergiants</h1>
                    </div>
                    <div class="star-content">
                        <div class="star-section right-border">
                            <img class = "star-image" src = {stephensonImg}  alt = "RedGiant" />
                        </div>       
                        <div class="star-section text">
                            Of the many types of stars, the largest are red supergiants. Here is Stephenson 2-18, the largest known star (by diameter) 
                            compared to the sun. The Sun is less than a pixel here. These stars are so bloated because they are further in their lives. As stars age, they begin 
                             to fuse heavier elements, which increases the temperature and pressure of the core, pushing out the outer layers of the star.
                        </div>
                    </div>

                </div>
                
                <div class="star-block">
                    <div class="star-header">
                        <h1>The tiniest of stars</h1>
                    </div>
                    <div class="star-content">
                        <div class="star-section text">
                            On the other side of the size spectrum, there are neutron stars. Shown here is the remnants of a supernovae, a gigantic explosion when massive stars die or collide. The trigger for this is when too much Iron has built up in the core
                             from fusion. Iron cant be fused to make energy, so as iron is made, the star loses fuel and begins to collapse as there is less pressure to support it. Then as temperatures and pressure rises, the iron fuses, taking energy away from the star 
                             and making it collapse faster. This process spirals out of control as the star collapses, until the core is compressed so much that electrons merge with protons and make a neutron star. At this point the surface of the star then rebounds off this new core
                             and ejects itself into space, leaving a neutron star. This only takes about 100s. Neutron stars are only held up by the repulsive force between neutrons due to the Pauli Exclusion principle.
                        </div>
                        <div class="star-section left-border">
                            <img class = "star-image" src = {neutronStar}  alt = "Neutron Star" />
                        </div>                
                    </div>

                </div>
                
                <div class="star-block">
                    <div class="star-header">
                        <h1>A calmer fate</h1>
                    </div>
                    <div class="star-content">
                        <div class="star-section right-border">
                            <img class = "star-image" src = {whitedwarfImg} alt = "White Dwarf"/>
                        </div>
                        <div class="star-section text">
                            Most stars actually dont have violent ends as supernovae. For example, the Sun will become a red giant as it fuses heavier elements (no need to worry, this is in 4 billion years!), and since it is not massive enough, the core won't be able to make iron and 
                            the Sun's hot dense core will remain, also known as a white dwarf. These cores are aboutn the size of Earth (or a bit smaller). Also, these stars are only up to 1.37 times the mass of the Sun, known as the Chandrasekhar limit. If they get more massive then that, they will collapse into even denser stars called neutron stars. 
                            The beautiful nebula as shown here is the outer layers of the star that became the white dwarf. The Sun will look similar when it dies.
                        </div>
                    </div>

                </div>
                
            </div>
            
            <div class = "footer">
                <div class="sources">
                    Sources
                </div>
                <div class="contact">
                    fakeemail@fakeemail.fake
                </div>
                <div class="name">
                    Astrofacts
                </div>
            </div>                
        </div>
  

  
  );
};

export default Stars;