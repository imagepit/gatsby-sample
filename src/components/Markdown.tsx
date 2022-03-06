import React, { useEffect } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

// highlightjs
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import go from 'highlight.js/lib/languages/go';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import bash from 'highlight.js/lib/languages/bash';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import markdown from 'highlight.js/lib/languages/markdown';
import 'highlight.js/styles/github.css';

hljs.registerLanguage(`bash`, bash);
hljs.registerLanguage(`css`, css);
hljs.registerLanguage(`dockerfile`, dockerfile);
hljs.registerLanguage(`go`, go);
hljs.registerLanguage(`js`, javascript);
hljs.registerLanguage(`json`, json);
hljs.registerLanguage(`scss`, scss);
hljs.registerLanguage(`ts`, typescript);
hljs.registerLanguage(`yaml`, yaml);
hljs.registerLanguage(`md`, markdown);
hljs.registerLanguage(`xml`, xml);

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
  }
  pre > code.language-bash {
    background-color: black !important;
    color: white;
    white-space: break-spaces !important;
  }
`;

function Markdown({ children }) {
  useEffect(() => {
    hljs.highlightAll();
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
