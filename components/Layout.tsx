import Head from "next/head";
import React, { ReactElement } from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import useAppSetting from "../hooks/useAppSetting";
import { Container } from "react-bootstrap";

interface Props {
  children: any;
}

export default function Layout({ children }: Props): ReactElement {
  const appSetting = useAppSetting();

  return (
    <div>
      <Head>
        <title>{appSetting.name}</title>
        <meta name="description" content={appSetting.descripcion} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-primary pt-5 text-center text-white display-6">
        {appSetting.name}
      </div>
      <TopBar />
      <Container>
        <main className="py-5">{children}</main>
        <Footer />
      </Container>
    </div>
  );
}
