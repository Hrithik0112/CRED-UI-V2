import React from "react";

const Rewards = () => {
  return (
    <div className="w-screen mt-[250px] relative border-gradient ">
      {/* text */}
      <div className="absolute top-0 z-[3] w-full h-screen flex flex-col justify-center items-center">
        <div className="text-[114px] leading-[100px] text-center font-denton font-bold flex flex-col items-end justify-center px-[100px] text-white">
          feel the odds fall
          <br />
          in your favor
        </div>
        {/* subheading */}
        <div className="text-xl w-full max-w-[50%] leading-9 font-medium mt-16 text-center tracking-wider text-white text-opacity-90">
          unlock cashback, exclusive rewards from select brands, and special access to curated
          products and experiences.
        </div>
      </div>
      {/* video */}
      <div className="min-h-screen relative z-[2] ">
        <video
          src={require("../public/videos/rewards.mp4")}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover absolute top-0 z-0"
        />
      </div>
    </div>
  );
};

export default Rewards;
