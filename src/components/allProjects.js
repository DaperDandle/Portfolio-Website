import React from "react";
import { useState } from "react";
import SingleProject from "./singleProject";

import { Container, Row, Col } from "react-bootstrap";

const AllProjects = ({ data }) => {
  const [projects, setProjects] = useState(data.allContentfulProject.nodes);
  const [selectedTag, setSelectedTag] = useState("all-projects");
  // get array of tags arrays from each project
  const allTags = projects.map((project) => project.tags.tags);

  // combine multiple arrays into a single array
  const getAllTags = (project) => {
    const result = [];
    project.forEach((project) => {
      project.forEach((tag) => result.push(tag));
    });
    return result;
  };

  // only return the unique tags
  const filteredTags = new Set(getAllTags(allTags));

  return (
    <Container>
      <label htmlFor="projectFilter">Filter Project Tags</label>
      <select
        name="projectFilter"
        id="projectFilter"
        value={selectedTag}
        onChange={(e) => {
          setSelectedTag(e.target.value);
        }}
      >
        {[...filteredTags].map((tag) => {
          return <option value={tag}>{tag}</option>;
        })}
      </select>
      <button
        onClick={() => {
          const newProjects = projects.filter((project) => {
            return project.tags.tags.indexOf(selectedTag) > -1;
          });
          setProjects(newProjects);
        }}
      >
        Filter Tags
      </button>
      <Row className="g-3">
        {projects.map((project) => {
          const {
            contentfulid,
            url,
            title,
            githubRepository,
            preview,
            tags: { tags },
            description: { description },
          } = project;
          return (
            <Col md={4} key={contentfulid}>
              <SingleProject
                id={contentfulid}
                url={url}
                title={title}
                preview={preview}
                tags={tags}
                description={description}
                githubRepository={githubRepository}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllProjects;
