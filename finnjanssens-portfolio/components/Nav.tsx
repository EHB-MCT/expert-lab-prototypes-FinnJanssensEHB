import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <span className="self-center text-xl font-bold whitespace-nowrap border-b-4 border-yellow-500">
            Finn
          </span>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-semibold md:border-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
