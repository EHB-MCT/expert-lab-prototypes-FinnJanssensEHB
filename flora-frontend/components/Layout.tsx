import React from "react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Finn Janssens | Portfolio</title>
      </Head>
      <main className="px-4">
        <div className="flex justify-center items-center mx-auto w-auto rounded-lg my-16 p-16">
          <div className="text-2xl font-medium">
            <h1 className="w-3/4 font-bold text-6xl mb-4 m-auto">
              Flora Occurences
            </h1>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
