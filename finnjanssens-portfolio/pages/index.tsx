/* eslint-disable react/no-unescaped-entities */
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente
        magni laboriosam possimus cupiditate iste. Neque quisquam numquam, est
        quasi maxime quidem iste officiis quo iure iusto id! Officia, labore.
      </p>
    </Layout>
  );
}
