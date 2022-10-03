import React from "react";
import Layout from "../components/Layout";
import { fetcher } from "../services/api.service";

export default function About({ educations }) {
  return (
    <Layout>
      <h1 className="font-bold text-5xl mb-8">About Me</h1>
      <h2 className="font-medium text-2xl ml-4">Education</h2>
      {educations.data.map((education) => {
        console.log(education);
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const educationResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/educations`
  );
  return {
    props: {
      educations: educationResponse,
    },
  };
}
