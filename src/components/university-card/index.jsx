import React from "react";
import Image from "next/image";

const UniversityCards = ({ image, title }) => {
  return (
    <div
      className={
        "w-[330px] h-[370px] bg-white rounded-[6px] shadow-none hover:shadow-xl cursor-pointer transition-all duration-500 hover:scale-105 scale-100"
      }
    >
      <Image src={image} alt={"university"} width={330} height={220} />

      <h3
        className={
          "flex items-center text-center p-5 justify-center text-2xl text-[#007C4C] font-bold font-philosopher"
        }
      >
        {title}
      </h3>
    </div>
  );
};

export default UniversityCards;
