import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const Footer = () => (
  <footer className="footer-wrap bg-black text-white">
    <Container className="">
      <Row>
        <Col>
          <a href="https://www.aesthetic.com" target="_blank">
            <h2 className="mb-3 text-center footer-cta" style={{fontSize: 46}}>
              Join our waitlist today →
            </h2>
          </a>
          <div className="footer-img">
            <img src='/img/illustrations/cursor.svg' className="cursor-icon" />
            <img src='/img/illustrations/folder.svg' className="folder-icon" />
          </div>
        </Col>
      </Row>
      <h5 className="mb-3">&nbsp;</h5>
          <h5 style={{fontWeight: 'normal', opacity: 0.4, fontSize: 18}}>
            © Aesthetic 2020
          </h5>
    </Container>
  </footer>
);
export default Footer;
