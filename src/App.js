import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className ="Hello-world">
          Hello there friends! It is {new Date().toLocaleTimeString()}.
        </p>
      </div>
    );
  }
}

export default App;
