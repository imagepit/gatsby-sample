import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import Markdown from '@/components/Markdown';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const ThumbnailStyle = styled.div`
  text-align: center;
  margin-bottom: 2em;
`;
const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
`;

export default function Home({ data }) {
  const thumbnail = getImage(data.mdx.frontmatter.thumbnail);
  const { thumbnailAlt } = data.mdx.frontmatter;
  const { body } = data.mdx;
  const { title } = data.mdx.frontmatter;
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
        <Markdown>{body}</Markdown>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        thumbnailAlt
      }
      body
      tableOfContents
    }
  }
`;
