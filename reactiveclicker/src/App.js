import React, { Component } from 'react';
import images from "./clicky.json"
import './App.css';
import Content from './components/Content/index.js';

class App extends Component {

  state = {
    images
  };

  render() {
    return (
     
        <Content></Content>
        // {this.state.images.map(element=> (<img src={element.image}></img>))}
    );
  }
}

export default App;
