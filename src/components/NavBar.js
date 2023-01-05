import React from 'react'
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const NavBar = () => {
  const[activeLink, setActiveLink]=useState('home');
  const[scrolled, setScrolled]=useState(false);

  useEffect(()=>{
    const onScrool=()=>{
      if(window.scrollY>50){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScrool)

    return()=>{window.removeEventListener('scroll', onscroll)}
  },[])

  const onUpdateLink=(value)=>{
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled?'scrolled':''}>
      <Container>
        <Navbar.Brand href="#home" id='navLink'>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" id='navLink' className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateLink('home')}}>Home</Nav.Link>
            <Nav.Link href="#skills" id='navLink' className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateLink('skills')}}>Skills</Nav.Link>
            <Nav.Link href="#projects" id='navLink' className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateLink('projects')}}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"> <img src={navIcon1} alt="Linkedin" /></a>
              <a href="#"> <img src={navIcon2} alt="Facebook" /></a>
              <a href="#"> <img src={navIcon3} alt="Instagram" /></a>
            </div>
            <button className='vvd' onClick={()=>{}}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar;
