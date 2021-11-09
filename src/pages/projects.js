import React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import AllProjects from "../components/allProjects";
import { Container, Row, Col } from "react-bootstrap";
import { graphql } from "gatsby";

const Projects = ({ data }) => {
  const [projects, setProjects] = useState(data.allContentfulProject.nodes);
  const [selectedTag, setSelectedTag] = useState("all-projects");

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
        <Container className="text-primary text-center bg-dark p-3 w-50 ">
          <Row xs={1} lg={3} className="align-items-center">
            <Col>
              <label htmlFor="projectFilter" className="fs-5">
                Filter Project Tags:
              </label>
            </Col>
            <Col className="my-3">
              <select
                name="projectFilter"
                id="projectFilter"
                className="text-truncate"
                value={selectedTag}
                onChange={(e) => {
                  setSelectedTag(e.target.value);
                }}
              >
                {[...filterTags].map((tag, index) => {
                  return (
                    <option key={index} value={tag}>
                      {tag}
                    </option>
                  );
                })}
              </select>
            </Col>
            <Col>
              <button
                className=" ms-2 text-dark btn btn-primary"
                onClick={() => {
                  const newProjects = data.allContentfulProject.nodes.filter(
                    (project) => {
                      return project.tags.tags.indexOf(selectedTag) > -1;
                    }
                  );
                  setProjects(newProjects);
                }}
              >
                Filter
              </button>
            </Col>
          </Row>
        </Container>
        <AllProjects projects={projects} />
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
