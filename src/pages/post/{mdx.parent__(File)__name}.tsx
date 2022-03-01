import React from 'react';
import { graphql } from 'gatsby';
import Layout2Col from '@/components/Layout2Col';
import Toc from '@/components/Toc';
import Markdown from '@/components/Markdown';
import './post.module.sass';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        thumbnailAlt
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      tableOfContents
    }
  }
`;

export default function Home({ data }) {
  const thumbnail = getImage(data.mdx.frontmatter.thumbnail);
  const { thumbnailAlt } = data.mdx.frontmatter;
  const { body, tableOfContents } = data.mdx;
  const { title } = data.mdx.frontmatter;
  return (
    <Layout2Col
      main={
        <main>
          <h1>{title}</h1>
          {thumbnail ? (
            <GatsbyImage image={thumbnail} alt={thumbnailAlt} />
          ) : (
            <StaticImage alt="" src="../../../images/default_thumbnail.png" />
          )}
          <Markdown>{body}</Markdown>
        </main>
      }
      side={<Toc toc={tableOfContents} />}
    />
  );
}
