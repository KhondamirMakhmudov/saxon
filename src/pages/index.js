import Image from "next/image";

import Header from "@/components/header";
import Menu from "@/components/menu";
import Button from "@/components/button";
import Card from "@/components/card";
import Title from "@/components/title";
import Link from "next/link";
import { useState } from "react";
import UniversityCards from "@/components/university-card";
import CollegeCards from "@/components/college-card";
import CityCards from "@/components/city-card";
import AdviceCard from "@/components/advice-card";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Reveal from "@/components/reveal";
import RevealLeft from "@/components/reveal/revealLeft";
import RevealRight from "@/components/reveal/revealRight";
import RevealBottom from "@/components/reveal/revealBottom";

export default function Home() {
  const [chooseEducation, setChooseEducation] = useState("university");

  const changeEducation = (education) => {
    setChooseEducation(education);
  };

  return (
    <div className={"min-h-[100vh] md:px-4 px-0"}>
      <Header />
      <Menu active={1} />
      <div
        style={{ backgroundImage: "url(/images/bg_saxon.png)" }}
        className={
          "w-full lg:h-[590px] md:h-[500px] h-[400px] bg-no-repeat bg-cover "
        }
      >
        <div
          className={
            "container flex flex-col md:items-start items-center justify-center pt-[100px]"
          }
        >
          <motion.h2
            initial={{ opacity: 0, translateY: "-100px" }}
            animate={{ opacity: 100, translateY: "0px" }}
            transition={{ duration: 0.7 }}
            className={
              "uppercase text-[#00B06C] lg:text-base md:text-sm text-xs mb-[10px]"
            }
          >
            GET education WITH sakson universities
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 100, translateX: "0px" }}
            transition={{ duration: 0.7 }}
            className={
              "lg:text-[64px] md:text-2xl text-xl text-[#fff] font-philosopher uppercase mt-[20px] lg:mb-[35px] md:mb-[10px] mb-0"
            }
          >
            BEST universities
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 100, translateX: "0px" }}
            transition={{ duration: 0.7 }}
            className={
              "lg:text-[64px] md:text-2xl text-xl text-[#fff] font-philosopher uppercase  mb-[30px]"
            }
          >
            of saxon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateX: "100px" }}
            animate={{ opacity: 100, translateX: "0px" }}
            transition={{ duration: 0.7 }}
            className={
              "lg:text-lg md:text-base text-sm text-[#fff] font-semibold mb-[25px] w-4/5"
            }
          >
            Lorem ipsum dolor sit amet consectetur. Massa fringilla quam amet
            velit. Risus tristique montes metus elementum lacinia at. Justo
            venenatis interdum id nulla vestibulum. Fringilla nisi sit ut in at
            lacus pellentesque quis nisi.{" "}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 100, translateY: "0px" }}
            transition={{ duration: 0.7 }}
          >
            <Button>read more</Button>
          </motion.div>
        </div>
      </div>
      <section className={"grid grid-cols-12 gap-x-[30px] bg-[#F7F7F7]"}>
        <motion.div
          initial={{ opacity: 0, translateY: "100px" }}
          animate={{ opacity: 100, translateY: "0px" }}
          transition={{ duration: 0.8 }}
          className={
            "container col-span-12 justify-between items-center flex flex-col lg:flex-row gap-y-[30px] py-[50px]"
          }
        >
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
        </motion.div>
        <div
          className={
            "col-span-12 container flex md:flex-row gap-y-4 flex-col items-center justify-between"
          }
        >
          <RevealLeft>
            <Title>Sakson ta’lim muassasalari</Title>
          </RevealLeft>
          <RevealRight>
            <div className={"flex gap-x-4 items-center"}>
              <button
                onClick={() => changeEducation("university")}
                className={`uppercase lg:text-lg md:text-base text-sm font-bold ${
                  chooseEducation === "university"
                    ? "text-[#007C4C] border-b border-b-[#007C4C]"
                    : "text-[#000] border-b-0"
                }`}
              >
                Universitet
              </button>

              <button
                onClick={() => changeEducation("college")}
                className={`uppercase lg:text-lg md:text-base text-sm font-bold ${
                  chooseEducation === "college"
                    ? "text-[#007C4C] border-b border-b-[#007C4C]"
                    : "text-[#000] border-b-0"
                }`}
              >
                Amaliy Fanlar Kolleji
              </button>
            </div>
          </RevealRight>
        </div>
        {chooseEducation === "university" ? (
          <div className={"col-span-12 container my-[30px] "}>
            <Reveal
              className={
                "flex md:flex-row flex-col md:justify-between justify-center gap-y-4 items-center"
              }
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
            </Reveal>
          </div>
        ) : chooseEducation === "college" ? (
          <motion.div
            initial={{ opacity: 0, translateY: "-100px" }}
            animate={{ opacity: 100, translateY: "0px" }}
            transition={{ duration: 0.7 }}
            className={"col-span-12 container my-[30px] "}
          >
            <Reveal
              className={
                "flex md:flex-row flex-col md:justify-between justify-center gap-y-4 items-center"
              }
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
            </Reveal>
          </motion.div>
        ) : (
          <div className={"col-span-12 container my-[30px] "}>
            <Reveal className={"flex justify-between"}>
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
            </Reveal>
          </div>
        )}
      </section>

      <section
        className={"mt-[70px] mb-[30px] text-center md:text-start px-[20px]"}
      >
        <div className={"grid grid-cols-12 container"}>
          <div className={"md:col-span-6 col-span-12"}>
            <Reveal>
              <Title>Sakson ilmiy aloqasi haqida</Title>
            </Reveal>

            <RevealRight>
              <p
                className={
                  "my-[20px] lg:text-base md:text-sm text-xs font-semibold text-[#474747]"
                }
              >
                Lorem ipsum dolor sit amet consectetur. Luctus non aliquet dolor
                laoreet. Nisl diam ut nibh tempor eget ullamcorper. Non
                hendrerit id nunc nibh vitae sed sit. Risus habitasse id
                adipiscing ipsum. Pharetra semper at augue orci dictum eu.
                Gravida tincidunt ultricies dictumst eget arcu vitae et velit
                orci. Integer scelerisque sit metus pretium ut diam vitae.
                Scelerisque tellus viverra orci pretium odio adipiscing volutpat
                faucibus eget.
              </p>
            </RevealRight>

            <RevealLeft>
              <h3
                className={
                  "lg:text-2xl md:text-xl text-lg font-philosopher font-bold"
                }
              >
                Ustunliklar
              </h3>
            </RevealLeft>

            <RevealRight>
              <ul
                className={
                  "md:list-disc ml-[20px] my-[20px] lg:text-base md:text-sm text-xs flex flex-col gap-y-2"
                }
              >
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Luctus non aliquet dolor laoreet.</li>
                <li>Nisl diam ut nibh tempor eget ullamcorper.</li>
                <li>Non hendrerit id nunc nibh vitae sed sit.</li>
              </ul>
            </RevealRight>

            <RevealBottom>
              <Button>read more</Button>
            </RevealBottom>
          </div>

          <div className={"col-span-6"}></div>
        </div>
      </section>

      <section className={"pt-[70px] pb-[50px] bg-[#F7F7F7]"}>
        <div className={"grid grid-cols-12 container"}>
          <div className={"col-span-12"}>
            <Reveal className={"col-span-12 text-center md:text-start"}>
              <Title>Saksoniya shaharlari</Title>
            </Reveal>

            <div className={"flex flex-wrap gap-x-[30px]"}>
              <Reveal>
                <CityCards title={"Drezden"} image={"/images/city1.png"} />
              </Reveal>
              <Reveal>
                <CityCards title={"Leyptsig"} image={"/images/city2.png"} />
              </Reveal>
              <Reveal>
                <CityCards title={"Frayberg"} image={"/images/city3.png"} />
              </Reveal>
              <Reveal>
                <CityCards title={"Xemnits"} image={"/images/city4.png"} />
              </Reveal>
              <Reveal>
                <CityCards title={"Zwickau"} image={"/images/city5.png"} />
              </Reveal>
              <Reveal>
                <CityCards
                  title={"Zittau Gorlitz"}
                  image={"/images/city6.png"}
                />
              </Reveal>
            </div>
          </div>

          <div className={"col-span-12 mt-[30px] flex justify-center "}>
            <Reveal>
              <Button>read more</Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={"pt-[70px] pb-[50px]"}>
        <div className={"grid grid-cols-12 container"}>
          <div className={"col-span-12"}>
            <Reveal className={" text-center md:text-start"}>
              <Title>Qabul bo`yicha maslahatlar</Title>
            </Reveal>
          </div>

          <AdviceCard
            title={"Tayyorlov kolleji haqida"}
            image={"/images/advice1.png"}
          />
          <AdviceCard
            title={"Ro‘yhatdan o’tish"}
            image={"/images/advice2.png"}
          />
          <AdviceCard title={"Kurs mazmuni"} image={"/images/advice3.png"} />
          <AdviceCard title={"Voqealar"} image={"/images/advice4.png"} />
          <AdviceCard title={"Kurs to’lovi"} image={"/images/advice5.png"} />
          <AdviceCard title={"Baholash testi"} image={"/images/advice6.png"} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
