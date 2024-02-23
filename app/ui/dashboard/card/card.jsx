"use client";

import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ active }) => {
  return (
    <div className="flex gap-[10px] bg-[#222] rounded-[20px] p-[20px] cursor-pointer hover:bg-[black] ">
      <MdSupervisedUserCircle />
      <div className="flex flex-col gap-[10px] ">
        <span>Total users</span>
        <span className="font-bold text-[24px]">10.237</span>
        <span className="text-[16px]">
          <span className={active ? "text-[green]" : "text-[red]"}>12%</span>{" "}
          more than the previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
