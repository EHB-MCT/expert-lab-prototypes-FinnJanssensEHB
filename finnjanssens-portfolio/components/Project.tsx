import React from "react";

export default function Project({ project }) {
  return (
    <div className="pl-2 col-span-2">
      <h2 className="">{project.attributes.Title}</h2>
      <p className="mb-4">{project.attributes.Description}</p>
    </div>
  );
}
