import React, { Component } from 'react';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <Jumbotron />
      </div >
    );
  }
}

export default App;