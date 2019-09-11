import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react'

const Navigation = () => (

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

)

export default Navigation