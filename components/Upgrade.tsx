import React from "react";
import FeatureCard from "./FeatureCard";

const Upgrade = () => {
  return (
    <div className="max-w-[100vw] h-fit flex flex-col justify-center pl-24 mt-[10%] relative bg-black">
      {/* heading */}
      <div className="flex justify-between mt-[150px] items-center h-auto">
        <div className="font-denton text-[90px] leading-[92px] w-full font-bold text-left text-white ">
          upgrade your life
          <br />
          bit by bit.
        </div>
      </div>
      {/* slider */}
      <div className="pt-[30px] mt-[50px] pb-[50px] ">
        <div className=" flex gap-5 flex-nowrap pr-4 overflow-x-auto ">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
