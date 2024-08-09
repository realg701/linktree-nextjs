import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="fixed bottom-5 left-1/2 -translate-x-1/2"
    >
      <Link href={"/"} target="_blank" className="flex flex-row items-center">
        <Image
          src={"/images/favicon.ico"}
          alt="Logo"
          width={32}
          height={32}
          className="hover:-rotate-45 transition-all duration-300"
        />
        <h5 className="ml-2 font-bold text-indigo-400 hover:text-indigo-300 transition-all duration-300">
          Try LinkTree
        </h5>
      </Link>
    </footer>
  );
};

export default Footer;
