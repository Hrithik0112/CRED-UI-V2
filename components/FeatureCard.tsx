import React from "react";

const FeatureCard = () => {
  return (
    <div className="h-[75vh] pt-[60px] pr-[60px] pl-10 border  border-solid border-white border-opacity-30  flex justify-start items-start flex-col bg-[url(https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/scan-n-pay.png)] bg-no-repeat bg-cover bg-bottom">
      {/* image */}
      <img
        src="	https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/snp-logo-final.png"
        alt="logo"
        height={30}
      />
      {/* text */}
      <div className="w-full text-[40px] leading-[48px] tracking-[-0.075rem] font-bold text-left mt-[30px] text-white">
        scan & pay
        <br />
        any UPI QR
      </div>
      {/* text */}
      <div className="py-4 px-[22px] mt-4 flex justify-center items-center w-fit bg-black bg-opacity-30 border-solid border-black border-opacity-30">
        <div className="text-base font-semibold text-center tracking-[3px] text-white  ">
          KNOW MORE
        </div>
        <img src="/arrow.svg" className=" ml-[14px]" />
      </div>
    </div>
  );
};

export default FeatureCard;
