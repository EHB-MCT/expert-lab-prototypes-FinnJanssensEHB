import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetcher } from "../services/api.service";

export default function Sidebar() {
  const [listItems, setListItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setListItems([
          "About me",
          "Education",
          "Experience",
          "Skills",
          "Languages",
          "Miscellaneous",
        ]);
        break;
      case "/projects":
        setListItems(["Project"]);
        break;
      case "/photography":
        setListItems(["Photography"]);
        break;
      case "/contact":
        setListItems(["Contact"]);
        break;

      default:
        break;
    }
  }, [router]);

  return (
    <div className="row-span-2 m-4 px-4 border-l-4 border-black inline-block">
      <h1 className="mb-8">Finn</h1>
      {listItems.map((item, index) => {
        return (
          <p key={index} className="text-lg font-light mb-0">
            {item}
          </p>
        );
      })}
    </div>
  );
}
