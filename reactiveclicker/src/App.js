import React, { Component } from 'react';
import images from "./clicky.json"
import './App.css';
import Content from './components/Content/index.js';
import Imagecard from './components/Imagecard/index.js';
// import { shuffle } from 'shuffle';
// import shuffle from 'react-shuffle';
var Shuffle=require('shuffle');

class App extends Component {


  state = {
    images,
    score: 0,
    topscore: 0,
    count: 0,
    clickedimages: [],
    gameverdict: "Click on an Image to begin"
  };

  componentDidMount() {
    // this.shuffle=new Shuffle(this.element.current,{
    //   id:this.images.id
    // });
    images.shuffle();
  }
  handleImageClick = id => {
    //this.setState({ tally: this.state.tally + 1 });
    const clickedearlier = this.state.clickedimages.includes(id);
    console.log("clicked earlier consists of" + clickedearlier);
    if (clickedearlier && (this.state.score <= this.state.topscore)) {

      this.setState({
        score: 0,
        gameverdict: "You guessed incorrectly"
      });
      images.reset();
      images.shuffle();
    }

    else {

      this.setState({
        score: this.state.score + 1,
        topscore: this.state.topscore + 1,
        clickedimages: [...this.state.clickedimages, id],//es6 way to push into an array you cannot do push as state is immutable in react
        gameverdict: "You guessed correctly"
      });
      this.shuffle.resetItems();
    }
  }

  rotateimages(images) {

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
          <Shuffle>
            <Imagecard
              key={element.id}
              id={element.id}
              name={element.name}
              image={element.image}
              handleImageClick={this.handleImageClick}

            />
          </Shuffle>
        ))}

      </div>
    );
  }
}

export default App;
