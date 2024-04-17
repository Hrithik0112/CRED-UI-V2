import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-screen h-[200px] text-center font-denton text-5xl font-bold justify-center items-center text-white">
      Made With ❤️ by &nbsp; <Link href="https://hrithik-portfolio-one.vercel.app/">Hrithik</Link>
      
    </div>
  );
};

export default Footer;
