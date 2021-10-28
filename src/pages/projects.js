import React from "react";
import Layout from "../components/layout";
import AllProjects from "../components/allProjects";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";

const Projects = ({ data }) => {
  return (
    <Layout>
      <Container className="py-5">
        <h1 className="text-center text-primary bg-dark">
          Check Out My Projects!
        </h1>
        <AllProjects data={data} />
      </Container>
    </Layout>
  );
};
export const projects = graphql`
  query projectsQuery {
    allContentfulProject(sort: { fields: title }) {
      nodes {
        url
        title
        contentfulid
        githubRepository
        preview {
          gatsbyImageData
        }
        tags {
          tags
        }
        description {
          description
        }
      }
    }
  }
`;

export default Projects;
