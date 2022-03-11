import React from 'react';
import { Link } from 'gatsby';
import { Row, Col, Card } from 'react-bootstrap';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const GlobalStyle = styled.div`
  .card {
    border-radius: 0;
    border: 1px solid black;
  }
  .card-body {
    border-top: 1px solid black;
    padding: 0.5rem 0;
  }
  .card-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0;
    text-align: center;
  }
`;
const GatsbyImageStyle = styled(GatsbyImage)`
  width: 100%;
  height: 10vw;
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
  // console.log(data.site.siteMetadata.categories);
  return (
    <GlobalStyle>
      {data.site.siteMetadata.categories.map((category) => (
        <Row>
          <h3>{category.title}</h3>
          <p>{category.description}</p>
          {data.allMdx.nodes
            .filter((node) => node.frontmatter.category === category.slug)
            .map((node) => (
              <Col
                lg={3}
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
                        src="../../images/no-image.png"
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
      ))}
    </GlobalStyle>
  );
}
