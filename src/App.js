import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Carousel/>
      </div>
    );
  }
}

export default App;
