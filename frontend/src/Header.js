import React from 'react'
import './Header.css'

import { Button } from '@material-ui/core'

import { Link } from 'react-router-dom';

import {Navbar, Nav} from 'react-bootstrap'

function Header () {
  return (
    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/"><h2>MARCEL</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse >
          
            <Nav.Link href="/about">About</Nav.Link>
        
            <Nav.Link href="/works">Works</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
                
            <Nav.Link href="/contact">Contact</Nav.Link>
          
        </Navbar.Collapse>
    </Navbar>  
       
  )
}

export default Header
