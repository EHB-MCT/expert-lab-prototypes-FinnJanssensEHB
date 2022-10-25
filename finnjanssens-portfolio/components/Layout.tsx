import React from "react";
import Head from "next/head";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Finn Janssens | Portfolio</title>
        <link rel="stylesheet" href="https://use.typekit.net/nel5nyq.css" />
      </Head>
      <main
        className="grid grid-cols-5 gap-x-5 h-screen"
        style={{ gridTemplateRows: "52px auto" }}
      >
        <Sidebar />
        <Nav />
        <div className="row-start-2 col-start-2 col-span-4 pt-8 border-l-2 border-black mb-4 grid grid-cols-4 gap-x-5">
          {children}
        </div>
      </main>
    </div>
  );
}
