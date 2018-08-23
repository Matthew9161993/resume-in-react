import React, { Component } from 'react';
import logo from './logo.svg';
import mugshot from './ImSoHandsome.jpg'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
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
          Hello there friends! It is {this.state.date.toLocaleTimeString()}.
        </p>
        <h2 className="My-name">{"Matthew O'Connor"} </h2>
        <img src={mugshot} className = "My-Picture" alt="You Can't See Me :[" />
        <p>
          mattmoconnor@gmail.com
        </p>
        <p>
          608-354-8099
        </p>
        <section class="information">
            This is some stuff about me!
        </section>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
