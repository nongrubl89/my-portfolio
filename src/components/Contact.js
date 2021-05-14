import React, { useState } from "react";
import emailjs from "emailjs-com";
import GithubLogo from "../images/githubwhite.png";
import LinkedInLogo from "../images/linkedInwhite.png";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Contact = React.forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      reply_to: email,
    };

    emailjs
      .send(
        "service_u99ljg5",
        "template_zeduylj",
        templateParams,
        "user_pKVmy69V6k2haXqcrNiM3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <Container fluid ref={ref}>
      <Row className="d-flex justify-content-center m-4">
        <Col md={5}>
          <Form onSubmit={sendEmail} method="POST">
            <Form.Group
              controlId="formName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" value={email}>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button
              type="submit"
              className="submit-btn border-0 text-dark shadow-sm"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <div className="pt-4 pb-4">
        <Row className="d-flex justify-content-center">
          <Col md={6} className="text-center">
            <a href="https://github.com/nongrubl89">
              <i class="fab fa-github fa-2x p-1"></i>
            </a>
            <a href="https://www.linkedin.com/in/lisaburgnon/">
              <i class="fab fa-linkedin fa-2x p-1"></i>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
});

export default Contact;
