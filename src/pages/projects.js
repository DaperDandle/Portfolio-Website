import React from "react";
import Layout from "../components/layout";
import AllProjects from "../components/allProjects";
import { Container } from "react-bootstrap";
const Projects = () => {
  return (
    <Layout>
      <Container className="py-5">
        <h1 className="text-center">Check Out My Projects!</h1>
        <AllProjects />
      </Container>
    </Layout>
  );
};

export default Projects;
