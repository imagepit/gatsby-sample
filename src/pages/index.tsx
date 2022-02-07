import React from 'react';
import { graphql, Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots
          infinite
          autoPlay
          autoPlaySpeed={3000}
          responsive={responsive}
        >
          <div>
            <img
              src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
              alt="cat"
              width={450}
            />
          </div>
          <div>
            <img
              src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
              alt="cat"
              width={450}
            />
          </div>
          <div>
            <img
              src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
              alt="cat"
              width={450}
            />
          </div>
          <div>
            <img
              src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
              alt="cat"
              width={450}
            />
          </div>
        </Carousel>
      </div>
      <Layout>
        {/* <Title>タイトル</Title> */}
        {data.allMarkdownRemark.nodes.map((node) => (
          <div key={node.id}>
            <Link to={`post/${node.parent.name}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </Layout>
    </>
  );
}
