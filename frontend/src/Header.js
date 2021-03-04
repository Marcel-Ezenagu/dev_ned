import React from 'react'

import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

import { Navbar, Nav }  from 'react-bootstrap' 
import logo from './images/logo.JPG';

function Header() {
  
   const mystyle = {width: "100%", marginRight: "1rem", display: "flex"}
   return (
<div className='header'>
    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
         <Navbar.Brand >
           <Link to='/'>
            <h5 className="logo">MARCEL</h5>
           </Link>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  >
          
        <Nav className="justify-content-end" style={mystyle}>
            
        
            <Nav.Link as={Link} to="/works">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/about">About </Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
                
            <Nav.Link href="#cont">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>

    </Navbar>  
</div>
        
  )
}

export default Header
