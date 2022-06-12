import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const GlobalStyle = styled.header`
  border-bottom: 1px solid black;
`;

function Header() {
  return (
    <GlobalStyle>
      <Container fluid>
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
    </GlobalStyle>
  );
}

export default Header;
