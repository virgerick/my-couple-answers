import React, { ReactElement } from "react";
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
interface Props {
  //   brand: { icon: any; title: string };
}

export default function TopBar({}: Props): ReactElement {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/">
              <a className="nav-link">Features</a>
            </Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> 
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link href="/login">
              <a className="nav-link">Iniciar session</a>
            </Link>
            <Link href="/register">
              <a href="" className="nav-link">Registrar me</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
