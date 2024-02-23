"use client";

import Link from "next/link";
import Footer from "./ui/dashboard/footer/footer";

const Homepage = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center md:h-[82vh]">
        <div className="bg-[#222] p-[30px]  w-[90%] md:w-[70%] md:w-[60%] mt-[40px] rounded-[20px] ">
          <div>
            <h1 className="text-center font-bold text-[27px] md:text-[27px] leading-[300%] font-['Open_Sans'] ">
              Techko Dashboard
            </h1>
            <p className="text-center text-[13px] md:text-[18px]">
              This is a dashboard build on Nextjs 14, Tailwind CSS and
              Next-Auth. The Techko dashboard shows my experience with the
              technologies stated and other such as pagination, adding, deleting
              and updating a database (MongoDB).
            </p>
            <p className="text-center text-[13px] md:text-[18px] mt-[20px]">
              With this appication you can view users transactions,
              create,delete and update users. As an addon there is a graphic
              chart that can be used to display data.
            </p>

            <div>
              <Link href="/dashboard" className="flex justify-center">
                <button className="bg-techko-main px-[50px] rounded-20px py-[10px] mt-[20px] ">
                  View dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
        <i className="mt-[20px] text-[13px] md:text-[16px]">
          This project is best viewed on a desktop screen.
        </i>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
