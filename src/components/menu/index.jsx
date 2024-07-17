import { useTransition } from "react";
import Image from "next/image";
import { get, isEqual } from "lodash";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

export const menuData = [
  {
    id: 1,
    title: "Bosh sahifa",
    url: "/",
    filterUrl: "",
    subMenu: [],
  },
  {
    id: 2,
    title: "Biz haqimizda",
    url: "/about",
    filterUrl: "",
    subMenu: [],
  },
  {
    id: 3,
    title: "Saksoniya",
    url: "/saxon",
    filterUrl: "",
    subMenu: [],
  },

  {
    id: 4,
    title: "O’qishni rejalashtirish",
    url: "/university",
    filterUrl: "",
    subMenu: [],
  },
  {
    id: 5,
    title: "Saksoniyada o’qish",
    url: "/study-in-saxon",
    subMenu: [],
  },
  {
    id: 6,
    title: "Hozirgi",
    url: "/nowadays",
    subMenu: [],
  },
];

const Menu = ({ active = 0 }) => {
  const { t } = useTransition();

  return (
    <div className={"bg-[#00965C] md:block hidden relative  z-10 "}>
      <div
        className={
          " container z-50 items-center justify-between grid grid-cols-12"
        }
      >
        <motion.div
          initial={{ opacity: 0, translateX: "-100px" }}
          animate={{ opacity: 100, translateX: "0px" }}
          transition={{ duration: 0.6 }}
          className={"col-span-4 z-50 py-2 "}
        >
          <Image
            src={"/images/saxon_brand.png"}
            alt={"saxon_brand"}
            width={360}
            height={80}
          />
        </motion.div>

        <ul
          className={
            "col-span-8 bg-[#00965C] pb-[10px] h-full rounded-[6px] z-10 flex items-center gap-x-10  justify-end"
          }
        >
          {menuData.map((item) => (
            <li
              className={clsx(
                "text-lg cursor-pointer font-philosopher text-[#C3C3C3]",
                {
                  "text-[#fff] underline": isEqual(get(item, "id"), active),
                },
              )}
              key={get(item, "id")}
            >
              <Link href={get(item, "url")}>{get(item, "title")}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
