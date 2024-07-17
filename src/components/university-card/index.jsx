import React from "react";
import Image from "next/image";

const UniversityCards = ({ image, title, classname }) => {
  return (
    <div
      className={` ${classname} w-[330px] h-[370px] bg-white rounded-[6px] shadow-lg hover:shadow-xl cursor-pointer transition-all duration-500 hover:scale-105 scale-100 `}
    >
      <Image src={image} alt={"university"} width={330} height={220} />

      <h3
        className={
          "  text-center px-5 pt-[60px] pb-[30px]  text-2xl text-[#007C4C] font-bold font-philosopher"
        }
      >
        {title}
      </h3>
    </div>
  );
};

export default UniversityCards;
