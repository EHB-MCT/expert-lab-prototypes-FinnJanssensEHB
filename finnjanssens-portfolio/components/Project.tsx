import React from "react";
import Link from "next/link";

export default function Project({ project }) {
  return (
    <div>
      <h1>{project.attributes.Title}</h1>
      <p>{project.attributes.Description}</p>
    </div>
  );
}
