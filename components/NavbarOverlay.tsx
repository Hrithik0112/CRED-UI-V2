import Link from "next/link";
import React from "react";

const NavbarOverlay = () => {
  return (
    <div>
      <div className="fixed z-10 inset-0 py-[50px] px-[100px] bg-black overflow-y-scroll w-screen h-screen">
        {/* full navscreen */}
        <div className="pt-[200px] flex justify-start items-start w-full">
          {/* left side  */}
          <div className="flex flex-col justify-center items-center">
            <div className="relative overflow-hidden pt-8 pb-8 border-b border-white border-opacity-20 w-full hover:after:opacity-60 after:opacity-0 opacity-60 hover:opacity-100 after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/5 after:h-full after:[transition:opacity_0.5s_ease_0s] after:bg-[radial-gradient(506.71%_128.77%_at_24.44%_36.7%,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.2)_97.72%)] after:filter after:blur-[48.78px]">
              <div className="w-full  text-2xl not-italic font-medium leading-7 tracking-[6px] uppercase text-left pl-0 pr-[150px] py-0 text-white">
                What's New
              </div>
            </div>
            <div className="relative overflow-hidden pt-8 pb-8 border-b border-white border-opacity-20 w-full hover:after:opacity-60 after:opacity-0 opacity-60 hover:opacity-100 after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/5 after:h-full after:[transition:opacity_0.5s_ease_0s] after:bg-[radial-gradient(506.71%_128.77%_at_24.44%_36.7%,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.2)_97.72%)] after:filter after:blur-[48.78px] ">
              <div className="w-full  text-2xl not-italic font-medium leading-7 tracking-[6px] uppercase text-left pl-0 pr-[150px] py-0 text-white">
                PAYMENTS
              </div>
            </div>
            <div className="relative overflow-hidden pt-8 pb-8 border-b border-white border-opacity-20 w-full hover:after:opacity-60 after:opacity-0 opacity-60 hover:opacity-100 after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/5 after:h-full after:[transition:opacity_0.5s_ease_0s] after:bg-[radial-gradient(506.71%_128.77%_at_24.44%_36.7%,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.2)_97.72%)] after:filter after:blur-[48.78px]">
              <div className="w-full  text-2xl not-italic font-medium leading-7 tracking-[6px] uppercase text-left pl-0 pr-[150px] py-0 text-white">
                UPGRADS
              </div>
            </div>
            <div className="relative overflow-hidden pt-8 pb-8 border-b border-white border-opacity-20 w-full hover:after:opacity-60 after:opacity-0 opacity-60 hover:opacity-100 after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/5 after:h-full after:[transition:opacity_0.5s_ease_0s] after:bg-[radial-gradient(506.71%_128.77%_at_24.44%_36.7%,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.2)_97.72%)] after:filter after:blur-[48.78px]">
              <div className="w-full  text-2xl not-italic font-medium leading-7 tracking-[6px] uppercase text-left pl-0 pr-[150px] py-0 text-white">
                company
              </div>
            </div>
            <div className="relative overflow-hidden pt-8 pb-8  w-full hover:after:opacity-60 after:opacity-0 opacity-60 hover:opacity-100 after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/5 after:h-full after:[transition:opacity_0.5s_ease_0s] after:bg-[radial-gradient(506.71%_128.77%_at_24.44%_36.7%,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.2)_97.72%)] after:filter after:blur-[48.78px]">
              <div className="w-full  text-2xl not-italic font-medium leading-7 tracking-[6px] uppercase text-left pl-0 pr-[150px] py-0 text-white">
                insider perks
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="ml-[150px]">
            <div className="flex flex-col justify-center items-start">
              <Link href="#" className="mt-0">
                <div className="text-white text-opacity-40  text-[28.08px] not-italic font-medium leading-[37.44px] tracking-[6px] uppercase cursor-pointer animate-[2s_ease_0s_1_normal_none_running_fadein]">
                  Upcoming UPI
                </div>
              </Link>
            </div>
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
