import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/title";
import Link from "next/link";
import { useState } from "react";
import UniversityCards from "@/components/university-card";
import CollegeCards from "@/components/college-card";

export default function Home() {
  const [chooseEducation, setChooseEducation] = useState("university");

  const changeEducation = (education) => {
    setChooseEducation(education);
  };

  return (
    <div className={"min-h-[100vh]"}>
      <Header />
      <Menu active={1} />
      <div
        style={{ backgroundImage: "url(/images/bg_saxon.png)" }}
        className={"w-full h-[590px] bg-no-repeat bg-cover "}
      >
        <div
          className={
            "container flex flex-col items-start justify-center pt-[50px]"
          }
        >
          <h2 className={"uppercase text-[#00B06C] mb-[10px]"}>
            GET education WITH sakson universities
          </h2>
          <h1
            className={
              "text-[64px] text-[#fff] font-philosopher uppercase mb-[15px] "
            }
          >
            BEST universities <br />
            of saxon
          </h1>
          <p className={"text-lg text-[#fff] font-semibold mb-[25px]"}>
            Lorem ipsum dolor sit amet consectetur. Massa fringilla quam amet
            velit. Risus tristique montes metus elementum lacinia at. Justo
            venenatis interdum id nulla vestibulum. Fringilla nisi sit ut in at
            lacus pellentesque quis nisi.{" "}
          </p>
          <Button>read more</Button>
        </div>
      </div>
      <section className={"grid grid-cols-12 gap-x-[30px] bg-[#F7F7F7]"}>
        <div className={"container col-span-12 justify-between flex py-[50px]"}>
          <Card
            image={"/icons/education.svg"}
            title={"Saksoniya\n universitetlarida ta’lim"}
            desc={
              "Lorem ipsum dolor sit amet consectetur. At vitae lectus eleifend elit vulputate lectus nulla sagittis. Convallis risus convallis in in mi duis purus ultricies. Rutrum lectus vel lacus aliquet interdum semper."
            }
          />
          <Card
            image={"/icons/choose_university.svg"}
            title={"Universitet tanlash"}
            desc={
              "Lorem ipsum dolor sit amet consectetur. At vitae lectus eleifend elit vulputate lectus nulla sagittis. Convallis risus convallis in in mi duis purus ultricies. Rutrum lectus vel lacus aliquet interdum semper."
            }
          />
          <Card
            image={"/icons/prepair.svg"}
            title={"O‘qishga tayyorgarlik"}
            desc={
              "Lorem ipsum dolor sit amet consectetur. At vitae lectus eleifend elit vulputate lectus nulla sagittis. Convallis risus convallis in in mi duis purus ultricies. Rutrum lectus vel lacus aliquet interdum semper."
            }
          />
        </div>
        <div
          className={"col-span-12 container flex items-center justify-between"}
        >
          <Title>Sakson ta’lim muassasalari</Title>
          <div className={"flex gap-x-4"}>
            <button
              onClick={() => changeEducation("university")}
              className={`uppercase text-lg font-bold ${chooseEducation === "university" ? "text-[#007C4C] border-b border-b-[#007C4C]" : "text-[#000] border-b-0"}`}
            >
              Universitet
            </button>

            <button
              onClick={() => changeEducation("college")}
              className={`uppercase text-lg font-bold ${chooseEducation === "college" ? "text-[#007C4C] border-b border-b-[#007C4C]" : "text-[#000] border-b-0"}`}
            >
              Amaliy Fanlar Kolleji
            </button>
          </div>
        </div>
        {chooseEducation === "university" ? (
          <div
            className={"col-span-12 container my-[30px] flex justify-between"}
          >
            <UniversityCards
              image={"/images/university1.png"}
              title={"Leyptsig universiteti"}
            />

            <UniversityCards
              image={"/images/university2.png"}
              title={"TU Drezden"}
            />

            <UniversityCards
              image={"/images/university3.png"}
              title={"Tu Chemnitz"}
            />

            <UniversityCards
              image={"/images/university4.png"}
              title={"Freiberg konchilik akademiyasi va texnik universiteti"}
            />
          </div>
        ) : chooseEducation === "college" ? (
          <div
            className={"col-span-12 container my-[30px] flex justify-between"}
          >
            <CollegeCards
              image={"/images/university3.png"}
              title={"Tu Chemnitz "}
            />

            <CollegeCards
              image={"/images/university4.png"}
              title={"Freiberg konchilik akademiyasi va texnik universiteti"}
            />

            <CollegeCards
              image={"/images/university1.png"}
              title={"Leyptsig universiteti"}
            />

            <CollegeCards
              image={"/images/university2.png"}
              title={" TU Drezden"}
            />
          </div>
        ) : (
          <div
            className={"col-span-12 container my-[30px] flex justify-between"}
          >
            <UniversityCards
              image={"/images/university1.png"}
              title={"Leyptsig universiteti"}
            />

            <UniversityCards
              image={"/images/university2.png"}
              title={"TU Drezden"}
            />

            <UniversityCards
              image={"/images/university3.png"}
              title={"Tu Chemnitz"}
            />

            <UniversityCards
              image={"/images/university4.png"}
              title={"Freiberg konchilik akademiyasi va texnik universiteti"}
            />
          </div>
        )}
      </section>

      <section className={"mt-[70px] mb-[30px]"}>
        <div className={"grid grid-cols-12 container"}>
          <div className={"col-span-6"}>
            <Title>Sakson ilmiy aloqasi haqida</Title>

            <p className={"my-[20px] font-semibold text-[#474747]"}>
              Lorem ipsum dolor sit amet consectetur. Luctus non aliquet dolor
              laoreet. Nisl diam ut nibh tempor eget ullamcorper. Non hendrerit
              id nunc nibh vitae sed sit. Risus habitasse id adipiscing ipsum.
              Pharetra semper at augue orci dictum eu. Gravida tincidunt
              ultricies dictumst eget arcu vitae et velit orci. Integer
              scelerisque sit metus pretium ut diam vitae. Scelerisque tellus
              viverra orci pretium odio adipiscing volutpat faucibus eget.
            </p>

            <h3 className={"text-2xl font-philosopher font-bold"}>
              Ustunliklar
            </h3>

            <ul
              className={"list-disc ml-[20px] my-[20px] flex flex-col gap-y-2"}
            >
              <li>Lorem ipsum dolor sit amet consectetur. </li>
              <li>Luctus non aliquet dolor laoreet. </li>
              <li>Nisl diam ut nibh tempor eget ullamcorper. </li>
              <li>Non hendrerit id nunc nibh vitae sed sit. </li>
            </ul>

            <Button>read more</Button>
          </div>

          <div className={"col-span-6"}></div>
        </div>
      </section>
    </div>
  );
}
