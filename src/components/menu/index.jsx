import { useTransition } from "react";
import Image from "next/image";
import { get, isEqual } from "lodash";
import Link from "next/link";
import clsx from "clsx";

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
    url: "",
    filterUrl: "",
    subMenu: [],
  },
  {
    id: 3,
    title: "Saksoniya",
    url: "",
    filterUrl: "",
    subMenu: [],
  },

  {
    id: 4,
    title: "O’qishni rejalashtirish",
    url: "",
    filterUrl: "",
    subMenu: [],
  },
  {
    id: 5,
    title: "Saksoniyada o’qish",
    url: "/contact",
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
    <div className={"bg-[#00965C]"}>
      <div
        className={
          " container  items-center justify-between  grid grid-cols-12 "
        }
      >
        <div className={"col-span-4"}>
          <Image
            src={"/images/saxon_brand.png"}
            alt={"saxon_brand"}
            width={360}
            height={80}
          />
        </div>

        <ul
          className={
            "col-span-8 h-full flex items-center gap-x-10  justify-end"
          }
        >
          {menuData.map((item) => (
            <li
              className={clsx("text-lg font-philosopher text-[#C3C3C3]", {
                "text-[#fff]": isEqual(get(item, "id"), active),
              })}
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
