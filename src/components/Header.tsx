import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

function Header() {
  return (
    <header>
      <Container>
        <Navbar expand="md" variant="light">
          <Navbar.Brand href="/">
            <StaticImage
              src="../../images/logo.png"
              alt="イメージピット株式会社"
              width={130}
              placeholder="none"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          {/* <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li">
                <Link to="/" className="nav-link" activeClassName="active">
                  Page2
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/" className="nav-link" activeClassName="active">
                  Page3
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
