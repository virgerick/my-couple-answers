import React, { ReactElement } from "react";
import { Container, Nav } from "react-bootstrap";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className="py-3 bg-light">
      <Nav>
        <Container>
          <Nav.Link
            href="https://github.com/virgerick"
            target="_blank"
          >
            Powered by <strong>Heriberto Alcantara Luna</strong>
          </Nav.Link>
        </Container>
      </Nav>
    </footer>
  );
}
