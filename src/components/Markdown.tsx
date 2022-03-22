import React, { useEffect } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import highlight from '@/lib/highlight';

const GlobalStyle = styled.div`
  #main-content {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 16px;
    line-height: 180%;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
    margin: 20px 0 !important;
  }
  h2 {
    padding: 15px;
    margin-top: 20px !important;
    border-left: 8px solid black;
    border-bottom: 1px solid black;
  }
  img {
    border: 1px solid black;
  }
  .col2 {
    column-count: 2;
  }
  .col2 h4 {
    display: inline-block;
  }
  .hljs {
    background: #fafafa;
    border: 1px solid #000;
    line-height: 120%;
  }
  pre > code.language-bash {
    background-color: black !important;
    color: white;
    white-space: break-spaces !important;
  }
`;

function Markdown({ children }) {
  useEffect(() => {
    highlight();
  });
  return (
    <div>
      <GlobalStyle>
        <MDXProvider>
          <MDXRenderer>{children}</MDXRenderer>
        </MDXProvider>
      </GlobalStyle>
    </div>
  );
}

export default Markdown;
