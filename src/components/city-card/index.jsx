import React from "react";
import Image from "next/image";

const CityCards = ({ image, title }) => {
  return (
    <div
      className={
        "w-[450px] h-[402px] bg-white rounded-[6px] col-span-4 mt-[30px] shadow-none hover:shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-2 translate-y-0"
      }
    >
      <Image src={image} alt={"university"} width={450} height={402} />

      <h3
        className={
          "flex items-start  p-5  text-2xl text-[#007C4C] font-bold font-philosopher"
        }
      >
        {title}
      </h3>
    </div>
  );
};

export default CityCards;
