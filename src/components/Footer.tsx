import React from 'react';

function Footer() {
  return (
    <footer className="text-center">
      <span>
        © {new Date().getFullYear()}, Built with {` `}
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
    </footer>
  );
}

export default Footer;
