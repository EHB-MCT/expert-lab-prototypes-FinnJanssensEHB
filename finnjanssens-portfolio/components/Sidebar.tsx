import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetcher } from "../services/api.service";

export default function Sidebar() {
  const [listItems, setListItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/sidebar-items-lists?filters[path][$eq]=${router.asPath}`
    ).then((res) => setListItems(res.data[0].attributes.items.items));
  }, []);

  return (
    <div className="row-span-2 m-4 px-4 border-l-4 border-black inline-block">
      <h1 className="mb-8">Finn</h1>
      {listItems.map((item, index) => {
        return (
          <p key={index} className="text-2xl font-light mb-0">
            {item}
          </p>
        );
      })}
    </div>
  );
}
