import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { Twitter } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <h2 style={{color: '#fff', fontFamily: 'monospace san-serif', fontStyle: 'oblique', fontWeight: 'bold', fontSize: '2.5rem'} }>Tanvi</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>About Me</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon nav-social">
              <Nav.Link href="https://www.linkedin.com/in/tanvi-saxena-19t01/" target='_blank'><img src={navIcon1} alt="Icon" /></Nav.Link>
              <Nav.Link href="https://github.com/tanvisaxena1901" target='_blank'><Github className='hii' color='white'/></Nav.Link>
              <Nav.Link href="https://www.instagram.com/hii.tanvi/" target='_blank'><img src={navIcon3} alt="Icon" /></Nav.Link>
              <Nav.Link href="https://twitter.com/TanviSaxena18" target='_blank'><Twitter className='hii' color='white'/></Nav.Link>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
