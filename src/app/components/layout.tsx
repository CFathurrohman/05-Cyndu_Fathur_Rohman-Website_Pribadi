import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { defaultMetadata } from "../utils/metadata";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: any) {
  const metadata = children?.props?.metadata || defaultMetadata;

  return (
    <>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og.title" content={metadata.content} />
        <meta property="og.description" content={metadata.description} />
        <meta property="og.image" content={metadata.openGraph.image} />
        <meta property="og.url" content={metadata.openGraph.url} />
      </head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}