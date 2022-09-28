import React from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Project({ project }) {
  console.log("media", project.attributes.Media.data[0].attributes);
  const media = project.attributes.Media.data;
  const pictureExtensions = [".png", ".jpg", ".jpeg"];
  const videoExtensions = [".mov", ".mp4"];
  return (
    <div className="bg-black p-8 rounded-lg text-white w-full mb-10">
      <h1 className="font-semibold mb-4 text-2xl">
        {project.attributes.Title}
      </h1>
      <p className="mb-4">{project.attributes.Description}</p>
      <Carousel dynamicHeight>
        {media.map((item) => {
          console.log("http://localhost:1337" + item.attributes.url);

          if (pictureExtensions.includes(item.attributes.ext)) {
            return (
              <img
                style={{ objectFit: "cover" }}
                src={"http://localhost:1337" + item.attributes.url}
              ></img>
            );
          } else if (videoExtensions.includes(item.attributes.ext)) {
            return (
              <video
                controls
                src={"http://localhost:1337" + item.attributes.url}
                height="auto"
              ></video>
            );
          } else {
            return <></>;
          }
        })}
      </Carousel>
    </div>
  );
}
