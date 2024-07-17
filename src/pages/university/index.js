import React, { useState } from "react";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Image from "next/image";
import Title from "@/components/title";
import { motion } from "framer-motion";
import UniversityCards from "@/components/university-card";
import Reveal from "@/components/reveal";
import Footer from "@/components/footer";

const Index = () => {
  const [openTypeOfUniversities, setOpenTypeOfUniversities] = useState();
  const [openDegree, setOpenDegree] = useState();
  const [openRequirements, setOpenRequirements] = useState();
  const [tabs, setTabs] = useState(1);
  const selectPage = (tab) => {
    setTabs(tab);
  };

  const toggleTypeOfUniversities = () => {
    setOpenTypeOfUniversities(!openTypeOfUniversities);
    setTabs(1);
  };

  const toggleTypeODegree = () => {
    setOpenDegree(!openDegree);
    setTabs(3);
  };

  const toggleRequirements = () => {
    setOpenRequirements(!openRequirements);
    setTabs(7);
  };

  return (
    <div>
      <Header />
      <Menu active={4} />

      <section className={"container my-[70px]"}>
        <div className={"grid grid-cols-12 gap-x-[30px] "}>
          <div
            className={
              "col-span-3 bg-[#F7F7F7] font-philosopher font-bold max-h-[530px]"
            }
          >
            <ul
              className={"flex flex-col gap-y-[20px] p-[20px] text-[#494949]"}
            >
              <li
                className={`cursor-pointer ${openTypeOfUniversities ? "text-[#00B06C]" : "text-[#494949]"}`}
              >
                <button
                  onClick={toggleTypeOfUniversities}
                  className={"flex cursor-pointer items-center"}
                >
                  <p
                    className={`${openTypeOfUniversities ? "text-[#00B06C]" : "text-[#494949]"}`}
                  >
                    Universitetlarning turlari
                  </p>
                  <Image
                    className={`${openTypeOfUniversities ? "rotate-0" : "rotate-180"} ${tabs === 2 ? "fill-[#00B06C]" : "fill-[#494949]"} transform transition-transform`}
                    src={"/icons/vector-down.svg"}
                    alt={"down"}
                    width={16}
                    height={16}
                  />
                </button>
                {openTypeOfUniversities && (
                  <ul
                    className={`!text-[14px] ml-[18px] flex flex-col gap-y-[10px] font-normal mt-[10px] font-lato `}
                  >
                    <li
                      className={`${tabs === 1 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(1)}>
                        Universitetlar
                      </button>
                    </li>

                    <li
                      className={`${tabs === 2 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(2)}>
                        Amaliy fanlar kolleji
                      </button>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  onClick={toggleTypeODegree}
                  className={"flex cursor-pointer items-center"}
                >
                  <p
                    className={`${openDegree ? "text-[#00B06C]" : "text-[#494949]"}`}
                  >
                    Daraja
                  </p>
                  <Image
                    className={`${openDegree ? "rotate-0" : "rotate-180"} ${tabs === 3 ? "fill-[#00B06C]" : "fill-[#494949]"} transform transition-transform`}
                    src={"/icons/vector-down.svg"}
                    alt={"down"}
                    width={16}
                    height={16}
                  />
                </button>
                {openDegree && (
                  <ul
                    className={`!text-[14px] ml-[18px] flex flex-col gap-y-[10px] font-normal mt-[10px] font-lato `}
                  >
                    <li
                      className={`${tabs === 3 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(3)}>Bakalavr</button>
                    </li>

                    <li
                      className={`${tabs === 4 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(4)}>
                        Magistratura
                      </button>
                    </li>

                    <li
                      className={`${tabs === 5 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(5)}>
                        Davlat ekspertizasi
                      </button>
                    </li>

                    <li
                      className={`${tabs === 6 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(6)}>
                        Rag‘batlantirish
                      </button>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  onClick={toggleRequirements}
                  className={"flex cursor-pointer items-center"}
                >
                  <p
                    className={`${openRequirements ? "text-[#00B06C]" : "text-[#494949]"}`}
                  >
                    Qabul qilish talablari
                  </p>
                  <Image
                    className={`${openRequirements ? "rotate-0" : "rotate-180"} ${tabs === 7 ? "fill-[#00B06C]" : "fill-[#494949]"} transform transition-transform`}
                    src={"/icons/vector-down.svg"}
                    alt={"down"}
                    width={16}
                    height={16}
                  />
                </button>
                {openRequirements && (
                  <ul
                    className={`!text-[14px] ml-[18px] flex flex-col gap-y-[10px] font-normal mt-[10px] font-lato `}
                  >
                    <li
                      className={`${tabs === 7 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(7)}>
                        Til darajasi
                      </button>
                    </li>

                    <li
                      className={`${tabs === 8 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(8)}>Vizalar</button>
                    </li>

                    <li
                      className={`${tabs === 9 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(9)}>
                        Bloklangan hisob
                      </button>
                    </li>

                    <li
                      className={`${tabs === 10 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(10)}>
                        Kerakli hujjatlar
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          {tabs === 1 && (
            <div className={"col-span-9"}>
              <Title>Universitetlar</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Saksoniya universitetlarida o&apos;qish yuqori sifatli
                    ta&apos;lim va turli xil ta&apos;lim dasturlari bilan
                    ajralib turadi. Universitetlar tabiiy fanlar, muhandislik
                    fanlari, gumanitar va ijtimoiy fanlar, san&apos;at va
                    tibbiyotni qamrab oluvchi bakalavriat, magistratura va
                    doktorantura dasturlarini taklif etadi. O&apos;qitish
                    zamonaviy texnologiyalar va o&apos;qitish usullaridan
                    foydalangan holda yuqori akademik darajada olib boriladi.
                  </p>

                  <p className={"text-[#5A5A5A] mt-[20px]"}>
                    Saksoniya universitetlari talabalarga zamonaviy
                    laboratoriyalar va tadqiqot markazlaridan foydalanish
                    imkoniyatini berish orqali ilmiy tadqiqotlar va
                    innovatsiyalarni faol qo&apos;llab-quvvatlamoqda. O&apos;quv
                    dasturlari ko&apos;pincha amaliy mashg&apos;ulotlar va
                    amaliyotlarni o&apos;z ichiga oladi, bu esa talabalarga
                    mehnat bozorida talab qilinadigan qimmatli ko&apos;nikma va
                    tajribalarni egallashga yordam beradi.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, translateX: "100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                  className={"col-span-7"}
                >
                  <Image
                    src={"/images/img9.png"}
                    alt={"img6"}
                    width={570}
                    height={350}
                  />
                </motion.div>
              </div>

              <div>
                <Reveal duration={0.6}>
                  <p className={"mt-[30px] text-[#5A5A5A]"}>
                    Saksoniyadagi universitetlar talabalar uchun ko&apos;plab
                    afzalliklarni taklif etadi, ular orasida quyidagilarni
                    ajratib ko&apos;rsatish mumkin:
                  </p>
                </Reveal>

                <Reveal duration={0.7}>
                  <ul
                    className={
                      "grid grid-cols-12 gap-x-[30px] gap-y-[30px] text-[#494949] mt-[20px] list-disc ml-[30px]"
                    }
                  >
                    <li className={"col-span-6"}>
                      Yuqori sifatli ta&apos;lim va tadqiqotlar
                    </li>
                    <li className={"col-span-6"}>
                      Rivojlangan infratuzilma va talabalarni
                      qo&apos;llab-quvvatlash:
                    </li>
                    <li className={"col-span-6"}>
                      Dasturlarning xilma-xilligi va fanlararo yondashuv:
                    </li>
                    <li className={"col-span-6"}>
                      Sanoat va xalqaro sheriklar bilan faol hamkorlik:
                    </li>
                  </ul>
                </Reveal>
              </div>

              <Reveal duration={0.8}>
                <div
                  className={
                    "grid grid-cols-12 gap-x-[30px] gap-y-[30px] mt-[30px]"
                  }
                >
                  <UniversityCards
                    classname={"col-span-4"}
                    image={"/images/university1.png"}
                    title={"Leyptsig universiteti"}
                  />

                  <UniversityCards
                    classname={"col-span-4"}
                    image={"/images/university2.png"}
                    title={"Drezden texnika universiteti"}
                  />

                  <UniversityCards
                    classname={"col-span-4"}
                    image={"/images/university3.png"}
                    title={"Xemnitskiy texnika universiteti"}
                  />

                  <UniversityCards
                    classname={"col-span-4"}
                    image={"/images/university4.png"}
                    title={"Frayberg konchilik akademiyasi"}
                  />
                </div>
              </Reveal>
            </div>
          )}
          {tabs === 2 && (
            <div className={"col-span-9"}>
              <Title>Amaliy fanlar kolleji</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Saksoniyadagi amaliy fanlar oliy maktablari
                    (Fachhochschulen) bilimlarni haqiqiy kasbiy vaziyatlarda
                    qo&apos;llashga e&apos;tibor qaratib, deyarli
                    yo&apos;naltirilgan ta&apos;limni taklif qiladi. Ular
                    muhandislik, iqtisod, ijtimoiy fanlar va boshqa amaliy
                    fanlarga e&apos;tibor qaratishlari bilan mashhur.
                  </p>

                  <p className={"text-[#5A5A5A] mt-[20px]"}>
                    Talabalar ushbu muassasalarni kasbiy faoliyatda bevosita
                    qo&apos;llaniladigan ko&apos;nikmalarga ega bo&apos;lish
                    imkoniyati tufayli tanlaydilar. Dasturlarga amaliy qism,
                    kompaniyalarda amaliyot o&apos;tash va sanoat loyihalari
                    kiradi, bu esa talabalarga o&apos;qish bosqichida ish
                    tajribasiga ega bo&apos;lish imkonini beradi. Oliy
                    maktablar, shuningdek, mahalliy va xalqaro kompaniyalar
                    bilan faol hamkorlik qilib, talabalarni sanoat jarayonlariga
                    to&apos;g&apos;ridan-to&apos;g&apos;ri jalb qilishga yordam
                    beradi va kelajakdagi martaba uchun imkoniyatlar ochadi.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, translateX: "100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                  className={"col-span-7"}
                >
                  <Image
                    src={"/images/img10.png"}
                    alt={"img10"}
                    width={570}
                    height={350}
                  />
                </motion.div>
              </div>

              <div>
                <Reveal duration={0.6}>
                  <p className={"mt-[30px] text-[#5A5A5A]"}>
                    Saksoniyadagi amaliy fanlar oliy maktablari
                    (Fachhochschulen) talabalar uchun bir qator afzalliklarni
                    taklif etadi, ular orasida quyidagilar mavjud:
                  </p>
                </Reveal>

                <Reveal duration={0.7}>
                  <ul
                    className={
                      "grid grid-cols-12 gap-x-[30px] gap-y-[30px] text-[#494949] mt-[20px] list-disc ml-[30px]"
                    }
                  >
                    <li className={"col-span-6"}>
                      Amaliy yo&apos;naltirilgan ta&apos;lim
                    </li>
                    <li className={"col-span-6"}>
                      Xalqaro atmosfera va harakatchanlik
                    </li>
                    <li className={"col-span-6"}>
                      Sanoat va biznesga yaqinlik
                    </li>
                    <li className={"col-span-6"}>
                      Bitiruvchilarning yuqori darajadagi bandligi
                    </li>
                  </ul>
                </Reveal>
              </div>

              <Reveal duration={0.8}>
                <div
                  className={
                    "grid grid-cols-12 gap-x-[30px] gap-y-[30px] mt-[30px]"
                  }
                >
                  <UniversityCards
                    classname={"col-span-4"}
                    image={"/images/university1.png"}
                    title={"Leyptsig universiteti"}
                  />

                  <UniversityCards
                    classname={"col-span-4"}
                    image={"/images/university2.png"}
                    title={"Drezden texnika universiteti"}
                  />

                  <UniversityCards
                    classname={"col-span-4"}
                    image={"/images/university3.png"}
                    title={"Xemnitskiy texnika universiteti"}
                  />

                  <UniversityCards
                    classname={"col-span-4"}
                    image={"/images/university4.png"}
                    title={
                      "Freiberg konchilik akademiyasi va texnik universiteti"
                    }
                  />
                </div>
              </Reveal>
            </div>
          )}
          {tabs === 3 && (
            <div className={"col-span-9"}>
              <Title>Bakalavr</Title>
            </div>
          )}

          {tabs === 4 && (
            <div className={"col-span-9"}>
              <Title>Magistratura</Title>
            </div>
          )}

          {tabs === 5 && (
            <div className={"col-span-9"}>
              <Title>Davlat ekspertizasi</Title>
            </div>
          )}

          {tabs === 6 && (
            <div className={"col-span-9"}>
              <Title>Rag‘batlantirish</Title>
            </div>
          )}

          {tabs === 7 && (
            <div className={"col-span-9"}>
              <Title>Til darajasi</Title>
            </div>
          )}

          {tabs === 8 && (
            <div className={"col-span-9"}>
              <Title>Vizalar</Title>
            </div>
          )}

          {tabs === 9 && (
            <div className={"col-span-9"}>
              <Title>Bloklangan hisob</Title>
            </div>
          )}

          {tabs === 10 && (
            <div className={"col-span-9"}>
              <Title>Kerakli hujjatlar</Title>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
