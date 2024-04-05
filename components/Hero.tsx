import React from "react";

const Hero = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className="flex flex-col justify-center items-center h-screen text-white">
        {/* heading  */}
        <div className="text-[114px] leading-[100px] text-center font-denton font-bold">
          crafted for the
          <br />
          creditworthy
        </div>
        {/* subheading */}
        <div className="text-xl leading-9 font-medium mt-10 text-center tracking-wider">
          CRED is a members-only club that enables the
          <br />
          trustworthy to make financial progress
        </div>
      </div>
      <video
        src={require("../public/videos/hero-desktop.mp4")}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover absolute top-0 -z-10"
      />
    </div>
  );
};

export default Hero;
