import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const ContainerStyle = styled(Container)`
  padding: 0 25px;
`;

function Layout({ children }) {
  return (
    <>
      <Container fluid className="px-0 main">
        <Row className="justify-content-center">
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
      <ContainerStyle className="mt-5">
        <Row>
          <Col xs={12}>
            <main>{children}</main>
          </Col>
        </Row>
      </ContainerStyle>
      <Container fluid className="px-0">
        <Row>
          <Col className="footer-col">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
