import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import RehypeReact from 'rehype-react';
import highlight from '@/lib/highlight';

const ThumbnailStyle = styled.div`
  text-align: center;
  margin-bottom: 2em;
`;
const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
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
    margin: 20px 0 !important;
  }
  h2 {
    padding: 15px;
    margin-top: 20px !important;
    border-left: 8px solid black;
    border-bottom: 1px solid black;
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

export default function Home({ data }) {
  const thumbnail = getImage(data.markdownRemark.frontmatter.thumbnail);
  const { title, thumbnailAlt } = data.markdownRemark.frontmatter;
  const { htmlAst } = data.markdownRemark;

  useEffect(() => {
    highlight();
  });

  return (
    <Layout>
      <main id="main-content">
        <ThumbnailStyle>
          {thumbnail ? (
            <GatsbyImage image={thumbnail} alt={thumbnailAlt} />
          ) : (
            <StaticImage alt="no image" src="../../../images/no-image.png" />
          )}
        </ThumbnailStyle>
        <Title>{title}</Title>
        <GlobalStyle>{renderAst(htmlAst)}</GlobalStyle>
      </main>
    </Layout>
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
          }
        }
        thumbnailAlt
      }
      htmlAst
      tableOfContents
    }
  }
`;
