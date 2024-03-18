import React from "react";
import Reveal from "@/components/reveal";

const AdviceCard = ({ image, title }) => {
  return (
    <div className={"col-span-4 mt-[30px] cursor-pointer "}>
      <Reveal>
        <div
          className={
            "w-[450px] h-[200px] flex justify-center hover:scale-105 scale-100 transition-all duration-400 items-center"
          }
          style={{ backgroundImage: `url(${image})` }}
        >
          <h3 className={"uppercase text-[#fff] text-2xl"}>{title}</h3>
        </div>
      </Reveal>
    </div>
  );
};

export default AdviceCard;
