import React from "react";
import Head from "next/head";
import Image from "next/future/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import finn1 from "../public/img/finn-1.png";
import { CheckSquare, Square } from "react-feather";

export default function Home() {
  return (
    <Layout>
      <h1 className="font-bold text-5xl mb-8">Hello! I'm Finn. I'm a..</h1>
      <div className="flex row-auto items-center mb-4">
        <CheckSquare />
        <h2 className="font-medium text-2xl ml-4"> Bachelor Electronics-IT</h2>
      </div>
      <div className="flex row-auto items-center mb-4">
        <CheckSquare />
        <h2 className="font-medium text-2xl ml-4">
          Bachelor Multimedia & Creative Technology
        </h2>
      </div>
      <div className="flex row-auto items-center mb-4">
        <CheckSquare />
        <h2 className="font-medium text-2xl ml-4">Analog Photographer</h2>
      </div>
      <div className="flex row-auto items-center mb-4">
        <Square />
        <h2 className="font-medium text-2xl ml-4">...</h2>
      </div>
      <Image
        className="absolute bottom-0 left-0 w-1/2"
        src={finn1}
        alt="a picture of me"
      />
    </Layout>
  );
}
