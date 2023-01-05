import React from 'react'
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateLink('home')}}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateLink('skills')}}>skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateLink('projects')}}>projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"> <img src='' alt="" /></a>
              <a href="#"> <img src='' alt="" /></a>
              <a href="#"> <img src='' alt="" /></a>
            </div>
            <button className='vvd' onClick={()=>{}}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar;
