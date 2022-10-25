import React, { useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";

export default function Nav() {
  const [navItems, setNavItems] = useState([
    "Home",
    "Projects",
    "Photography",
    "Contact",
  ]);

  const router = useRouter();
  console.log(router);

  //"border-l-2 border-black pl-2 mb-4 cursor-pointer"

  return (
    <>
      <nav className="col-span-4 mt-4">
        <div className="grid grid-cols-4 gap-x-5">
          {navItems.map((item, index) => {
            return (
              <Link
                href={`/${item == "Home" ? "" : item.toLowerCase()}`}
                key={index}
              >
                <h2 className={activeNavLink(item, router.asPath)}>{item}</h2>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

function activeNavLink(item: String, path: String) {
  if ((item == "Home" && path == "/") || path == "/" + item.toLowerCase()) {
    return "border-l-2 border-black pl-2 mb-4 cursor-pointer active";
  } else {
    return "border-l-2 border-black pl-2 mb-4 cursor-pointer";
  }
}
