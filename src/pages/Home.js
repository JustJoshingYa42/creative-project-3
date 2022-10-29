import saturnImg from './../images/saturn.jpg'
import { Outlet, Link } from "react-router-dom";


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
                    
                    <img class = "saturn-img" src={saturnImg} alt = "Saturn"/>
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
                        <Link class = "info-button" to="/flashcard">Flash cards</Link>

                        <a class="info-button" href="#">Stars</a>
                        <a class="info-button" href="#">Cosmology</a>
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

export default Home;