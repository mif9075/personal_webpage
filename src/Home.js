import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const Home = () => (
  <div>
    <Jumbotron>
	        <div class="container">
		        <div class="profile-teaser media flex-column flex-md-row">
				    <img class="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src="adrian.jpg" alt="" height="240" width="240"></img>
					<div class="media-body text-center text-md-left">
					<div class="lead">Hello, my name is</div>
					<h2 class="mt-0 display-4 font-weight-bold">Miguel A. Fernandez</h2>
					<div class="bio mb-3">I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on <a class="link-on-bg" href="/blog">my blog</a> and regularly <a class="link-on-bg" href="/talks">speak</a> at various web conferences and meetups. Want to know how I may help your project? Check out my project <a class="link-on-bg" href="/projects">case studies</a> and <a class="link-on-bg" href="/resume">resume</a>.
					</div>
					<a class="theme-btn-on-bg btn font-weight-bold theme-btn-cta" href="/contact">Hire Me</a>
					</div>
				</div>
	        </div>
</Jumbotron>
<div class="container">
<div class="section-intro mx-auto text-center mb-5 text-secondary">I have 1 year experience building rich web applications. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience? <a href="/resume">Check out my online resume</a>.</div>
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
)
export default Home