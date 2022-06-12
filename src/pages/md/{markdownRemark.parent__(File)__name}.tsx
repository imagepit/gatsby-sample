import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import RehypeReact from 'rehype-react';
import highlight from '@/lib/highlight';
import BackgroundImage from 'gatsby-background-image';
import LayoutFluid from '@/components/LayoutFluid';
import { Container, Row, Col } from 'react-bootstrap';

const ThumbnailStyle = styled.div`
  /* text-align: center; */
  /* margin-bottom: 2em; */
  border: 1px solid black;
  box-shadow: 4px 5px 10px #666;
`;
const Title = styled.h1`
  font-weight: bold;
  /* text-align: center; */
  margin-bottom: 25px;
  font-size: 28px;
`;

const ContentHeader = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 45px;
  margin-bottom: 25px;
  border-bottom: 1px solid black;
  .bgimage {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute !important;
    filter: blur(100px);
    z-index: -1;
  }
`;

const renderAst = new RehypeReact({
  createElement: React.createElement,
  // hタグを1段下げる
  components: {
    // 'h1':'h2',
    // 'h2': props => {
    //   // console.log(props.children)
    //   return <h3 className='hoge'>{props.children}</h3>
    // },
    // 'h3':'h4',
    // 'h4':'h5',
    // 'h5':'h6',
    // 'h6':'p',//h6はpに変える
    // 'pre': props => {
    //   console.log(props.children)
    //   return <pre>{props.children}</pre>
    // },
  },
}).Compiler;

const GlobalStyle = styled.div`
  #main-content {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 16px;
    line-height: 180%;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
  }
  h2 {
    font-size: 22px;
    padding: 15px;
    margin: 20px 0 !important;
    border-left: 8px solid black;
    border-bottom: 1px solid black;
  }
  h3 {
    font-size: 18px;
    border-bottom: 1px solid black;
    padding: 10px;
    padding-bottom: 5px;
  }
  ul {
    font-size: 16px;
    line-height: 130%;
  }
  img {
    border: 1px solid black;
  }
  .col2 {
    column-count: 2;
  }
  .col2 h4 {
    display: inline-block;
  }
  .hljs {
    background: #fafafa;
    border: 1px solid #000;
    line-height: 120%;
  }
  pre > code.language-bash {
    background-color: black !important;
    color: white;
    white-space: break-spaces !important;
  }
`;

export default function Post({ data }) {
  const thumbnail = getImage(data.markdownRemark.frontmatter.thumbnail);
  const { title, thumbnailAlt, description } = data.markdownRemark.frontmatter;
  const { htmlAst } = data.markdownRemark;
  const imageData =
    data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid;

  useEffect(() => {
    highlight();
  });

  return (
    <LayoutFluid>
      <ContentHeader>
        <BackgroundImage
          Tag="section"
          className="bgimage"
          fluid={imageData}
          backgroundColor="#040e18"
        />
        <Container>
          <Row>
            <Col
              lg={{ span: 4, offset: 1 }}
              md={{ span: 4, offset: 1 }}
              sm={12}
              xs={12}
            >
              <ThumbnailStyle>
                {thumbnail ? (
                  <GatsbyImage image={thumbnail} alt={thumbnailAlt} />
                ) : (
                  <StaticImage
                    alt="no image"
                    src="../../../images/no-image.png"
                  />
                )}
              </ThumbnailStyle>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{title}</Title>
              <div>{description}</div>
            </Col>
          </Row>
        </Container>
      </ContentHeader>
      <Container>
        <Row>
          <Col
            lg={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            sm={12}
            xs={12}
          >
            <main id="main-content">
              <GlobalStyle>{renderAst(htmlAst)}</GlobalStyle>
            </main>
          </Col>
        </Row>
      </Container>
    </LayoutFluid>
  );
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(quality: 100)
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnailAlt
        description
      }
      htmlAst
      tableOfContents
    }
  }
`;
