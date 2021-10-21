import React from "react";
import SingleProject from "./singleProject";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

const AllProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: title }) {
        nodes {
          id
          url
          title
          contentfulid
          preview {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
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
  `);
  return (
    <Container className="my-3">
      <Row className="g-3 mb-5">
        {data.allContentfulProject.nodes.map((project) => {
          const {
            contentfulid,
            url,
            title,
            preview,
            tags: { tags },
            description: { description },
          } = project;
          return (
            <Col sm={4} key={contentfulid}>
              <SingleProject
                id={contentfulid}
                url={url}
                title={title}
                preview={preview}
                tags={tags}
                description={description}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllProjects;
