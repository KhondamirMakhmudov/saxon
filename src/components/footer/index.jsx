import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={"bg-[#F7F7F7] pt-[70px] "}>
      <div className={"grid-cols-12 grid container gap-x-[30px] mb-[30px]"}>
        <div className={"col-span-3 flex flex-col gap-y-4"}>
          <Image
            src={"/images/saxon_brand.png"}
            alt={"brand"}
            width={240}
            height={48}
          />
          <p className={"text-base"}>
            Lorem ipsum dolor sit amet consectetur. Sollicitudin facilisis vitae
            viverra integer commodo. Eu neque scelerisque arcu etiam
            pellentesque lacus sed eget consequat. Aliquet ultrices eu amet ut.
            Vitae vel diam est convallis cursus aliquet non quam.
          </p>

          <div className={"  flex-col flex gap-y-2 text-sm"}>
            <Link href={"/"} className={"flex gap-x-2 items-center"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_9_21)">
                  <path
                    d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z"
                    stroke="#00965C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="#00965C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_21">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className={"text-[#474747]"}>
                info@saxonscienceliaison.uz
              </span>
            </Link>

            <Link href={"/"} className={"flex gap-x-2 items-center"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_9_25)">
                  <path
                    d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
                    stroke="#00965C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_25">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className={"text-[#474747]"}>+99890 000 00 00</span>
            </Link>
          </div>
        </div>

        <div className={"col-span-9 flex gap-x-[20px]"}>
          <div className="">
            <h4
              className={
                "md:text-xl text-lg text-[#00965C] font-bold mb-[10px] md:mb-[30px] font-philosopher"
              }
            >
              Biz haqimizda
            </h4>
            <ul className={"text-[#000] text-sm md:text-base"}>
              <li className={"mb-[10px]"}>
                <Link href={"/about"}>Sakson ilmiy aloqasi haqida</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/management"}>Xizmatlar</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/structure"}>O‘qishga tayyorgarlik</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/structural-divisions"}>Aloqa</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/vacancies"}>Sharhlar</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h4
              className={
                "md:text-xl text-lg text-[#00965C] font-bold mb-[10px] md:mb-[30px] font-philosopher"
              }
            >
              Saksoniya
            </h4>
            <ul className={"text-[#000] text-sm md:text-base"}>
              <li className={"mb-[10px]"}>
                <Link href={"/about"}>Yaxshi sabablar</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/management"}>O‘qishdan keyin (karyera)</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/structure"}>
                  Yashash (transport, telefon, ...)
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h4
              className={
                "md:text-xl text-lg text-[#00965C] font-bold mb-[10px] md:mb-[30px] font-philosopher"
              }
            >
              O‘qishni rejalashtirish
            </h4>
            <ul className={"text-[#000] text-sm md:text-base"}>
              <li className={"mb-[10px]"}>
                <Link href={"/about"}>Universitetlar turlari</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/management"}>Darajalar</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/structure"}>Qabul qilish talablari</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h4
              className={
                "md:text-xl text-lg text-[#00965C] font-bold mb-[10px] md:mb-[30px] font-philosopher"
              }
            >
              Saksoniyada o‘qish
            </h4>
            <ul className={"text-[#000] text-sm md:text-base"}>
              <li className={"mb-[10px]"}>
                <Link href={"/about"}>O’qishga tayyorgarlik</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/management"}>Saksoniya shaharlari</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/structure"}>Saksoniya universitetlari</Link>
              </li>
              <li className={"mb-[10px]"}>
                <Link href={"/structural-divisions"}>Hujjatlar qabuli</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h4
              className={
                "md:text-xl text-lg text-[#00965C] font-bold mb-[10px] md:mb-[30px] font-philosopher"
              }
            >
              Hozirgi
            </h4>
            <ul className={"text-[#000] text-sm md:text-base"}>
              <li className={"mb-[10px]"}>
                <Link href={"/about"}>FAQ</Link>
              </li>

              <li className={"mb-[10px]"}>
                <Link href={"/structure"}>
                  Uchrashuvlar (vebinar, maslahatlar)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={"bg-[#007C4C] text-center p-2 text-[#fff]"}>
        <h1>All rights reserved | saxonscienceliaison.uz</h1>
      </div>
    </footer>
  );
};

export default Footer;
