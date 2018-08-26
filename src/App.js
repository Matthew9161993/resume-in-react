import React, { Component } from 'react';
import logo from './logo.svg';
import mugshot from './ImSoHandsome.jpg'
import './App.css';

const buttonStyles = { backgroundColor: '#222',
                       fontSize: '24px',
                       width: '33%',
                       border: '2px solid #222'};


class CustomButton extends Component {

  render() {
    return(
      <button className="navbutton"
              onClick={() => alert('I am ' + this.props.text)}>
        {this.props.text}
      </button>
      );
  }
}


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
class Banner extends Component {

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
      <div className="React-banner">
        <InitialHeader intro = "Welcome to React" />
        <IntroGarbage date = {this.state.date} />
      </div>
    );
  }
}

class Buttonizer extends Component {
    constructor(props) {
    super(props)
    this.state = {
      text: ["About Me", "Projects", "Resume"],
    };
  }

  renderButton(i) {
    return (
      <CustomButton
        text={this.state.text[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return ( 
      <div className="All-the-buttons">
        {this.renderButton(0)}
        {this.renderButton(1)}
        {this.renderButton(2)}
      </div>
      );
  }
}

class PageOne extends Component {

  render() {
    return (
      <div className="First-page">
        <h2 className="My-name">{"Matthew O'Connor"} </h2>
        <img src={mugshot} className = "My-Picture" alt="You Can't See Me :/[" />
        <ContactInfo info = "This is some stuff about me!"
                     phone = "608-354-8099"
                     email = "mattmoconnor@gmail.com"
        />
      </div>
    );
  }
}

class Projects extends Component {

  render() {
    return(
      <div className="Project-page">
        These are my cool projects!
      </div>
      );
  }
}

class Resume extends Component {

  render() {
    return(
      <div className="Resume-page">
        This is my awesome resume!
      </div>
      );
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <Banner />
        <Buttonizer />
        <PageOne />
      </div>
    );
  }
}

export default App;
