import React from "react";
import Head from "next/head";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Finn Janssens | Portfolio</title>
      </Head>
      <Nav />
      <main className="px-4">
        <div className="flex justify-center items-center mx-auto w-2/4 rounded-lg my-16 p-16">
          <div className="text-2xl font-medium">{children}</div>
        </div>
      </main>
    </div>
  );
}
