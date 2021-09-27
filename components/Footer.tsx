import React, { ReactElement } from "react";
import { Nav } from "react-bootstrap";

interface Props { }

export default function Footer({ }: Props): ReactElement {
  return (
    <footer  className="fixed-bottom py-3 bg-light" >
    <Nav.Link
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by {"Heriberto Alcantara Luna "}
      
    </Nav.Link>
  </footer>
  );
}
