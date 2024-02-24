// "use client";
import React from "react";
import {
  MdDashboard,
  MdAnalytics,
  MdPeople,
  MdSettings,
  MdHelpCenter,
} from "react-icons/md";
import { CiUser, CiMoneyCheck1 } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { LiaProductHunt } from "react-icons/lia";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiLogoutBoxFill } from "react-icons/ri";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import emmanuel from "../../../../public/emmanuel.jpg";
import { signOut } from "@/app/auth";

const menuList = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaUser />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <LiaProductHunt />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <AiOutlineTransaction />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <CiMoneyCheck1 />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Users",
    list: [
      {
        title: "Setting",
        path: "/dashboard/settings",
        icon: <MdSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  return (
    <>
      <div className="position-sticky  top-[40px] ">
        <div className="flex flex-col items-start lg:flex-row lg:items-center gap-[20px] mb-[20px]">
          <Image
            className="rounded-[50%]"
            src={emmanuel}
            alt=""
            width="70"
            height="70"
          />
          <div className="flex flex-col ">
            <span className="font-bold text-[15px]">Emmanuel Kadiri</span>
            <span className="text-[12px] text-white ">Administrator</span>
          </div>
        </div>
        <ul>
          {menuList.map((cater) => {
            return (
              <li
                className="text-white font-bold my-[13px] mx-0 text-[14px]"
                key={cater.title}
              >
                <span>{cater.title}</span>
                {cater.list.map((item) => {
                  return <MenuLink item={item} key={item.title} />;
                })}
              </li>
            );
          })}
        </ul>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex items-center gap-[9px] p-[10px] text-[white] text-[13px] font-normal rounded-[20px] cursor-pointer">
            <RiLogoutBoxFill /> Logout
          </button>
        </form>
      </div>
    </>
  );
};

export default Sidebar;
