import React from 'react';
import { graphql, Link } from 'gatsby';

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
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
    <main>
      {data.allMarkdownRemark.nodes.map((node) => (
        <div>
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
