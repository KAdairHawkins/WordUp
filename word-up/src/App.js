import React, { Component } from 'react';
import logo from './logo.svg';
import ContainerComponent from "./Components/container";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerComponent selectedWord={{word:"Inimitable", definition:"See: Aaron Burr"}}/>
      </div>
    );
  }
}

export default App;
