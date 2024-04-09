import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-[70px] px-[130px] w-full bg-transparent absolute top-0 z-10 ">
        <img src="/Logo.svg" alt="logo" width={74} height={88} />
        <div className="flex justify-center items-center border-white border border-opacity-20 cursor-pointer">
          <div className="flex flex-col justify-center items-center h-20 py-6 px-[30px] text-white ">
            <p className="text-xs tracking-widest">UPGRADE TO</p>
            <p className="text-2xl font-bold">CRED UPI</p>
          </div>
          <div className=" flex justify-center items-center p-[10px] w-20 h-20 border-l-2 border-white border-opacity-20">
            <a href="#" className="flex flex-col justify-between w-[22px] h-[22px] ">
              <span className="h-[2px] w-full bg-white opacity-60"></span>
              <span className="h-[2px] w-full bg-white opacity-60"></span>
              <span className="h-[2px] w-full bg-white opacity-60"></span>
            </a>
          </div>
        </div>
      </div>
      {/* Navsection overlay */}
    </>
  );
};

export default Navbar;
