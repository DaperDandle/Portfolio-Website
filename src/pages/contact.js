import React from "react";
import Layout from "../components/layout";
import { Form, Container, Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";
const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact"></SEO>
      <Container className="fs-5 pt-3 text-white">
        <Row className="justify-content-around py-3">
          <Col md={5} className="text-center project-card my-2">
            <h2 className="mt-3">Like what you see?</h2>
            <hr className="secondary-bg" />
            <p>
              If you liked my portfolio please feel free to send a message to my
              email using the form on the right or by calling me at{" "}
              <span className="secondary-text">816-668-3159</span> I am
              currently looking for a full time front-end developer position and
              would love to hear from you!
            </p>
          </Col>
          <Col md={5} className="project-card p-3 my-2">
            <Form action="https://formspree.io/f/xzbylqqo" method="POST">
              <h2 className="text-center">Get in Touch!</h2>
              <hr className="secondary-bg" />
              <Form.Group className="mb-3" controlId="nameInput">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="mb-1"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phone"
                  type="phone"
                  placeholder="***-***-****"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Leave me a message!"
                  name="message"
                />
              </Form.Group>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Contact;
