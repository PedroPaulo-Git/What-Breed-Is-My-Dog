import React from "react";
import Logo from "../../assets/What breed.png";
import Image from "next/image";
export const Header = () => {
  return (
    <header>
        <div className="flex justify-left gap-10 items-center">
      <Image src={Logo} alt="" className="w-32" />
      <a href="">Planos</a>
      <a href="">Portifolio</a>
      </div>
    </header>
  );
};
