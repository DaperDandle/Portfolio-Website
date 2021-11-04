import React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import AllProjects from "../components/allProjects";
import { Container } from "react-bootstrap";
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
        <div className="text-primary bg-dark p-2 w-25">
          <label htmlFor="projectFilter" className="me-2">
            Filter By Project Tags:
          </label>
          <select
            name="projectFilter"
            id="projectFilter"
            value={selectedTag}
            onChange={(e) => {
              setSelectedTag(e.target.value);
            }}
          >
            {[...filterTags].map((tag) => {
              return <option value={tag}>{tag}</option>;
            })}
          </select>
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
        </div>
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
