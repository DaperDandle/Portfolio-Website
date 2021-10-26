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
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              height: 500
            )
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
    <Container>
      <Row className="g-3">
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
            <Col md={4} key={contentfulid}>
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
