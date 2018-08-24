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

function ContactInfo(props) {
  return (
    <div className="Contact-info">
    {props.info}
    <br/>
    {props.phone}
    <br/>
    {props.email}
    </div>
  );
}

class Deadeye extends Component {
  render() {
    return (
      <div className="Deadeye">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
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
      <div>
      <Deadeye/>
      <div className="App">
        <InitialHeader intro = "Welcome to React" />
        <IntroGarbage date = {this.state.date} />
        <h2 className="My-name">{"Matthew O'Connor"} </h2>
        <img src={mugshot} className = "My-Picture" alt="You Can't See Me :/[" />
        <ContactInfo info = "This is some stuff about me!"
                     phone = "608-354-8099"
                     email = "mattmoconnor@gmail.com"
        />
      </div>
      </div>
    );
  }
}

export default App;
