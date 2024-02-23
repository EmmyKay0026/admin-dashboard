import Link from "next/link";
import React from "react";
import { TbCircleLetterC } from "react-icons/tb";
import Social from "../../home/socials";

const Footer = () => {
  return (
    <footer className="mt-[40px]  ">
      <hr className="opacity-20 mb-[20px]" />
      <div className="flex justify-between items-center px-[10px] md:px-[20px]">
        <Link href="/">
          <h3 className="font-bold">Techko</h3>
        </Link>
        <span className="flex items-center gap-[5px] md:gap-[10px]">
          <Social className="socials" />
          {/* <TbCircleLetterC /> All rights reserved */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
