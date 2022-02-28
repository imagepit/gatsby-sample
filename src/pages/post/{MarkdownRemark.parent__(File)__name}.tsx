import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import Toc from '@/components/Toc';
import './post.module.sass';

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
        <Toc toc={tableOfContents} />
        <div
          className="toc"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </Layout>
  );
}
