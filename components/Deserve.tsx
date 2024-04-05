import React from "react";

const Deserve = () => {
  return (
    <div className="w-full max-h-screen h-screen object-cover bg-black  text-white ">
      <video
        src={require("../public/videos/phone-ticker.mp4")}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover "
      />
      {/* text */}
      <div className="flex flex-col items-center justify-center pt-[50px] bg-black ">
        <div className="w-full gap-10 flex flex-col justify-center items-center bg-transparent">
          <div className="text-[113px] leading-[101px] text-center font-denton font-bold">
            all that you deserve.
            <br />
            and some more.
          </div>
          {/* subheading */}
          <div className="text-[22px] text-opacity-70 leading-10 font-medium text-center tracking-[1.1px]">
            if you're a CRED member, you're already a step ahead. every
            <br />
            experience you unlock takes you higher up the pedestal.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deserve;
