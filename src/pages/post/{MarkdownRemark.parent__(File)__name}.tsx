import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
export default function Home({ data }) {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  return (
    <main>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
