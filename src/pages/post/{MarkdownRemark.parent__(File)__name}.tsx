import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents
      frontmatter {
        title
      }
    }
  }
`;
export default function Home({ data }) {
  const { html, tableOfContents } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <main>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </Layout>
  );
}
