import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo1 from './conahcyt.png';
import logo2 from './ciesas.jpg';

const Header = () => {
  return (
    <>
      {/* Header con logos en los extremos */}
      <header className="d-flex justify-content-between align-items-center p-3 bg-light">
        <img src={logo1} alt="Logo 1"/>
        <img src={logo2} alt="Logo 2"/>
      </header>

      {/* Navbar usando React Bootstrap */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Introducción</Nav.Link>
              <Nav.Link as={Link} to="/plantas">Plantas</Nav.Link>
              <Nav.Link as={Link} to="/base-de-datos">Base de Datos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
