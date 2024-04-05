import React from "react";

const CreditCards = () => {
  return (
    <div className=" bg-black h-full w-full relative border-gradient mt-[600px]">
      {/* text */}
      <div className="w-full flex flex-col items-center justify-center z-[3] absolute top-1/2 ">
        <div className="flex flex-col bg-transparent gap-5 z-[3] absolute left-[10%]">
          {/* heading */}
          <div className="font-bold w-full text-[90px] leading-[92px] font-denton text-left text-white">
            do more with
            <br />
            your credit cards
          </div>
          {/* subheading */}
          <div className="font-medium w-full text-[22px] leading-[39px] text-opacity-70 text-white text-left">
            manage your credit cards better and improve your credit score:
            <br />
            receive payment reminders, uncover hidden fees, get spending
            <br />
            insights, and discover ways to maximize card benefits.
          </div>
        </div>
      </div>
      <div className="h-[60vh]">
        <video
          src={require("../public/videos/credit-cards.mp4")}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
      </div>
    </div>
  );
};

export default CreditCards;
