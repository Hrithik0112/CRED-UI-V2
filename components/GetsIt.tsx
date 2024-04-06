import React from "react";

const GetsIt = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-[url(https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/cta-fold-final.png)] bg-cover bg-left bg-no-repeat">
      <div className="flex justify-center items-center gap-[60px] w-full">
        <div className="w-full h-[200px]"></div>
        <div className=" w-full flex flex-col gap-20 justify-between">
          <div className="font-denton text-[112px] font-bold leading-[108px] tracking-[-0.5px] text-left text-white">
            not everyone
            <br />
            gets it.
          </div>
          <div className="text-[22px] font-medium leading-[39px] tracking-[0.5px] text-left text-white opacity-70 max-w-[80%]">
            like all good things in life, earning a CRED membership is not easy; but the possibility
            of unlocking a greater future makes the effort worthwhile.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetsIt;
