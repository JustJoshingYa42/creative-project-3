import Footer from "./Footer.js";

import {Link } from "react-router-dom";

const Home = () => {
  return (
  
    <div class="page">
            
            <div class="content">
                
                <div class="block">
                    <div class="discover-container">
                        <div class="discover-item">
                            Welcome!
                            <div class="button">
                                Learn about the universe in a fun and easy way 
                                by browsing our pages for fun facts and scientific explanations
                            </div>
                        </div>
                        <div class="discover-item">
                        </div>
                    </div>
                    
                    
                    
                    <img class = "saturn-img"  src={require("../images/saturn.jpg")} alt = "Saturn"/>
                </div>
                
                <div class="block">
                    <h2 class = "description-header">Our goal</h2>
                    <p class = "description">To help inspire future astronomers as well as make the help others make sense of the vast and daunting universe we all live in</p>
                </div>
                
                <div class = "information-container">
                    <div class="info-header">
                       Join hundreds of others in the pursuit of learning.
                    </div>
                    <div class="button-container">
                        <Link class = "info-button" to="/planets">Planets</Link>
                        <Link class = "info-button" to="/stars">Stars</Link>
                        <Link class = "info-button" to="/cosmology">Cosmology</Link>
                        <Link class = "info-button" to="/flashcard">Planet flash cards!</Link>
                    </div>
                </div>
            </div>

            <Footer />
              
        </div>
  

  
  );
};

export default Home;