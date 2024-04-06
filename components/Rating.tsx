import React from "react";

const Rating = () => {
  return (
    <div className="w-screen h-auto mt-[50px] bg-black flex items-start">
      <div className="w-full flex flex-1  items-center justify-around py-[100px] rating-bg border-gradient ">
        {/* text */}
        <div className=" flex flex-col">
          <div className="mt-0 uppercase font-semibold text-base leading-7 tracking-[4.6px] text-white  text-opacity-90 text-left ">
            trusted by 15M members
          </div>
          <div className="mt-[10px] font-denton font-bold text-[96px] leading-[95px] text-white ">
            the proof
            <br />
            writes itself
          </div>
        </div>
        {/* rating */}
        <div className="font-semibold text-[64px] leading-[82px] text-white flex gap-10 text-center">
          {/* apple rating */}
          <div className="text-left flex flex-col justify-around p-[10px]">
            <img
              src="	https://web-images.credcdn.in/v2/_next/assets/images/landing/rating-stars.png"
              alt="rating"
              className="w-[145px] "
            />

            <span className="text-[95px] font-bold leading-[88px] tracking-[-3.1px] pt-[30px] text-center">
              4.8
              <span className="text-[45px] font-bold leading-[88px] tracking-[-1px] opacity-60">
                /5
              </span>
            </span>
            <div className="text-[20px] font-semibold leading-[22px] tracking-[6px] text-center opacity-50">
              APP STORE
            </div>
          </div>
          {/* playstore ratiing */}
          <div className="text-left flex flex-col justify-around p-[10px]">
            <img
              src="	https://web-images.credcdn.in/v2/_next/assets/images/landing/rating-stars.png"
              alt="rating"
              className="w-[145px] "
            />

            <span className="text-[95px] font-bold leading-[88px] tracking-[-3.1px] pt-[30px] text-center">
              4.8
              <span className="text-[45px] font-bold leading-[88px] tracking-[-1px] opacity-60">
                /5
              </span>
            </span>
            <div className="text-[20px] font-semibold leading-[22px] tracking-[6px] text-center opacity-50">
              PLAY STORE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
