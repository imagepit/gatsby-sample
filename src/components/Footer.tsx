import React from 'react';

function Footer() {
  return (
    <footer className="text-center">
      <span>
        © {new Date().getFullYear()}, Built with {` `}
        {` `}
        <a href="https://www.image-pit.com">IMAGEPIT</a>
      </span>
    </footer>
  );
}

export default Footer;
