import React from "react";
import Logo from "../../assets/What breed.png";
import Image from "next/image";
export const Header = () => {
  return (
    <header>
        <div className="flex justify-left lg:gap-10 gap-4 items-center -ml-5 lg:ml-0">
      <Image src={Logo} alt="" className="w-32" />
      <a href="">Plans</a>
      <a href="https://pedrodevofc.vercel.app/">My Portfolio</a>
      </div>
    </header>
  );
};
