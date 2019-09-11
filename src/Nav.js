import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react'

import { Link } from 'react-router-dom'

const Navigation = () => (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to="/">HOME</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    
    <Nav>
        
    <Nav.Link><Link to="/">ABOUT</Link></Nav.Link>
    <Nav.Link><Link to="/projects">PROJECTS</Link></Nav.Link>
    <Nav.Link><Link to="/talks">TALKS</Link></Nav.Link>
    <Nav.Link><Link to="/blog">BLOG</Link></Nav.Link>
    <Nav.Link><Link to="/resume">RESUME</Link></Nav.Link>
    <Nav.Link><Link to="/contact">CONTACT</Link></Nav.Link>

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