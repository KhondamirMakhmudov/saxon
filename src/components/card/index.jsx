import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, desc, url = "#" }) => {
  return (
    <div
      className={
        "xl:w-[450px] lg:w-[400px] w-[350px]  lg:min-h-[420px] md:min-h-[350px] min-h-[330px] text-center flex flex-col items-center   rounded-[6px] bg-[#fff] lg:py-6 md:py-8 py-10 px-[16px]"
      }
    >
      <img
        className={
          "lg:w-[96px] lg:h-[96px] md:w-[80px] md:h-[80px] w-[70px] h-[70px]"
        }
        src={image}
        alt={"education"}
        width={96}
        height={96}
      />

      <h2
        className={
          "lg:text-2xl md:text-xl text-lg font-bold font-philosopher  uppercase my-[10px]"
        }
      >
        {title}
      </h2>

      <p className={"lg:text-base md:text-sm text-xs lg:mb-[30px] mb-[20px]"}>
        {desc}
      </p>

      <Link
        href={url}
        className={
          "uppercase text-[#007C4C] lg:text-base md:text-sm text-xs font-bold"
        }
      >
        batafsil
      </Link>
    </div>
  );
};

export default Card;
