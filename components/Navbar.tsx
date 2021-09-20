import React, { ReactElement } from "react";
import style from '../styles/Layout.module.css'
interface Props {
//   brand: { icon: any; title: string };
}

export default function Navbar({}: Props): ReactElement {
  return (

    <nav className={`${style.nav} ${style.dark}`}>
        <div className="mx-5 text-xl"> MCA</div>
        <ul>
            <li className="text-white-200">Home</li>
            <li className="text-white-200">Home</li>
            <li className="text-white-200">Home</li>
            <li className="text-white-200">Home</li>
        </ul>
    </nav>
  );
}
