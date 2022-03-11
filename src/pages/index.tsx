import React from 'react';
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout';
import PostCardGroup from '@/components/PostCardGroup';
// import TopCarousel from '@/components/TopCarousel';

import { createGlobalStyle } from 'styled-components';

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        author
        categories {
          description
          slug
          title
        }
      }
    }
    allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      nodes {
        id
        frontmatter {
          date
          title
          thumbnailAlt
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
body{
  font-family: --bs-font-sans-serif;
}
`;

export default function Home({ data }) {
  return (
    <>
      {/* <TopCarousel /> */}
      <Layout>
        <GlobalStyle />
        <PostCardGroup data={data} />
      </Layout>
    </>
  );
}
