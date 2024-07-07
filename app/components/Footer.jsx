import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container flex justify-between p-12">
        <span className="cursor-pointer">
          <Link href="/">
            <Image
              src="/images/freelance-logo.svg"
              width={120}
              height={40}
              alt="Logo"
            />
          </Link>
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
