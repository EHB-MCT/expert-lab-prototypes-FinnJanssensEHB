import React from "react";
import Layout from "../components/Layout";
import { fetcher } from "../services/api.service";
import Project from "../components/Project";

export default function Projects({ projects }) {
  console.log(projects.data);

  return (
    <Layout>
      {projects &&
        projects.data.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const projectsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?populate=*`
  );
  return {
    props: {
      projects: projectsResponse,
    },
  };
}
