import React from "react";
import { useState } from "react";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <div className="w-full h-full bg-zinc-800 ">
        <div
          className={`${
            sidebar ? "w-40" : "w-0"
          } h-[100vh] bg-[#8620D6] flex lg:hidden flex-col justify-center items-center duration-500 z-50  fixed top-0 right-0 text-zinc-100`}
        >
          <div
            onClick={() => {
              setSidebar((prev) => !prev);
            }}
            className="text-white border border-purple-400 fixed top-6 right-10 w-10 lg:hidden h-10 p-1 cursor-pointer hover:shadow-lg rounded-lg flex items-center justify-center"
          >
            <img src="./Images/icons8-menu-bar-48.png" alt="" />
          </div>

          <div
            className={`${
              sidebar ? "flex" : "hidden"
            } flex lg:hidden items-center flex-col duration-400 justify-center gap-8`}
          >
            <h1 className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500">
              Home
            </h1>
            <h1 className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500">
              About
            </h1>
            <h1 className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500">
              contact us
            </h1>
            <h1 className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500">
              Address
            </h1>
            <h1 className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500">
              Services
            </h1>
          </div>
        </div>
      </div>

      <nav className="nav-sm w-full h-28 px-[15px] flex justify-between items-center lg:hidden  fixed z-30 bg-[#232323] top-0 left-0">
        <div className="w-60 h-full flex items-center">
          <div className="w-20 h-20">
            <img
              className="rotate-30"
              src="./Images/icons8-photography-100.png"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center text-zinc-100 pt-2">
            <h1 className="text-[24px] font-serif leading-[24px]">
              Alexender Durham
            </h1>
            <h1 className="text-[6px] font-light tracking-[4px] py-2 text-zinc-400">
              PHOTOGRAPHY
            </h1>
          </div>
        </div>
      </nav>

      <nav className="nav-lg w-full h-24 hidden lg:flex justify-between items-center px-20 fixed z-50 bg-[#232323] top-0 left-0">
        <div className="w-60 h-full flex items-center">
          <div className="w-20 h-20">
            <img
              className="rotate-30"
              src="./Images/icons8-photography-100.png"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center text-zinc-100 pt-2">
            <h1 className="text-[24px] font-serif leading-[24px]">
              Alexender Durham
            </h1>
            <h1 className="text-[6px] font-light tracking-[4px] py-2 text-zinc-400">
              PHOTOGRAPHY
            </h1>
          </div>
        </div>

        <div className="text-zinc-100 font-serif flex gap-6 [#8620D6]">
          <h1 className="hover:border-b border-[#8620D6] text-[#8620D6] hover:tracking-[2px] duration-500">
            Home
          </h1>
          <h1 className="hover:border-b border-[#8620D6] hover:text-[#8620D6] duration-300">
            About
          </h1>
          <h1 className="hover:border-b border-[#8620D6] hover:text-[#8620D6] duration-300">
            Portfolio
          </h1>
          <h1 className="hover:border-b border-[#8620D6] hover:text-[#8620D6] duration-300">
            Pages
          </h1>
          <h1 className="hover:border-b border-[#8620D6] hover:text-[#8620D6] duration-300">
            Contact Us
          </h1>
        </div>

        <button className="text-zinc-100 border-2 border-[#8620D6] py-3 px-8">
          Book Now
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
