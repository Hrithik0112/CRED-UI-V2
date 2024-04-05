import React from "react";
import Paragraph from "./Paragraph";

const paragraph =
  "the story of CRED begins with trust. we believe individuals who've proven their trustworthiness deserve better: better experiences, better rewards, better rules. this is the status quo we're building. make it to the club, and experience the ascension yourself.";

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
          <Paragraph value={paragraph} />
        </div>
      </div>
    </div>
  );
};

export default NotEveryOne;
