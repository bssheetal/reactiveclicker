import React, { Component } from 'react';
import images from "./clicky.json"
import './App.css';

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <div>
        {this.state.images.map(element=> (<img src={element.image}></img>))}
     </div>
    );
  }
}

export default App;
