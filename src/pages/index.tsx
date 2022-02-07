import React from 'react';
import { graphql, Link } from 'gatsby';
import Title from '@/components/Title';

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          date
          title
        }
        html
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`;

export default function Home({ data }) {
  return (
    <main key="1">
      <Title>タイトル</Title>
      {data.allMarkdownRemark.nodes.map((node) => (
        <div key={node.id}>
          <Link to={`post/${node.parent.name}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </main>
  );
}
