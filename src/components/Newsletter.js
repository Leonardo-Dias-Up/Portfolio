import { Col, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

// https://www.youtube.com/watch?v=bMq2riFCF90
// https://www.emailjs.com/docs/examples/reactjs/

export const Newsletter = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_in40d6a', 'template_89zueyg', form.current, 'slJzTs9Xrr20-oBkS')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
          showAlert();
      }, (error) => {
          console.log(error.text);
      });
  };
  const showAlert = () => {
    alert("Email was ben send, thanks for the subscribe.");
  };

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            </Col>
            <Col md={6} xl={7}>
              <form ref={form} onSubmit={sendEmail}>
                <div className="new-email-bx">
                  <input type="email" placeholder="Email Address" name="email_subscribe" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
