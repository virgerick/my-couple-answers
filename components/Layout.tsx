import Head from "next/head";
import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";
import useAppSetting from "../hooks/useAppSetting";
import { Container } from "react-bootstrap";

interface Props {
  children: any;
}

export default function Layout({ children }: Props): ReactElement {
  const appSetting = useAppSetting();

  return (
    <>
      <Head>
        <title>{appSetting.name}</title>
        <meta name="description" content={appSetting.descripcion} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-primary pt-5 text-center text-white display-6">
        {appSetting.name}
      </div>
      <Header />
      <Container style={{
        minHeight:"65vh"
      }}>
        <main className="py-5">{children}</main>
      </Container>
      <Footer />
    </>
  );
}
