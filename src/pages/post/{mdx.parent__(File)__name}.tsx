import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import Toc from '@/components/Toc';
import Markdown from '@/components/Markdown';
import './post.module.sass';

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
      tableOfContents
    }
  }
`;

export default function Home({ data }) {
  const { body, tableOfContents } = data.mdx;
  const { title } = data.mdx.frontmatter;
  return (
    <Layout>
      <main>
        <h1>{title}</h1>
        <Toc toc={tableOfContents} />
        <Markdown>{body}</Markdown>
      </main>
    </Layout>
  );
}
