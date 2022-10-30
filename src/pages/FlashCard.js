import React from 'react';
import Footer from "./Footer.js";

const FlashCard = () => {
    
    class FlashCard extends React.Component {
        constructor(props){
            super(props);
            this.state = {planetSide: true, imgSource: props.imgSource, planetName: props.planetName };
            this.handleClick = this.handleClick.bind(this);
        }
        
        handleClick() {
            this.setState(prevState => ({
              planetSide: !prevState.planetSide
            }));
          }
        
        render() {
            
            return(
                <div class = "flashcardObject">
                    <button onClick = {this.handleClick} class = "flashcard">
                        {this.state.planetSide ? <img class="planetImg" alt = 
                            {this.state.planetName} src={this.state.imgSource}/> : <h1 class = "planetText">{this.state.planetName} </h1>}
                    </button>
                </div>
                
                );
        }
        
    }
    
  return (
      <div class = "page">
            
          <div class = "flash-card-header">
            Here are flashcards for the planets! Click them to reveal the planets name!
          </div>
      
          <div class = "flashcard-container">
            <FlashCard planetName = "Saturn" imgSource = {require("../images/saturn.jpg")} />
            <FlashCard planetName = "Mars" imgSource = {require("../images/mars.jpg")} />
            <FlashCard planetName = "Mercury" imgSource = {require("../images/mercury.jpg")} />
            <FlashCard planetName = "Jupiter" imgSource = {require("../images/jupiter.jpeg")} />
            <FlashCard planetName = "Trick question! This is pluto, a dwarf planet!" imgSource = {require("../images/pluto.png")} />
            <FlashCard planetName = "Neptune" imgSource = {require("../images/neptune.jpg")} />
            <FlashCard planetName = "Venus" imgSource = {require("../images/venus.jpeg")} />
            <FlashCard planetName = "Uranus" imgSource = {require("../images/uranus.jpg")} />
          </div>
          
          <Footer />
          
      </div>
      );
};

export default FlashCard;