import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'

import Navbar from './components/navbar';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Parallax ref="parallax" pages={4}>

          <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#000' }} />
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#fefefe' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#000' }} />

        {/* <Navbar /> */}
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </Parallax>

      </div >
    );
  }
}

export default App;