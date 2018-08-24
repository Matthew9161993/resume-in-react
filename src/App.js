import React, { Component } from 'react';
import logo from './logo.svg';
import mugshot from './ImSoHandsome.jpg'
import './App.css';

function InitialHeader(props) {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.intro}</h1>
    </div>
  );
}

function IntroGarbage(props) {
  return (
    <div className="Intro-garbage">
       Hello there friends! It is {props.date.toLocaleTimeString()}.
    </div>
  ); 
}

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
        <InitialHeader intro = "Welcome to React" />
        <IntroGarbage date = {this.state.date} />
        <h2 className="My-name">{"Matthew O'Connor"} </h2>
        <img src={mugshot} className = "My-Picture" alt="You Can't See Me :/[" />
        <p className = "Email">
          mattmoconnor@gmail.com
        </p>
        <p className = "Phone-number">
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
