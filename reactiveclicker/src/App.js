import React, { Component } from 'react';
import images from "./clicky.json"
import './App.css';
import Content from './components/Content/index.js';
import Imagecard from './components/Imagecard/index.js';

class App extends Component {


  state = {
    images,
    score: 0,
    topscore: 0,
    count: 0,
    clickedimages: [],
    gameverdict: "Click on an Image to begin"
  };

  

  shuffleArray = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {

      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = arr[randomIndex];

      arr[randomIndex] = arr[i];
      arr[i] = itemAtIndex;
    }
    return arr;
  }

  handleImageClick = id => {
    //this.setState({ tally: this.state.tally + 1 });
    let shuffledArray = this.shuffleArray(this.state.images);
    console.log(shuffledArray);
    this.setState({
      images: shuffledArray
    });
    const clickedearlier = this.state.clickedimages.includes(id);
    console.log("clicked earlier consists of" + clickedearlier);
    if (clickedearlier && (this.state.score <= this.state.topscore)) {

      this.setState({
        score: 0,
        clickedimages: [],
        topscore:this.state.topscore,
        gameverdict: "You Guessed Incorrectly!"
      });


    }

    else if (!clickedearlier && (this.state.score<this.state.topscore))
    {
      this.setState({
        score: this.state.score+1,
        topscore:this.state.topscore,
        clickedimages: [...this.state.clickedimages, id],
        gameverdict: "You Guessed Correctly!"
      });
    }

    else {

      this.setState({
        score: this.state.score + 1,
        topscore: this.state.topscore + 1,
        clickedimages: [...this.state.clickedimages, id],//es6 way to push into an array you cannot do push as state is immutable in react
        gameverdict: "You guessed correctly"
      });
      console.log(this.state);
      
    }
  }

  render() {
    return (
      <div>
        <Content
          gameverdict={this.state.gameverdict}
          topscore={this.state.topscore}
          score={this.state.score}
        />
        {this.state.images.map(element => (

            <Imagecard
              key={element.id}
              id={element.id}
              name={element.name}
              image={element.image}
              handleImageClick={this.handleImageClick}

            />
          
        ))}

      </div>
    );
  }
}

export default App;
