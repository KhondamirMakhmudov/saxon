import React from "react";
import Image from "next/image";

const Index = () => {
  return (
    <div>
      <form className={" flex items-center bg-white rounded-[6px]"}>
        <input
          type={"text"}
          className={
            " pl-2 rounded-[6px] md:text-sm text-xs lg:w-[270px] md:w-[220px]"
          }
        />
        <button className={" "}>
          <Image
            src={"/icons/search.svg"}
            alt={"search"}
            width={20}
            height={20}
            className={"mr-1"}
          />
        </button>
      </form>
    </div>
  );
};

export default Index;
