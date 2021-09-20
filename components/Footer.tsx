import React, { ReactElement } from "react";
import style from '../styles/Layout.module.css'

interface Props { }

export default function Footer({ }: Props): ReactElement {
  return (
    <footer className={style.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by {"Heriberto Alcantara Luna "}
      
    </a>
  </footer>
  );
}
