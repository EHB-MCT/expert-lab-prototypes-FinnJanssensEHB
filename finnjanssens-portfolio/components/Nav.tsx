import React, { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [navItems, setNavItems] = useState([
    "Home",
    "Projects",
    "Photography",
    "Contact",
  ]);

  function handleNav(index: number) {
    let a = navItems.slice(index);
    let b = navItems.slice(0, index);
    console.log(a.concat(b));
    setNavItems(a.concat(b));
  }
  return (
    <>
      <nav className="col-span-4 mt-4">
        <div className="grid grid-cols-4 gap-x-5">
          {navItems.map((item, index) => {
            let style = "";
            index == 0
              ? (style = "border-l-2 border-black pl-2 mb-4 active")
              : (style = "border-l-2 border-black pl-2 mb-4");
            return (
              <h3
                key={index}
                className={style}
                onClick={() => {
                  handleNav(index);
                }}
              >
                {item}
              </h3>
            );
          })}
          {/* <h3 className="border-l-2 border-black pl-2 mb-4 active">Home</h3>
          <h3 className="border-l-2 border-black pl-2 mb-4">Projects</h3>
          <h3 className="border-l-2 border-black pl-2 mb-4">Photography</h3>
          <h3 className="border-l-2 border-black pl-2 mb-4">Contact</h3> */}
        </div>
      </nav>
    </>
  );
}
