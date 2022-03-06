import React from 'react';
import { Link } from 'gatsby';
import { Row, Col, Card } from 'react-bootstrap';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const GlobalStyle = styled.div`
  .card-body {
    padding: 0.5rem 0;
  }
  .card-title {
    font-weight: bold;
    line-height: 150%;
  }
`;
const GatsbyImageStyle = styled(GatsbyImage)`
  width: 100%;
  height: 15vw;
`;
const staticImageStyle = { width: `100%`, height: `15vw` };
const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`;
const CardStyle = styled(Card)`
  border: none;
`;
export default function PostCardGroup(props) {
  const { data } = props;
  return (
    <GlobalStyle>
      <Row>
        {data.allMdx.nodes.map((node) => (
          <Col
            lg={4}
            md={4}
            sm={6}
            xs={12}
            key={node.id}
            className="d-flex align-items-stretch mb-4"
          >
            <CardStyle key={node.id}>
              <Link to={`post/${node.parent.name}`}>
                {getImage(node.frontmatter.thumbnail) ? (
                  <GatsbyImageStyle
                    image={getImage(node.frontmatter.thumbnail)}
                    alt={node.frontmatter.thumbnailAlt}
                  />
                ) : (
                  <StaticImage
                    style={staticImageStyle}
                    alt="no image"
                    src="../images/default_thumbnail.jpg"
                  />
                )}
              </Link>
              <Card.Body>
                <LinkStyle to={`post/${node.parent.name}`}>
                  <Card.Title>{node.frontmatter.title}</Card.Title>
                </LinkStyle>
                {/* <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text> */}
              </Card.Body>
            </CardStyle>
          </Col>
        ))}
      </Row>
    </GlobalStyle>
  );
}
