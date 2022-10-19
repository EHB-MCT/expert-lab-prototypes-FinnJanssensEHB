import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="col-span-4 mt-4">
        <div className="grid grid-cols-4 gap-x-5">
          <h3 className="border-l-2 border-black pl-2 mb-4 active">Home</h3>
          <h3 className="border-l-2 border-black pl-2 mb-4">Projects</h3>
          <h3 className="border-l-2 border-black pl-2 mb-4">Photography</h3>
          <h3 className="border-l-2 border-black pl-2 mb-4">Contact</h3>
        </div>
      </nav>
    </>
  );
}
