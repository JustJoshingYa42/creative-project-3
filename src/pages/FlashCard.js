import React from 'react';
import ReactDOM from 'react-dom/client';

import mercuryImg from './../images/mercury.jpg'
import venusImg from './../images/venus.jpeg'
import marsImg from './../images/mars.jpg'
import juptierImg from './../images/jupiter.jpeg'
import saturnImg from './../images/saturn.jpg'
import uranusImg from './../images/uranus.jpg'
import neptuneImg from './../images/neptune.jpg'
import plutoImg from './../images/pluto.png'

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
                            {this.state.planetName} src={this.state.imgSource}/> : this.state.planetName}
                    </button>
                </div>
                
                );
        }
        
    }
    
  return (
      <div class = "page">
          <div class = "flashcard-container">
            <FlashCard planetName = "Saturn" imgSource = {saturnImg} />
            <FlashCard planetName = "Mars" imgSource = {marsImg} />
            <FlashCard planetName = "Mercury" imgSource = {mercuryImg} />
            <FlashCard planetName = "Jupiter" imgSource = {juptierImg} />
            <FlashCard planetName = "Pluto" imgSource = {plutoImg} />
            <FlashCard planetName = "Neptune" imgSource = {neptuneImg} />
            <FlashCard planetName = "Venus" imgSource = {venusImg} />
            <FlashCard planetName = "Uranus" imgSource = {uranusImg} />
          </div>
      </div>
      );
};

export default FlashCard;