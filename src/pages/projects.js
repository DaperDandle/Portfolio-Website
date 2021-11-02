import React from "react";
import Layout from "../components/layout";
import AllProjects from "../components/allProjects";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";

const Projects = ({ data }) => {
  // get array of tags arrays from each project
  const allTags = data.allContentfulProject.nodes.map(
    (project) => project.tags.tags
  );
  // combine multiple arrays into a single array
  const getAllTags = (project) => {
    const result = [];
    project.forEach((project) => {
      project.forEach((tag) => result.push(tag));
    });
    return result;
  };

  // only return the unique tags
  const filterTags = new Set(getAllTags(allTags));
  return (
    <Layout>
      <Container className="py-5">
        <h1 className="text-center text-primary bg-dark">
          Check Out My Projects!
        </h1>
        <AllProjects data={data} tags={filterTags} />
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
