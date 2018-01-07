import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HangmanBox from "./Components/HangmanBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HangmanBox />
      </div>
    );
  }
}

export default App;
