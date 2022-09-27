import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="font-bold text-5xl">Howdy! I'm Finn</h1>
    </Layout>
  );
}
