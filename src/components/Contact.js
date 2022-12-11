import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg1 from "../assets/img/project-img1.png";
import emailjs from '@emailjs/browser';
// https://www.youtube.com/watch?v=bMq2riFCF90
// https://www.emailjs.com/docs/examples/reactjs/

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_in40d6a', 'template_99lrxci', form.current, 'slJzTs9Xrr20-oBkS')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
          showAlert();
      }, (error) => {
          console.log(error.text);
      });
  };
  const showAlert = () => {
    alert("Email was ben send, thanks for the contact.");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={projImg1} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" name="firstName"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name"  name='lastName'/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address" name='email' />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." name='phone'/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name='message'></textarea>
                      <button type="submit"><span>Send</span> </button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
