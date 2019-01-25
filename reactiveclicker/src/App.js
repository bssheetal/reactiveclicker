import React, { Component } from 'react';
import images from "./clicky.json"
import './App.css';
import Content from './components/Content/index.js';
import Imagecard from './components/Imagecard/index.js';

class App extends Component {

  state = {
    images,
    score: 0,
    tally: 0
  };

  handleImageClick = id => {
    this.setState({tally:this.state.tally+1});
    
  }

  render() {
    return (
      <div>
        <Content
          tally={this.state.tally}
          
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
