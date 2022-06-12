import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

function LayoutFluid({ children }) {
  return (
    <>
      <Container fluid className="px-0 main">
        <Row className="justify-content-center">
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Row>
          <Col xs={12}>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
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

export default LayoutFluid;
