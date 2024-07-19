import React, { useState } from "react";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Image from "next/image";
import Title from "@/components/title";
import { motion } from "framer-motion";
import Reveal from "@/components/reveal";
import RevealLeft from "@/components/reveal/revealLeft";
import RevealRight from "@/components/reveal/revealRight";
import Footer from "@/components/footer";
import Link from "next/link";

const Index = () => {
  const [isOpenCareer, setIsOpenCareer] = useState(false);
  const [tabs, setTabs] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const selectPage = (tab) => {
    setTabs(tab);
  };

  const toggleDropdownCareer = () => {
    setIsOpenCareer(!isOpenCareer);
    setTabs(2);
  };

  return (
    <div className={"min-h-[100vh]"}>
      <Header />
      <Menu active={6} />

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
                className={`cursor-pointer ${tabs === 1 ? "text-[#00B06C]" : "text-[#494949]"}`}
              >
                <button onClick={() => selectPage(1)}>
                  FAQ (ko‘p beriladigan savollar)
                </button>
              </li>
              <li
                className={`cursor-pointer ${isOpenCareer ? "text-[#00B06C]" : "text-[#494949]"}`}
              >
                <button
                  onClick={toggleDropdownCareer}
                  className={"flex cursor-pointer items-center"}
                >
                  <p
                    className={`${tabs === 2 ? "text-[#00B06C]" : "text-[#494949]"}`}
                  >
                    Uchrashuvlar (vebinar, maslahatlar)
                  </p>
                </button>
              </li>
            </ul>
          </div>

          {tabs === 1 && (
            <div className={"col-span-9"}>
              <Title>FAQ (ko‘p beriladigan savollar)</Title>

              <ul className={"flex flex-col gap-y-[20px] my-[30px]"}>
                <li>
                  <button
                    onClick={toggleAccordion}
                    className={`flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] ${isOpen ? "bg-[#D6F2E7]" : "bg-[#F7F7F7] transition-all duration-400"}`}
                  >
                    <Image
                      src={"/icons/vector-down.svg"}
                      alt={"down"}
                      width={24}
                      height={24}
                      className={`${!isOpen ? "rotate-0" : "rotate-180"} transition-transform duration-300`}
                    />
                    <p className={"text-lg font-bold"}>
                      Qaysi dasturlar va mutaxassisliklarni o&apos;rganish
                      mumkin?
                    </p>
                  </button>

                  {isOpen && (
                    <motion.div
                      className={"text=[#5A5A5A] my-[20px]"}
                      initial={{ opacity: 0, translateY: "100px" }}
                      animate={{ opacity: 100, translateY: "0px" }}
                      transition={{ duration: 0.7 }}
                    >
                      <p>
                        Saksoniyadagi Leypsig universiteti turli xil ta&apos;lim
                        yo&apos;nalishlari va dasturlarini taklif etadi,
                        jumladan: <br />{" "}
                        <span className={"text-[#5A5A5A] font-bold"}>
                          Gumanitar fanlar
                        </span>
                        : adabiyot, tillar, falsafa, san&apos;at tarixi, musiqa,
                        teatr san&apos;ati.
                        <br />
                        <span className={"text-[#5A5A5A] font-bold"}>
                          Tabiiy fanlar
                        </span>{" "}
                        : Biologiya, kimyo, fizika, matematika, geografiya.
                        <br />
                        <span className={"text-[#5A5A5A] font-bold"}>
                          Tibbiyot va sog&apos;liqni saqlash
                        </span>{" "}
                        : tibbiyot fakulteti, tibbiy biotexnologiya,
                        sog&apos;liqni saqlash va sog&apos;liqni saqlashni
                        boshqarish.
                        <br />
                        <span className={"text-[#5A5A5A] font-bold"}>
                          Huquq va ijtimoiy fanlar
                        </span>{" "}
                        : Huquqshunoslik, sotsiologiya, siyosatshunoslik,
                        iqtisodiyot, menejment, psixologiya, pedagogika. <br />
                        <span className={"text-[#5A5A5A] font-bold"}>
                          Muhandislik fanlari va texnologiyalari
                        </span>{" "}
                        : muhandislik, informatika, Materialshunoslik,
                        elektrotexnika, mashinasozlik.{" "}
                        <span className={"text-[#5A5A5A] font-bold"}>
                          {" "}
                          <br />
                          San&apos;at va dizayn
                        </span>{" "}
                        : arxitektura, dizayn, vizual san&apos;at, media va
                        aloqa.
                      </p>
                    </motion.div>
                  )}
                </li>
                <li>
                  <button
                    className={`flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#F7F7F7]`}
                  >
                    <Image
                      src={"/icons/vector-down.svg"}
                      alt={"down"}
                      width={24}
                      height={24}
                    />
                    <p className={"  text-lg font-bold"}>
                      Qabul talablari qanday (baholar, til sertifikatlari,
                      portfellar)?
                    </p>
                  </button>
                </li>
                <li>
                  <button
                    className={
                      "flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#F7F7F7] "
                    }
                  >
                    <Image
                      src={"/icons/vector-down.svg"}
                      alt={"down"}
                      width={24}
                      height={24}
                    />
                    <p className={"text-lg font-bold"}>
                      Moliyaviy yordam va stipendiyalar uchun qanday
                      imkoniyatlar mavjud?
                    </p>
                  </button>
                </li>
                <li>
                  <button
                    className={
                      "flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#F7F7F7]"
                    }
                  >
                    <Image
                      src={"/icons/vector-down.svg"}
                      alt={"down"}
                      width={24}
                      height={24}
                    />
                    <p className={" text-lg font-bold"}>
                      O&apos;qitishning qaysi formati(ma&apos;ruzalar,
                      seminarlar, amaliy mashg&apos;ulotlar)?
                    </p>
                  </button>
                </li>

                <li>
                  <button
                    className={
                      "flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#F7F7F7]"
                    }
                  >
                    <Image
                      src={"/icons/vector-down.svg"}
                      alt={"down"}
                      width={24}
                      height={24}
                    />
                    <p className={" text-lg font-bold"}>
                      Xalqaro almashinuv va ikki tomonlama diplomlar uchun
                      imkoniyatlar bormi?
                    </p>
                  </button>
                </li>
                <li>
                  <button
                    className={
                      "flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#F7F7F7]"
                    }
                  >
                    <Image
                      src={"/icons/vector-down.svg"}
                      alt={"down"}
                      width={24}
                      height={24}
                    />
                    <p className={" text-lg font-bold"}>
                      O&apos;qituvchilarning malakasi va tajribasi qanday?
                    </p>
                  </button>
                </li>

                <li>
                  <button
                    className={
                      "flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#F7F7F7]"
                    }
                  >
                    <Image
                      src={"/icons/vector-down.svg"}
                      alt={"down"}
                      width={24}
                      height={24}
                    />
                    <p className={" text-lg font-bold"}>
                      Universitetning infratuzilmasi (kutubxonalar,
                      laboratoriyalar, sport inshootlari) qanday?
                    </p>
                  </button>
                </li>

                <li>
                  <button
                    className={
                      "flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#F7F7F7]"
                    }
                  >
                    <Image
                      src={"/icons/vector-down.svg"}
                      alt={"down"}
                      width={24}
                      height={24}
                    />
                    <p className={" text-lg font-bold"}>
                      Tadqiqot ishlari yoki loyihalarda ishtirok etish uchun
                      imkoniyatlar bormi?
                    </p>
                  </button>
                </li>
                <li>
                  <button
                    className={
                      "flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#F7F7F7]"
                    }
                  >
                    <Image
                      src={"/icons/vector-down.svg"}
                      alt={"down"}
                      width={24}
                      height={24}
                    />
                    <p className={" text-lg font-bold"}>
                      Talabalar shaharchasida va shaharda talabalar hayoti
                      qanday?
                    </p>
                  </button>
                </li>
              </ul>
            </div>
          )}

          {tabs === 2 && (
            <div className={"col-span-9"}>
              <Title>O‘qishdan keyin karyera</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Saksoniyada o&apos;qiganidan keyingi martaba yuqori sifatli
                    ta&apos;lim va keng ko&apos;lamli dasturlar tufayli
                    ko&apos;plab imkoniyatlarni taqdim etadi. Saksoniya
                    universiteti bitiruvchilari raqobatbardosh bilim va
                    ko&apos;nikmalarga ega bo&apos;lib, ularni xalqaro mehnat
                    bozorida talabga aylantiradi. Universitetlarning sanoat
                    korxonalari va ilmiy muassasalar bilan yaqin aloqalari
                    tufayli bitiruvchilar muvaffaqiyatli ishga joylashish uchun
                    ajoyib imkoniyatga ega.
                  </p>

                  <p className={"text-[#5A5A5A] mt-[20px]"}>
                    O&apos;quv dasturlariga kiritilgan amaliy mashg&apos;ulotlar
                    va amaliyotlar talabalarga haqiqiy tajribaga ega
                    bo&apos;lish imkonini beradi, bu ularning ish beruvchilar
                    uchun jozibadorligini sezilarli darajada oshiradi.
                    Universitetlar, shuningdek, talabalarga ish topish, rezyume
                    yozish va suhbatga tayyorgarlik ko&apos;rishda yordam
                    beradigan keng ko&apos;lamli martaba xizmatlarini taklif
                    qilishadi.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, translateX: "100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                  className={"col-span-7"}
                >
                  <Image
                    src={"/images/img7.png"}
                    alt={"img7"}
                    width={570}
                    height={350}
                  />
                </motion.div>
              </div>

              <div className={"text-[#5A5A5A] mt-[20px]"}>
                <Reveal duration={0.4}>
                  <p>
                    Bitiruvchilar muhandislik, axborot texnologiyalari,
                    tibbiyot, biznes, ijtimoiy fanlar va san&apos;at kabi turli
                    sohalarda ish topishlari mumkin. Saksoniya universitetlari
                    talabalarga o&apos;z loyihalari va startaplarini ishga
                    tushirish imkoniyatlarini taqdim etish orqali tadbirkorlik
                    va innovatsiyalarni faol qo&apos;llab-quvvatlamoqda.
                  </p>
                </Reveal>

                <Reveal duration={0.5}>
                  <p className={"my-[20px]"}>
                    Drezden va Leypsig kabi sakson shaharlari yirik ilmiy va
                    sanoat markazlari bo&apos;lib, yosh mutaxassislar uchun
                    ko&apos;plab bo&apos;sh ish o&apos;rinlarini taklif etadi.
                    Universitetlarning xalqaro sherikliklari va almashinuv
                    dasturlari bitiruvchilarga chet elda ishlash va
                    o&apos;zlarining professional tarmoqlarini kengaytirish
                    imkoniyatini beradi.
                  </p>
                </Reveal>

                <Reveal duration={0.6}>
                  <p>
                    Saksoniyada yuqori turmush darajasi, rivojlangan
                    infratuzilma va boy madaniy muhit bu mintaqani yashash va
                    ishlash uchun jozibali joyga aylantiradi. Saksoniya
                    universiteti bitiruvchilari sifatli ta&apos;lim va kasbiy
                    o&apos;sish uchun ko&apos;plab imkoniyatlar tufayli
                    muvaffaqiyatli va qoniqarli martaba kutishlari mumkin.
                  </p>
                </Reveal>
              </div>
            </div>
          )}

          {tabs === 3 && (
            <div className={"col-span-9"}>
              <Title>Yashash (transport, telefon va h.z.)</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Saksoniyada o&apos;qish paytida va undan keyin yashash
                    yuqori turmush darajasi, rivojlangan infratuzilma va boy
                    madaniy muhit tufayli ko&apos;plab afzalliklarni taqdim
                    etadi. Drezden va Leypsig kabi sakson shaharlari tarixiy
                    diqqatga sazovor joylari, muzeylari, teatrlari va kontsert
                    zallari bilan mashhur bo&apos;lib, ularni madaniy jihatdan
                    boy va talabalar uchun qiziqarli qiladi.
                  </p>

                  <p className={"text-[#5A5A5A] mt-[20px]"}>
                    O&apos;qish davomida talabalar keng kutubxonalar, zamonaviy
                    o&apos;quv va ta dqiqot markazlari, shuningdek, turli xil
                    talabalar tashkilotlari va klublaridan foydalanishlari
                    mumkin. Universitetlar qulay va arzon turar joylarni, shu
                    jumladan yotoqxonalar va xususiy kvartiralarni taklif
                    qilishadi, bu esa o&apos;qish va kundalik hayot uchun qulay
                    sharoit yaratishga yordam beradi.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, translateX: "100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                  className={"col-span-7"}
                >
                  <Image
                    src={"/images/img8.png"}
                    alt={"img8"}
                    width={570}
                    height={350}
                  />
                </motion.div>
              </div>
              <div className={"text-[#5A5A5A]"}>
                <Reveal duration={0.4}>
                  <p className={"mt-[20px]"}>
                    Saksoniya universitetlari, shuningdek, talabalar uchun turli
                    xil qo&apos;llab-quvvatlash xizmatlarini, shu jumladan
                    akademik maslahat, martaba markazlari va psixologik yordamni
                    taqdim etadi. Shahar infratuzilmasi jamoat transporti,
                    sog&apos;liqni saqlash muassasalari, do&apos;konlar va sport
                    markazlariga qulay kirishni ta&apos;minlaydi.
                  </p>
                </Reveal>

                <Reveal duration={0.5}>
                  <p className={"mt-[20px]"}>
                    O&apos;qishni tugatgandan so&apos;ng, bitiruvchilar
                    Saksoniyada keng martaba imkoniyatlaridan foydalanishlari
                    mumkin. Mintaqa o&apos;zining innovatsion va sanoat
                    klasterlari, xususan texnologiya, muhandislik va tibbiyot
                    bilan mashhur. Ko&apos;pgina kompaniyalar va ilmiy
                    muassasalar yosh mutaxassislar uchun amaliyot va ish
                    joylarini taklif qilishadi, bu esa martaba muvaffaqiyatli
                    boshlanishiga yordam beradi.
                  </p>
                </Reveal>

                <Reveal duration={0.6}>
                  <p className={"mt-[20px]"}>
                    O&apos;qishdan keyin Saksoniyada yashash, shuningdek,
                    Germaniyaning boshqa mintaqalariga nisbatan yashash
                    xarajatlari va yuqori hayot sifati tufayli jozibali.
                    Saksoniya shaharlari dam olish, ochiq havoda dam olish va
                    madaniy boyitish uchun ko&apos;plab imkoniyatlarni taklif
                    etadi. Mintaqaviy tadbirlar, festivallar va yarmarkalar
                    kundalik hayotga xilma-xillik qo&apos;shadi va ijtimoiy
                    integratsiyani rag&apos;batlantiradi.
                  </p>
                </Reveal>
                <Reveal duration={0.7}>
                  <p className={"mt-[20px]"}>
                    Umuman olganda, Saksoniya yuqori sifatli ta&apos;lim, arzon
                    yashash sharoitlari, boy madaniy hayot va turli martaba
                    istiqbollarini o&apos;zida mujassam etgan holda, o&apos;qish
                    paytida ham, undan keyin ham yashash uchun qulay
                    sharoitlarni taklif etadi.
                  </p>
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
