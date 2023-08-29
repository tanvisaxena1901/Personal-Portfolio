import React from 'react';
import { Nav, Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { Github } from 'react-bootstrap-icons';
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Link } from 'react-router-dom';
import { Twitter } from 'react-bootstrap-icons';


const footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <Link className='text-light font-weight-bold text-decoration-none'><h2 style={{fontFamily: 'monospace san-serif', marginTop: '2rem', fontStyle: 'oblique', fontSize: '2rem'} }>Tanvi</h2></Link>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end justify-content-center">
            <div className="social-icon mt-5 center-block">
              <Nav.Link href="https://www.linkedin.com/in/tanvi-saxena-19t01/" target='_blank'><img src={navIcon1} alt="Icon" /></Nav.Link>
              <Nav.Link href="https://github.com/tanvisaxena1901" target='_blank'><Github className='hii' color='white'/></Nav.Link>
              <Nav.Link href="https://www.instagram.com/hii.tanvi/" target='_blank'><img src={navIcon3} alt="Icon" /></Nav.Link>
              <Nav.Link href="https://twitter.com/TanviSaxena18" target='_blank'><Twitter className='hii' color='white'/></Nav.Link>
            </div>
            <p><span className='fw-bold'>Call:</span> +91 9311025323</p>
            <p><span className='fw-bold'>Email:</span> tanvisaxena1901@gmail.com</p>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default footer;
