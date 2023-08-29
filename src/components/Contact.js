import React from 'react';
import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Spinner from 'react-bootstrap/Spinner';

const Contact = () => {
  const form = useRef();
    const [done, setDone] = useState(false);
    const [spin, setSpin] = useState(false);

    const sendEmail = (e) => {
      setSpin(true);
      e.preventDefault();
                      //service id      ,  template id      ,             ,   Public Key
      emailjs.sendForm("service_tbjjcj2", "template_we9ivpq",form.current, "qmBUBVLOY1jxlGOZb")
      .then(
          (result) => {
            console.log(result.text);
            setSpin(false);
            setDone(true);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    if(done){
      setTimeout(()=>{
        setDone(false);
      }, 3500)
    }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ''}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_Fname"  className="user"  placeholder="FirstName" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_Lname"  className="user"  placeholder="LastName" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" className="user" placeholder="Email" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="user_PhoneNo" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1 ">
                      <textarea rows='6' name="message" className="user" placeholder="Message" required/>
                      <button className='mb-5 pb-3' type="submit"><span>Send</span></button> <br />
                      <div className='justify-content-center mx-5'>
                        {spin ? <Spinner/> : ''}
                        <h2 className='my-3'>{done && "Thanks for Contacting me"}</h2>
                      </div> 
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
