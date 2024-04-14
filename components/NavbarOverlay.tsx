"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Company, InsiderPerks, Payments, Upgrades, WhatsNew } from "./NavOptions";

const NavbarOverlay = () => {
  const [isHovering, setIsHovering] = useState<number>(1);
  return (
    <div>
      <div className="fixed z-10 inset-0 py-[50px] px-[100px] bg-black overflow-y-scroll w-screen h-screen">
        {/* full navscreen */}
        <div className="pt-[200px] flex justify-start items-start w-full">
          {/* left side  */}
          <div className="flex flex-col justify-center items-center">
            <div className="relative overflow-hidden pt-8 pb-8 border-b border-white border-opacity-20 w-full hover:after:opacity-60 after:opacity-0 opacity-60 hover:opacity-100 after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/5 after:h-full after:duration-500 after:bg-[radial-gradient(506.71%_128.77%_at_24.44%_36.7%,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.2)_97.72%)] after:filter after:blur-[48.78px]" onMouseEnter={()=> setIsHovering(1)}>
              <div className="w-full text-nowrap text-2xl not-italic font-medium leading-7 tracking-[6px] uppercase text-left pl-0 pr-[150px] py-0 text-white">
                What's New
              </div>
            </div>
            <div className="relative overflow-hidden pt-8 pb-8 border-b border-white border-opacity-20 w-full hover:after:opacity-60 after:opacity-0 opacity-60 hover:opacity-100 after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/5 after:h-full after:duration-500 after:bg-[radial-gradient(506.71%_128.77%_at_24.44%_36.7%,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.2)_97.72%)] after:filter after:blur-[48.78px] " onMouseEnter={()=> setIsHovering(2)}>
              <div className="w-full  text-2xl not-italic font-medium leading-7 tracking-[6px] uppercase text-left pl-0 pr-[150px] py-0 text-white">
                PAYMENTS
              </div>
            </div>
            <div className="relative overflow-hidden pt-8 pb-8 border-b border-white border-opacity-20 w-full hover:after:opacity-60 after:opacity-0 opacity-60 hover:opacity-100 after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/5 after:h-full after:duration-500 after:bg-[radial-gradient(506.71%_128.77%_at_24.44%_36.7%,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.2)_97.72%)] after:filter after:blur-[48.78px]" onMouseEnter={()=> setIsHovering(3)}>
              <div className="w-full  text-2xl not-italic font-medium leading-7 tracking-[6px] uppercase text-left pl-0 pr-[150px] py-0 text-white">
                UPGRADS
              </div>
            </div>
            <div className="relative overflow-hidden pt-8 pb-8 border-b border-white border-opacity-20 w-full hover:after:opacity-60 after:opacity-0 opacity-60 hover:opacity-100 after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/5 after:h-full after:duration-500 after:bg-[radial-gradient(506.71%_128.77%_at_24.44%_36.7%,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.2)_97.72%)] after:filter after:blur-[48.78px]" onMouseEnter={()=> setIsHovering(4)}>
              <div className="w-full  text-2xl not-italic font-medium leading-7 tracking-[6px] uppercase text-left pl-0 pr-[150px] py-0 text-white">
                company
              </div>
            </div>
            <div className="relative overflow-hidden pt-8 pb-8  w-full hover:after:opacity-60 after:opacity-0 opacity-60 hover:opacity-100 after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/5 after:h-full after:duration-500 after:bg-[radial-gradient(506.71%_128.77%_at_24.44%_36.7%,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.2)_97.72%)] after:filter after:blur-[48.78px]" onMouseEnter={()=> setIsHovering(5)}>
              <div className="w-full text-nowrap  text-2xl not-italic font-medium leading-7 tracking-[6px] uppercase text-left pl-0 pr-[150px] py-0 text-white">
                insider perks
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="ml-[150px]">
            {isHovering === 1 ? (
              <WhatsNew/>
            ) : isHovering === 2 ? (
              <Payments/>
            ) : isHovering === 3 ? (
              <Upgrades/>
            ) : isHovering === 4 ? (
              <Company/>
            ) : isHovering === 5 ? (
              <InsiderPerks/>
            ) : null}
            {/* <InsiderPerks/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarOverlay;

//{/* normal nav */}
// <div className="flex justify-between items-center py-[70px] px-[130px] w-full bg-transparent absolute top-0 z-10 ">
//   <img src="/Logo.svg" alt="logo" width={74} height={88} />
//   <div className="flex justify-center items-center border-white border border-opacity-20 cursor-pointer">
//     <div className=" flex justify-center items-center p-[10px] w-20 h-20 border-l-2 border-white border-opacity-20 ">
//       <a href="#" className="flex flex-col justify-between w-[22px] h-[22px] ">
//         <span className="h-[2px]  bg-white opacity-60 [transition:all_600ms_ease-in-out_0s] rotate-45 origin-[left_top] w-7"></span>
//         <span className="h-[2px]  bg-white opacity-60 [transition:all_600ms_ease-in-out_0s] origin-[center_center] w-0"></span>
//         <span className="h-[2px] bg-white opacity-60 [transition:all_600ms_ease-in-out_0s] -rotate-45 origin-[left_bottom] w-7"></span>
//       </a>
//     </div>
//   </div>
// </div>
