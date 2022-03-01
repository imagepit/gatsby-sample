import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import LeftSide from './LeftSide';
import './global.module.sass';

export default function Layout2Col({ children }) {
  return (
    <>
      <Container fluid className="px-0 main">
        <Row className="justify-content-center">
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col md={9} xs={12}>
            <main>{children}</main>
          </Col>
          <Col md={3} xs={12}>
            <LeftSide />
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
