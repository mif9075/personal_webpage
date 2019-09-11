import React from 'react';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Jumbotron from 'react-bootstrap/Jumbotron';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function App() {
  return (
    <div className="App">

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">HOME</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    
    <Nav>
    <Nav.Link href="#about">ABOUT
    </Nav.Link>
      <Nav.Link href="#projects">PROJECTS</Nav.Link>
    <Nav.Link href="#talks">TALKS</Nav.Link>
      <Nav.Link href="#blog">BLOG</Nav.Link>
      <Nav.Link href="#resume">RESUME</Nav.Link>
      <Nav.Link eventKey={2} href="#contact">
        CONTACT
      </Nav.Link>
      <NavDropdown title="PAGES" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Project Case Study (1 Column)</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Project Case Study (2 Columns)</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Blog Post</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<Jumbotron>
	        <div class="container">
		        <div class="profile-teaser media flex-column flex-md-row">
				    <img class="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src="adrian.jpg" alt="" height="240" width="240"></img>
					<div class="media-body text-center text-md-left">
					<div class="lead">Hello, my name is</div>
					<h2 class="mt-0 display-4 font-weight-bold">Miguel A. Fernandez</h2>
					<div class="bio mb-3">I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on <a class="link-on-bg" href="blog.html">my blog</a> and regularly <a class="link-on-bg" href="talks.html">speak</a> at various web conferences and meetups. Want to know how I may help your project? Check out my project <a class="link-on-bg" href="projects.html">case studies</a> and <a class="link-on-bg" href="resume.html">resume</a>.
					</div>
					<a class="theme-btn-on-bg btn font-weight-bold theme-btn-cta" href="contact.html">Hire Me</a>
					</div>
				</div>
	        </div>
</Jumbotron>

<div class="container">

<div class="section-intro mx-auto text-center mb-5 text-secondary">I have 1 year experience building rich web applications. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience? <a href="resume.html">Check out my online resume</a>.</div>

<CardDeck>
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Header>Front End</Card.Header>
      <Card.Text>
        <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>Bootrap</li>
            <li>Webpack</li>
            <li>HTML5/CSS3</li>
        </ul>
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Header>Back End</Card.Header>
      <Card.Text>
      <ul>
            <li>Express</li>
            <li>Node.js</li>
            <li>API development</li>
            <li>Jira</li>
            <li>MongoDB</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Header>Others</Card.Header>
      <Card.Text>
      <ul>
            <li>Git</li>
            <li>WireFraming</li>
            <li>Unix/Ubuntu</li>
            <li>Microsoft Office</li>
            <li>Code Review</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>

    </div>
  );
}

export default App;
