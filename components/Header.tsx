import React, { ReactElement } from "react";
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import useAppSetting from "../hooks/useAppSetting";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase";
import { useRouter } from "next/dist/client/router";
interface Props {
  //   brand: { icon: any; title: string };
}

export default function Header({}: Props): ReactElement {
  const setting = useAppSetting();
  const [user, loading, error] = useAuthState(firebase.auth());
  const router = useRouter();
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Link href="/">
          <a className="navbar-brand" title={setting.descripcion}>
            MCA
          </a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <Link href="/form">
                <a className="nav-link">Forms</a>
              </Link>
            )}
          </Nav>
          {!user ? (
            <Nav>
              <Link href="/login">
                <a className="nav-link">Iniciar session</a>
              </Link>
              <Link href="/register">
                <a href="" className="nav-link">
                  Registrar me
                </a>
              </Link>
            </Nav>
          ) : (
            <Nav>
              <NavDropdown title={user.email} id="collasible-nav-dropdown">
                <Link href="/profile">
                  <a className="dropdown-item">Perfile</a>
                </Link>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signOut}>
                  Cerrar session
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
