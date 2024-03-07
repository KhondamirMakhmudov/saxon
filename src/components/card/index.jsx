import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, desc }) => {
  return (
    <div
      className={
        "w-[450px] min-h-[420px] text-center flex flex-col items-center   rounded-[6px] bg-[#fff] py-6 px-[16px]"
      }
    >
      <Image src={image} alt={"education"} width={96} height={96} />

      <h2
        className={"text-2xl font-bold font-philosopher  uppercase my-[10px]"}
      >
        {title}
      </h2>

      <p className={"text-base mb-[30px]"}>{desc}</p>

      <Link href={"#"} className={"uppercase text-[#007C4C] font-bold"}>
        batafsil
      </Link>
    </div>
  );
};

export default Card;
