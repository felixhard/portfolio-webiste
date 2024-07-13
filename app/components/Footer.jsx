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
              src="/images/logo-test.svg"
              width={48}
              height={48}
              alt="Logo"
              className="cursor-pointer rounded-lg"
            />
          </Link>
        </span>
        <p className="text-slate-600 my-auto">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
