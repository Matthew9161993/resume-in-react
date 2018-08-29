import React, { Component } from 'react';
import logo from './logo.svg';
import mugshot from './ImSoHandsome.jpg'
import resume from './8-4-18 Resume.pdf'
import saraproject from './SaraWalkSample.png'
import './App.css';


const PROJECTS = [
  {name: 'Sara Takes a Walk', language: 'Java', 
  description: 'This was a quick Java project to learn Swing and other UI.' }
];

function InitialHeader(props) {
  return (
    <div className="App-footer">
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

class Banner extends Component{

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
    return (
      <div className="First-page">
        <img src={mugshot} 
            className =  {this.state.hover ? "My-picture-hover" : "My-picture" }
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
            alt="You Can't See Me :/" />
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

  renderProject(i) {
    return <ProjectEntry project = {i} />;
  }

  render() {
    return(
      <div className="Project-page">
        These are my cool projects!
        <ProjectEntry projects = {PROJECTS} />
      </div>
      );
  }
}

class ProjectEntry extends Component {

  render() {
    return(
      <div className = "Project-box">
        {this.props.projects.name}
      </div>
    );
  }
}

class Resume extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  }

  render() {
    return(
      <div className = "Resume-container">
        <div className = "Resume-page">
          <section className="Resume-header">
            &#123; OBJECTIVE &#125;
          </section>
          <section className="Resume-text">
          Seeking responsible position to apply computer skills 
          to solve problems with user friendly software and technology 
          to improve productivity and increase communication.
          </section>
          <section className="Resume-header">
          &#123; EDUCATION &#125;
          </section>
          <section className="Resume-info-line">
            University of Wisconsin-Madison 2018
          </section>
          <section className="Resume-text">
            Computer Science B.S.
          </section>
          <section className="Resume-header">
          &#123; WORK EXPERIENCE &#125;
          </section>
          <section className="Resume-info-line">
            MORGRIDGE INSTITUTE FOR RESEARCH, MADISON WI - SINCE 2016
          </section>
          <section className="Resume-text">
            The Morgridge Institute for Reasearch, partnering with UW-Madison, 
            seeks to improve human health 
            through innovative technologies and interdisciplinary biomedical 
            discoveries. As an <u>Audio/Video Technician</u>, operated and 
            maintained Unix/Windows computers, created new network 
            software for remote access to digital signage, trained new 
            technicians and published training manuals, and recognized 
            for efficient communication with team members.
          </section>
        </div>
        <a className = "Download-button" href={resume} download="MatthewOConnor">
          <CustomButton text= "Download"
                        onClick={() => this.handleClick()}/>
        </a>
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
    this.handleClick = this.handleClick.bind(this);
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
