import React from "react";
import NavLink from "./NavLink";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-slate-900 bg-opacity-95">
      <button
        className="absolute top-4 right-4 text-white"
        onClick={onClose}
      >
        <XMarkIcon className="h-8 w-8" />
      </button>
      <ul className="flex flex-col items-center space-y-8">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              href={link.path}
              title={link.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
