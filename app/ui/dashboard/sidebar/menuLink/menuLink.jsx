"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      className={
        pathName === item.path
          ? "flex items-center gap-[9px] p-[10px] text-[white] text-[13px]  cursor-pointer font-normal rounded-[20px] bg-techko-main"
          : "flex items-center gap-[10px] p-[9px]  cursor-pointer text-[white] text-[13px] font-normal rounded-[20px] my-[9px] hover:bg-techko-main"
      }
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
