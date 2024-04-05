import React from "react";

const paragraph =
  "The story of cred begins with trust. we believe individuals who've proven their trustwothiness deserve better: better experiences, better rewards, better rules. this is the status quo we're building. make it to the club, and experience the ascension yourself";

const NotEveryOne = () => {
  return (
    <div className="flex justify-center items-center w-screen h-auto px-[30px] bg-black text-white">
      <div className="w-[45%] flex-col flex gap-[70px] my-[200px]">
        {/* heading */}
        <div className="text-[27px] leading-9 font-bold text-left tracking-[10px]">
          NOT EVERYONE MAKES IT IN.
        </div>
        {/* text reveal */}
        <div>
          <p className="text-[70px] font-denton font-light leading-[100px] text-left">
            The story of cred begins with trust. we believe individuals who've proven their
            trustworthiness deserve better: better experiences, better rewards, better rules. this
            is the status quo we're building. make it to the club, and experience the ascension
            yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotEveryOne;
