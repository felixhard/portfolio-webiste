"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="absolute top-0 right-0 left-0 z-10 bg-slate-900 bg-opacity-20">
      <div className="flex flex-wrap items-center justify-between mx-auto mt-4 px-12 py-2">
        <Link href="/">
          <Image
            src="/images/logo-test.svg"
            width={48}
            height={48}
            alt="Logo"
            className="cursor-pointer rounded-lg"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        </div>
        <div
          className="menu hidden md:block md:w-auto"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          onClose={() => setNavbarOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
