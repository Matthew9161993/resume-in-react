import React, { Component } from 'react';
import logo from './logo.svg';
import mugshot from './ImSoHandsome.jpg'
import './App.css';

const buttonStyles =  { backgroundColor: '#222',
                       fontSize: '24px',
                       width: '33%',
                       border: '2px solid #222'};


class CustomButton extends Component {
  constructor(){
    super();
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.state = {
      hover: false,
    };
  }

  hoverOn(){
    this.setState({hover: true});
  }

  hoverOff(){
    this.setState({hover: false});
  }

  render() {
    return(
      <button className={ this.state.hover ? "navbutton" : "navbutton-hover" }
              onClick={() => this.props.onClick()}
              onMouseEnter={this.hoverOn}
              onMouseLeave={this.hoverOff}
      >
        {this.props.text}
      </button>
      );
  }
}


function InitialHeader(props) {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" align="middle"/>
      <h1 className="introduction">{props.intro}</h1>
    </div>
  );
}

function ContactInfo(props) {
  return (
    <div className="Contact-info">
    {props.info}
    <br/>
    <br/>
    {props.phone}
    <br/>
    <br/>
    {props.email}
    </div>
  );
}
class Banner extends Component{
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="React-banner">
        <InitialHeader intro = "Powered by Create-React-App" />
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
        onClick={() => this.props.onClick(this.state.text[i])}
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

class Name extends Component {
  render() {
    return(
        <h2 className="My-name">{"Matthew O'Connor"} </h2>
      );
  }
}

class PageOne extends Component {

  render() {
    return (
      <div className="First-page">
        <img src={mugshot} className = "My-Picture" alt="You Can't See Me :/[" 
              width="540px" height="auto" padding="50px" />
        <ContactInfo info = "Hello everyone! I'm Matt, and I'm a developer in the
        Madison area. I'm currently looking for development work across the U.S. My
        other passions include music, teaching, physical fitness, wellness, and board games!
        I've left my contact information below, please contact me if you have any questions
        or project ideas. Cheers!"
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

  constructor(props) {
    super(props)
    this.state = {
      currentPage: "About Me",
    };
  }

  handleClick(i) {
    this.setState({currentPage: i});
  }

  render() {

    return (
      <div>
        <Name />
        <Buttonizer onClick={(i) => this.handleClick(i)}/>
        {this.state.currentPage === "About Me" &&
          <PageOne />
        }
        {this.state.currentPage === "Projects" &&
          <Projects />
        }
        {this.state.currentPage === "Resume" &&
          <Resume />
        }
        <Banner />
      </div>
    );
  }
}

export default App;
