import React from 'react'
import './Header.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

import {Container, Navbar, Nav }  from 'react-bootstrap' 

function Header() {
  
  const mystyle = {width: "100%", marginRight: "1rem", display: "flex"}
  return (
<div className='header'>
    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/"><h6 style={{fontWeight: "900", color:"green"}} >MARCEL</h6></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  >
          
        <Nav className="justify-content-end" style={mystyle}>
            
        
            <Nav.Link href="/works">Portfolio</Nav.Link>
            <Nav.Link href="/about">About </Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
                
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>

    </Navbar>  
</div>
  )
}

export default Header
