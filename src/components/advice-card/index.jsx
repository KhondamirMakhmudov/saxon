import React from "react";
import Reveal from "@/components/reveal";
import Link from "next/link";

const AdviceCard = ({ image, title, url = "#" }) => {
  return (
    <div
      className={
        "xl:col-span-4 lg:col-span-6 col-span-12 mt-[30px] cursor-pointer "
      }
    >
      <Reveal>
        <Link href={url}>
          <div
            className={
              "lg:w-[450px] md:w-[400px] w-[350px]  h-[200px] flex justify-center hover:scale-105 scale-100 transition-transform duration-400 items-center"
            }
            style={{ backgroundImage: `url(${image})` }}
          >
            <h3
              className={"uppercase text-[#fff] lg:text-2xl md:text-xl text-lg"}
            >
              {title}
            </h3>
          </div>
        </Link>
      </Reveal>
    </div>
  );
};

export default AdviceCard;
