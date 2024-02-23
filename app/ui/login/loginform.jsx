"use client";
import React from "react";


const LoginForm = () => {
 
  return (
    <form
      className=" text-black w-[500px] h-[500px] p-[50px] flex flex-col justify-center items-center bg-techko-second rounded-[10px] gap-[30px]"
      action={handleLogin}
    >
      <h1 className="font-bold text-white text-[24px]">Login</h1>
      <input
        className="p-[20px] w-full outline-0 border-2px border-solid border-techko-main rounded-[5px] "
        type="text"
        placeholder="Username"
        name="username"
      />
      <input
        className="p-[20px] w-full outline-0 border-2px border-solid  border-techko-main rounded-[5px] "
        type="Password"
        placeholder="Password"
        name="password"
      />
      <button className="w-full text-white p-[15px] border-0 rounded-[5px] bg-techko-main cursor-pointer">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
