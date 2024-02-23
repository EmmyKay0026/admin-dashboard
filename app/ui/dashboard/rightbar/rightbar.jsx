import React from "react";
import Image from "next/image";
import imgBg from "../../../../public/download.jpeg";
import imgBg1 from "../../../../public/download1.jpeg";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div>
      <div className="relative py-[20px] bg-[#222] rounded-[10px] mb-[20px] px-[10px]">
        <div className="absolute right-0 bottom-0 h-[50%] w-[50%]">
          <Image src={imgBg} className="object-cover opacity-20" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="text-[14px] font-bold">🔥 Available now</span>
          <h3 className="font-bold text-[13px]">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-[14px]">Take 4 minutes to learn</span>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, co nse ctetur adipiscing elit. Pra esent
            gravida sodales maximus.{" "}
          </p>
          <button className="flex items-center gap-2 bg-techko-main rounded-[5px] cursor-pointer border-2 border-techko-main  w-max p-[10px] pr-[15px] text-[13px] hover:bg-transparent hover:border-white">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className="relative py-[20px] bg-[#222] rounded-[10px] mb-[20px] px-[10px]">
        <div className="absolute right-0 bottom-0 h-[50%] w-[50%] ">
          <Image src={imgBg1} className="object-cover opacity-20" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="text-[14px] font-bold">🚀 Coming Soon</span>
          <h3 className="font-bold text-[13px]">
            New server actions are available, partial pre-rendering is coming
            soon{" "}
          </h3>
          <span className="text-[14px]">Take 4 minutes to learn</span>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, co nse ctetur adipiscing elit. Pra esent
            gravida sodales maximus.{" "}
          </p>
          <button className="flex items-center gap-2 bg-techko-main rounded-[5px] cursor-pointer border-2 border-techko-main  w-max p-[10px] pr-[15px] text-[13px] hover:bg-transparent hover:border-white ">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
