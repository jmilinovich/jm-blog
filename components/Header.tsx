import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export const Header: React.FC = () => (
<>
<Container className="blog-header-wrap">
  <Navbar expand="lg" className="mt-3 mb-4">
    <Navbar.Brand href="https://www.aesthetic.com/">
      <img className="aesthetic-logomark" src="/img/logo/aesthetic_logomark.svg"/>
    </Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    <Nav className="ml-auto">
      <Nav.Link href="https://blog.aesthetic.com">Blog Home</Nav.Link>
    </Nav>
  </Navbar>
</Container>   
</>
);
