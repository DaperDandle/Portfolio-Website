import React from "react";
import Layout from "../components/layout";
import { Form, Container, Row, Col } from "react-bootstrap";
const Contact = () => {
  return (
    <Layout>
      <Container>
        <Row className="justify-content-between py-3">
          <Col md={5} className="text-center card my-2">
            <h3 className="mt-3">Like what you see?</h3>
            <hr className="bg-primary" />
            <p>
              If you liked my portfolio please feel free to send a message to my
              email using the form on the left or by calling me at{" "}
              <span>816-668-3159</span>! I am currently looking for a full time
              front-end developer position and would love to hear from you.
            </p>
          </Col>
          <Col md={5} className="card p-3 my-2">
            <Form>
              <h2 className="text-center">Get in Touch!</h2>
              <hr className="bg-primary" />
              <Form.Group className="mb-3" controlId="nameInput">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  className="mb-1"
                />
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="***-***-****" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Contact;
