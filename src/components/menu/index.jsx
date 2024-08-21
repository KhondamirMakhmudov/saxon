import Image from "next/image";
import { get, isEqual } from "lodash";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import LanguageSelectButton from "../lang";

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
  const { data: menu, isLoading } = useGetQuery({
    key: KEYS.menu,
    url: URLS.menu,
  });

  return (
    <div>
      <div className={"bg-[#00965C] md:block hidden relative  z-20 "}>
        <div className={"left-0 bg-white w-1/2 h-full -z-10 absolute"}></div>
        <div
          className={"absolute inset-0 -z-10  bg-no-repeat bg-center"}
          style={{ backgroundImage: "url(/images/menu_bg_style.png)" }}
        ></div>
        <div
          className={
            " container z-20 items-center justify-between grid grid-cols-12"
          }
        >
          <motion.div
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 100, translateX: "0px" }}
            transition={{ duration: 0.6 }}
            className={"col-span-4 z-50 py-2 "}
          >
            <Link href={"/"}>
              <Image
                src={"/images/saxon_brand.png"}
                alt={"saxon_brand"}
                width={360}
                height={80}
              />
            </Link>
          </motion.div>

          <ul
            className={
              "col-span-8 bg-[#00965C]  h-full rounded-[6px] z-10 flex items-center gap-x-10  justify-end"
            }
          >
            {menuData.map((item) => (
              <li
                className={clsx(
                  "text-lg cursor-pointer font-philosopher text-[#C3C3C3]",
                  {
                    "text-[#fff] underline": isEqual(get(item, "id"), active),
                  }
                )}
                key={get(item, "id")}
              >
                <Link href={get(item, "url")}>{get(item, "title")}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
