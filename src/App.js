import React, { Component } from 'react';
import './App.css';
import Image1 from './imgs/1-img.png';
import Image2 from './imgs/2-img.png';
import Image3 from './imgs/3-img.png';
import Image4 from './imgs/4-img.png';
import Image5 from './imgs/5-img.png';

class App extends Component {
  render() {
    return (
      <div className="daddy">
        <div className="row row1">
          <div className="slidewraper slidewraper1">
            <div className="slide slide1"><img src={Image1} alt="slide1" /></div>
          </div>
        </div>
        <div className="row row2">
          <div className="slidewraper slidewraper2">
            <div className="slide slide2"><img src={Image2} alt="slide2" /></div>
          </div>
        </div>
        <div className="row row3">
          <div className="slidewraper slidewraper3">
            <div className="slide slide3"><img src={Image3} alt="slide3" /></div>
          </div>
          <div className="slidewraper slidewraper3">
            <div className="slide slide4"><img src={Image4} alt="slide4" /></div>
          </div>
          <div className="slidewraper slidewraper3">
            <div className="slide slide5"><img src={Image5} alt="slide5" /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
