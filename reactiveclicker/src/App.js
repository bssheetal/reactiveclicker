import React, { Component } from 'react';
import images from "./clicky.json"
import './App.css';
import Content from './components/Content/index.js';
import Imagecard from './components/Imagecard/index.js';
import Wrapper from './components/Wrapper/index.js'

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <div>
        <Content></Content>
        {this.state.images.map(element => (
          
            <Imagecard
              name={element.name}
              image={element.image}
            />
         
        ))}

      </div>
    );
  }
}

export default App;
