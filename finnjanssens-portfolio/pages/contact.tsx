import React from "react";
import Layout from "../components/Layout";
import { Mail, Instagram, Linkedin } from "react-feather";
import Link from "next/link";
import { fetcher } from "../services/api.service";

export default function Contact({ contactInfo }) {
  return (
    <Layout>
      <h1 className="font-bold text-5xl mb-8">Contact me:</h1>
      <div className="flex row-auto items-center mb-4">
        <Mail />
        <h2 className="font-medium text-2xl ml-4">
          <a href={"mailto:" + contactInfo.Email}>{contactInfo.Email}</a>
        </h2>
      </div>
      <div className="flex row-auto items-center mb-4">
        <Linkedin />
        <h2 className="font-medium text-2xl ml-4">
          <a href={contactInfo.LinkedinUrl}>{contactInfo.LinkedinName}</a>
        </h2>
      </div>
      <div className="flex row-auto items-center mb-4">
        <Instagram />
        <h2 className="font-medium text-2xl ml-4">
          <a href={contactInfo.InstagramUrl}>{contactInfo.InstagramHandle}</a>
        </h2>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const contactInfoResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-info`
  );
  return {
    props: {
      contactInfo: contactInfoResponse.data.attributes,
    },
  };
}
