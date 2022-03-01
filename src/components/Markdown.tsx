import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

function Markdown({ children }) {
  return (
    <div>
      <MDXProvider>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  );
}

export default Markdown;
