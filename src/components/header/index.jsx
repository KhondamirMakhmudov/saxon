import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/search";
import { motion } from "framer-motion";
import LanguageSelectButton from "../lang";

const Header = () => {
  return (
    <div className={" grid-cols-12 bg-[#006C42] py-2 md:grid hidden z-50"}>
      <div
        className={"col-span-12 container flex justify-between items-center"}
      >
        <motion.div
          initial={{ opacity: 0, translateY: "-20px" }}
          animate={{ opacity: 100, translateY: "0px" }}
          transition={{ duration: 0.6 }}
          className={" flex gap-x-8 font-bold text-sm"}
        >
          <Link href={"/"} className={"flex gap-x-2 items-center"}>
            <Image
              src={"/icons/message.svg"}
              alt={"message"}
              width={24}
              height={24}
            />
            <span className={"text-[#fff] md:text-sm lg:text-base text-xs"}>
              info@saxonscienceliaison.uz
            </span>
          </Link>

          <Link href={"/"} className={"flex gap-x-2 items-center"}>
            <Image
              src={"/icons/phone.svg"}
              alt={"message"}
              width={24}
              height={24}
            />
            <span className={"text-[#fff] md:text-sm lg:text-base text-xs"}>
              +99890 000 00 00
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: "-20px" }}
          animate={{ opacity: 100, translateY: "0px" }}
          transition={{ duration: 0.6 }}
          className={"flex gap-x-[100px]"}
        >
          <Search />
          <div className={"flex gap-x-4  items-center"}>
            <Link href={"/"}>
              <span className={"text-[#fff]  md:text-sm lg:text-base text-xs"}>
                Ro’yhatdan o’tish{" "}
              </span>
            </Link>
            <span className={"text-[#fff] md:text-sm lg:text-base text-xs"}>
              /
            </span>
            <Link href={"/"}>
              <span className={"text-[#fff]  md:text-sm lg:text-base text-xs"}>
                Kirish
              </span>
            </Link>

            <LanguageSelectButton />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
