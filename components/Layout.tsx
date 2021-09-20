import Head from "next/head";
import React, { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import style from '../styles/Layout.module.css'

interface Props {
  children: any;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Head>
        <title>My couple Answars</title>
        <meta
          name="description"
          content="It is an application for practicing the questions which could face on consulate enterview."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
}
