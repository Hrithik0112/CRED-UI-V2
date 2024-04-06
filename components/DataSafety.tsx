"use client";

import useMousePosition from "@/lib/useMousePosition";
import React from "react";

const DataSafety = () => {
  const { x, y } = useMousePosition();
  //   console.log([x, y]);
  return (
    <div className="w-screen h-screen flex bg-black justify-center">
      <div className="flex flex-col justify-center items-center w-[80%] m-auto ">
        <img
          src="https://web-images.credcdn.in/v2/_next/assets/images/landing/datasafe.png"
          alt="logo"
          className="w-[100px] h-auto"
        />
        <div className="mt-[60px] font-bold text-[27px] leading-9 uppercase text-white">
          your data isn't our business. keeping it safe is.
        </div>
        {/* spot light effect */}
        <div
          className="text-[64px] font-semibold leading-[82px] text-center mt-[60px] text-white text-opacity-15 spot-light bg-clip-text backdrop-blur-md bg-no-repeat [background-size:450px_450px] cursor-default "
          style={{
            backgroundPositionX: x - 450,
            backgroundPositionY: y - 500,
          }}
        >
          all your personal data and
          <br />
          transactions are encrypted and
          <br />
          secured. there's no room for mistakes
          <br />
          because we didn't leave any.
        </div>
      </div>
    </div>
  );
};

export default DataSafety;
