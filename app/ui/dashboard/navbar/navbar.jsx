"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import { IoChatboxEllipses, IoNotifications } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center py-[10px] px-[20px] rounded-[20px] bg-techko-second ">
      <div className="font-bold ">
        {pathName.split("/").pop().toUpperCase()}
      </div>
      <div className="flex items-center gap-[10px] ">
        <div className="flex items-center gap-[20px] rounded-[20px] py-[7px] px-[10px] bg-white text-black  ">
          <BsSearch />
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent border-0 outline-0 rounded-[10px]"
            name=""
            id=""
          />
        </div>
        <div className="flex items-center gap-[20px]">
          <IoChatboxEllipses className="cursor-pointer" size={20} />
          <IoNotifications className="cursor-pointer" size={20} />
          <FaGlobeAmericas className="cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
