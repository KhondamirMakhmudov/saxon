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
import UniversityCards from "@/components/university-card";

const Index = () => {
  const [isOpenLearn, setIsOpenLearn] = useState(false);
  const [universities, setUniversities] = useState(false);
  const [typeofUniversities, setTypeofUniversities] = useState();
  const [tabs, setTabs] = useState(1);
  const selectPage = (tab) => {
    setTabs(tab);
  };

  const toggleLearn = () => {
    setIsOpenLearn(!isOpenLearn);
  };

  const toggleUniversities = () => {
    setUniversities(!universities);
  };
  const toggleTypeofUniversities = () => {
    setTypeofUniversities(!typeofUniversities);
  };

  return (
    <div className={"min-h-[100vh]"}>
      <Header />
      <Menu active={5} />

      <section className={"container my-[70px]"}>
        <div className={"grid grid-cols-12 gap-x-[30px] "}>
          <div
            className={
              "col-span-3 bg-[#F7F7F7] font-philosopher font-bold min-h-[530px]"
            }
          >
            <ul
              className={"flex flex-col gap-y-[20px] p-[20px] text-[#494949]"}
            >
              <li
                className={`cursor-pointer ${tabs === 1 ? "text-[#00B06C]" : "text-[#494949]"}`}
              >
                <button onClick={() => selectPage(1)}>
                  O‘qishga tayyorgarlik
                </button>
              </li>
              <li
                className={`cursor-pointer ${isOpenLearn ? "text-[#00B06C]" : "text-[#494949]"}`}
              >
                <button
                  onClick={toggleLearn}
                  className={"flex cursor-pointer items-center"}
                >
                  <p
                    className={`${isOpenLearn ? "text-[#00B06C]" : "text-[#494949]"}`}
                  >
                    Saksoniyadagi shaharlarni o‘rganish
                  </p>
                  <Image
                    className={`${isOpenLearn ? "rotate-0" : "rotate-180"} ${tabs === 2 ? "fill-[#00B06C]" : "fill-[#494949]"} transform transition-transform`}
                    src={"/icons/vector-down.svg"}
                    alt={"down"}
                    width={16}
                    height={16}
                  />
                </button>
                {isOpenLearn && (
                  <ul
                    className={`!text-[14px] ml-[18px] flex flex-col gap-y-[10px] font-normal mt-[10px] font-lato `}
                  >
                    <li
                      className={`${tabs === 2 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(2)}>Drezden</button>
                    </li>
                    <li
                      className={`${tabs === 3 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(3)}>Leyptsig</button>
                    </li>
                    <li
                      className={`${tabs === 4 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(4)}>Frayberg</button>
                    </li>
                    <li
                      className={`${tabs === 5 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(5)}>Xemnits</button>
                    </li>
                    <li
                      className={`${tabs === 6 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(6)}>Zwickau</button>
                    </li>
                    <li
                      className={`${tabs === 7 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(7)}>
                        Zittau/Gorlitz
                      </button>
                    </li>
                    <li
                      className={`${tabs === 8 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(8)}>Mittveyda</button>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`cursor-pointer ${isOpenLearn ? "text-[#00B06C]" : "text-[#494949]"}`}
              >
                <button
                  onClick={toggleUniversities}
                  className={"flex cursor-pointer items-center"}
                >
                  <p
                    className={`${universities ? "text-[#00B06C]" : "text-[#494949]"}`}
                  >
                    Saksoniya universitetlari
                  </p>
                  <Image
                    className={`${universities ? "rotate-0" : "rotate-180"} ${tabs === 8 ? "fill-[#00B06C]" : "fill-[#494949]"} transform transition-transform`}
                    src={"/icons/vector-down.svg"}
                    alt={"down"}
                    width={16}
                    height={16}
                  />
                </button>
                {universities && (
                  <ul
                    className={` ml-[18px] flex flex-col gap-y-[10px] font-ищдв mt-[10px] font-lato font-philosopher`}
                  >
                    <li
                      className={`${tabs === 8 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button
                        onClick={toggleTypeofUniversities}
                        className={"flex cursor-pointer items-center"}
                      >
                        <p
                          className={`${typeofUniversities ? "text-[#00B06C]" : "text-[#494949]"}`}
                        >
                          Universitetlar
                        </p>
                        <Image
                          className={`${typeofUniversities ? "rotate-0" : "rotate-180"} ${tabs === 8 ? "fill-[#00B06C]" : "fill-[#494949]"} transform transition-transform`}
                          src={"/icons/vector-down.svg"}
                          alt={"down"}
                          width={16}
                          height={16}
                        />
                      </button>
                      {typeofUniversities && (
                        <ul
                          className={`!text-[14px] ml-[18px] flex flex-col gap-y-[10px] font-normal mt-[10px] font-lato `}
                        >
                          <li
                            className={`${tabs === 9 ? "text-[#00B06C]" : "text-[#494949]"}`}
                          >
                            <button onClick={() => selectPage(9)}>
                              Leypsig Universiteti
                            </button>
                          </li>
                          <li
                            className={`${tabs === 10 ? "text-[#00B06C]" : "text-[#494949]"}`}
                          >
                            <button onClick={() => selectPage(10)}>
                              Drezden texnika universiteti
                            </button>
                          </li>
                          <li
                            className={`${tabs === 11 ? "text-[#00B06C]" : "text-[#494949]"}`}
                          >
                            <button onClick={() => selectPage(11)}>
                              Xemnitskiy texnika universiteti
                            </button>
                          </li>
                          <li
                            className={`${tabs === 12 ? "text-[#00B06C]" : "text-[#494949]"}`}
                          >
                            <button onClick={() => selectPage(12)}>
                              Frayberg konchilik akademiyasi
                            </button>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      className={`${tabs === 13 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(13)}>
                        Amaliy fanlar kolleji
                      </button>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`${tabs === 14 ? "text-[#00B06C]" : "text-[#494949]"}`}
              >
                <button onClick={() => selectPage(14)}>
                  Qanday hujjatlar talab qilinadi
                </button>
              </li>
            </ul>
          </div>

          {tabs === 1 && (
            <div className={"col-span-9"}>
              <Title>O&apos;qishga tayyorgarlik</Title>

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
                    src={"/images/img6.png"}
                    alt={"img6"}
                    width={570}
                    height={350}
                  />
                </motion.div>
              </div>
            </div>
          )}

          {tabs === 2 && (
            <div className={"col-span-9"}>
              <Title>Drezden</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5 max-w-[450px]"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Drezden-Elba daryosi bo&apos;yida joylashgan Saksoniyaning
                    poytaxti va eng yirik shahri. Shahar o&apos;zining boy
                    tarixi, me&apos;moriy durdonalari va madaniy merosi bilan
                    mashhur. Shahar markazida Drezden opera teatri Semperoper va
                    Drezden qirollari qal&apos;asi (Residenzschloss Dresden)
                    kabi ko&apos;plab tarixiy binolarni ko&apos;rish mumkin.
                  </p>

                  <p className={"text-[#5A5A5A] mt-[20px]"}>
                    Drezden Saksoniyaning madaniy markazi bo&apos;lib,
                    ko&apos;plab madaniy tadbirlar, festivallar va
                    ko&apos;rgazmalarga mezbonlik qiladi. Shahar o&apos;zining
                    badiiy to&apos;plamlari bilan mashhur, shu jumladan yashil
                    vatsu (Grünes Gewölbe), dunyodagi eng mashhur muzey
                    kollektsiyalaridan biri.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, translateX: "100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                  className={"col-span-7"}
                >
                  <Image
                    src={"/images/img13.png"}
                    alt={"Drezden"}
                    width={570}
                    height={350}
                  />
                </motion.div>
              </div>

              <div className={"text-[#5A5A5A] mt-[30px]"}>
                <Reveal duration={0.4}>
                  <p>
                    Iqtisodiy jihatdan Drezden mashinasozlik, elektronika va
                    axborot texnologiyalariga e&apos;tibor qaratgan holda yuqori
                    texnologiyalar va innovatsiyalar markazi sifatida tanilgan.
                    Drezden texnika universiteti (Technische Universität
                    Dresden) mintaqada ilmiy tadqiqotlar va innovatsiyalarni
                    rivojlantirishda muhim rol o&apos;ynaydi.
                  </p>
                </Reveal>

                <Reveal duration={0.5}>
                  <p className={"mt-[20px]"}>
                    Drezden, shuningdek, Germaniyadagi eng katta va eng qadimgi
                    bog&apos;lardan biri bo&apos;lgan Zempers Park (Großer
                    Garten) kabi go&apos;zal bog&apos;lari va bog&apos;lari
                    bilan mashhur. Ushbu shahar boy tarixiy merosni zamonaviy
                    innovatsiyalar bilan birlashtirib, uni yashash, ishlash va
                    o&apos;rganish uchun jozibali joyga aylantiradi.
                  </p>
                </Reveal>

                <Reveal duration={0.6}>
                  <h2
                    className={
                      "font-bold text-[24px] text-black font-philosopher uppercase col-span-12 mt-[50px] mb-[30px]"
                    }
                  >
                    Shaharning diqqatga sazovor joylari
                  </h2>
                </Reveal>

                <Reveal duration={0.7}>
                  <p className={"mb-[50px]"}>
                    Saksoniya poytaxti Drezden o&apos;zining boy tarixiy merosi
                    va madaniy diqqatga sazovor joylari bilan mashhur.
                    Drezdenning eng mashhur diqqatga sazovor joylari:
                  </p>
                </Reveal>
              </div>

              <Reveal>
                <div className={"grid grid-cols-12 gap-x-[30px] gap-y-[30px]"}>
                  <div className={"col-span-6 p-[20px] shadow-lg"}>
                    <div className={"flex gap-x-[10px] items-center"}>
                      <Image
                        src={"/images/img14.png"}
                        alt={"Semperoper"}
                        width={170}
                        height={115}
                      />

                      <h2 className={"font-bold text-lg uppercase"}>
                        Semperoper
                      </h2>
                    </div>

                    <p className={"text-[#5A5A5A] mt-[10px]"}>
                      Uyg&apos;onish davri uslubida qurilgan tarixiy opera
                      teatri shaharning ramzlaridan biridir. Bu erda siz yuqori
                      darajadagi opera va balet tomoshalaridan bahramand
                      bo&apos;lishingiz mumkin.
                    </p>
                  </div>

                  <div className={"col-span-6 p-[20px] shadow-lg"}>
                    <div className={"flex gap-x-[10px] items-center"}>
                      <Image
                        src={"/images/img15.png"}
                        alt={"img15"}
                        width={170}
                        height={115}
                      />

                      <h2 className={"font-bold text-lg uppercase"}>
                        Drezden shohlari qal&apos;asi
                      </h2>
                    </div>

                    <p className={"text-[#5A5A5A] mt-[10px]"}>
                      Sakson qirollarining qarorgohi bo&apos;lib xizmat qilgan
                      ajoyib barokko qal&apos;asi. Qal&apos;ada muzeylar, shu
                      jumladan zargarlik buyumlari to&apos;plami bo&apos;lgan
                      yashil vaza (Grünes Gewölbe) mavjud.
                    </p>
                  </div>

                  <div className={"col-span-6 p-[20px] shadow-lg"}>
                    <div className={"flex gap-x-[10px] items-center"}>
                      <Image
                        src={"/images/img21.png"}
                        alt={"Sempergaleriya"}
                        width={170}
                        height={115}
                      />

                      <h2 className={"font-bold text-lg uppercase"}>
                        Sempergaleriya
                      </h2>
                    </div>

                    <p className={"text-[#5A5A5A] mt-[10px]"}>
                      Semperoper majmuasining bir qismi, eski ustalar
                      galereyasi, Rafael, Titian, Rembrandt va Dyurer kabi
                      rassomlarning asarlarini o&apos;z ichiga oladi.
                    </p>
                  </div>

                  <div className={"col-span-6 p-[20px] shadow-lg"}>
                    <div className={"flex gap-x-[10px] items-center"}>
                      <Image
                        src={"/images/img16.png"}
                        alt={"Drezden san'&apos;at galereyasi yangi ustaxona"}
                        width={170}
                        height={115}
                      />

                      <h2 className={"font-bold text-lg uppercase"}>
                        Drezden san&apos;at galereyasi yangi ustaxona
                      </h2>
                    </div>

                    <p className={"text-[#5A5A5A] mt-[10px]"}>
                      Uyg&apos;onish davri uslubida qurilgan tarixiy opera
                      teatri shaharning ramzlaridan biridir. Bu erda siz yuqori
                      darajadagi opera va balet tomoshalaridan bahramand
                      bo&apos;lishingiz mumkin.
                    </p>
                  </div>

                  <div className={"col-span-6 p-[20px] shadow-lg"}>
                    <div className={"flex gap-x-[10px] items-center"}>
                      <Image
                        src={"/images/img17.png"}
                        alt={"Yashil vatsu"}
                        width={170}
                        height={115}
                      />

                      <h2 className={"font-bold text-lg uppercase"}>
                        Yashil vatsu
                      </h2>
                    </div>

                    <p className={"text-[#5A5A5A] mt-[10px]"}>
                      Drezden qirollari qal&apos;asidagi mashhur zargarlik
                      buyumlari va san&apos;at buyumlari to&apos;plami, shu
                      jumladan chinni, zargarlik buyumlari va boshqa asarlar.
                    </p>
                  </div>

                  <div className={"col-span-6 p-[20px] shadow-lg"}>
                    <div className={"flex gap-x-[10px] items-center"}>
                      <Image
                        src={"/images/img18.png"}
                        alt={"Drezden Frauenkirx Shahri"}
                        width={170}
                        height={115}
                      />

                      <h2 className={"font-bold text-lg uppercase"}>
                        Drezden Frauenkirx Shahri
                      </h2>
                    </div>

                    <p className={"text-[#5A5A5A] mt-[10px]"}>
                      Uyg&apos;onish davri uslubida qurilgan tarixiy opera
                      teatri shaharning ramzlaridan biridir. Bu erda siz yuqori
                      darajadagi opera va balet tomoshalaridan bahramand
                      bo&apos;lishingiz mumkin.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal duration={0.6}>
                <h2
                  className={
                    "font-bold text-[24px] text-black font-philosopher uppercase col-span-12 mt-[50px] mb-[30px]"
                  }
                >
                  Shaharning diqqatga sazovor joylari
                </h2>
              </Reveal>

              <Reveal duration={0.8}>
                <div
                  className={
                    "grid grid-cols-12 gap-x-[30px] gap-y-[30px] mt-[30px]"
                  }
                >
                  <UniversityCards
                    classname={"col-span-4"}
                    image={"/images/img19.png"}
                    title={"Drezden amaliy fanlar oliy maktabi"}
                  />

                  <UniversityCards
                    classname={"col-span-4"}
                    image={"/images/img20.png"}
                    title={"Drezden texnika universiteti"}
                  />
                </div>
              </Reveal>
            </div>
          )}

          {tabs === 3 && (
            <div className={"col-span-9"}>
              <Title>Leyptsig</Title>
            </div>
          )}

          {tabs === 4 && (
            <div className={"col-span-9"}>
              <Title>Frayberg</Title>
            </div>
          )}

          {tabs === 5 && (
            <div className={"col-span-9"}>
              <Title>Xemnits</Title>
            </div>
          )}

          {tabs === 6 && (
            <div className={"col-span-9"}>
              <Title>Zwickau</Title>
            </div>
          )}

          {tabs === 7 && (
            <div className={"col-span-9"}>
              <Title>Zittau/Gorlitz</Title>
            </div>
          )}
          {tabs === 8 && (
            <div className={"col-span-9"}>
              <Title>Mittveyda</Title>
            </div>
          )}

          {tabs === 9 && (
            <div className={"col-span-9"}>
              <Title>Leypsig Universiteti</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5 max-w-[450px]"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Leypsig universiteti (Universität Leipzig) Germaniyadagi eng
                    qadimgi universitetlardan biri bo&apos;lib, 1409 yilda
                    tashkil etilgan. Universitet o&apos;zining madaniy va
                    intellektual muhiti bilan mashhur bo&apos;lgan tarixiy
                    Leypsig shahrida joylashgan.
                  </p>

                  <p className={"text-[#5A5A5A] mt-[20px]"}>
                    Universitet gumanitar va tabiiy fanlar, tibbiyot, huquq,
                    iqtisodiyot, ijtimoiy fanlar va boshqalarni o&apos;z ichiga
                    olgan turli xil bilim sohalarida keng ko&apos;lamli
                    ta&apos;lim dasturlarini taklif etadi. Ta&apos;lim
                    dasturlari bakalavriat va magistratura hamda doktoranturani
                    qamrab oladi, bu esa talabalarga tanlangan fanlarni chuqur
                    o&apos;rganish imkoniyatini beradi. Leypsig universiteti
                    o&apos;zining kuchli tadqiqot dasturlari bilan mashhur.
                    Universitetda turli sohalarda, shu jumladan tabiiy va
                    gumanitar fanlar, tibbiyot va ijtimoiy fanlar bo&apos;yicha
                    ilmiy ishlar faol olib borilmoqda.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, translateX: "100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                  className={"col-span-7"}
                >
                  <Image
                    src={"/images/img13.png"}
                    alt={"Leypsig Universiteti"}
                    width={570}
                    height={350}
                  />
                </motion.div>
              </div>

              <div className={"text-[#5A5A5A] mt-[30px]"}>
                <Reveal duration={0.4}>
                  <p>
                    Universitet ilmiy institutlari va laboratoriyalari ilmiy
                    kashfiyotlar va ishlanmalarda muhim rol o&apos;ynaydi.
                    Leypsig madaniy hayoti va universitet hamjamiyati bir-biri
                    bilan chambarchas bog&apos;liq. Shahar o&apos;zining
                    muzeylari, kutubxonalari, kontsert zallari va teatrlari
                    bilan mashhur bo&apos;lib, ular talabalar va
                    o&apos;qituvchilarga madaniy tajribani boyitish va fikr
                    almashish imkoniyatini beradi.
                  </p>
                </Reveal>

                <Reveal duration={0.5}>
                  <p className={"mt-[20px]"}>
                    Leypsig universiteti akademik obro&apos;si, boy madaniy
                    merosi va innovatsion ilmiy faoliyati tufayli butun dunyo
                    bo&apos;ylab talabalar va tadqiqotchilarni jalb qilib,
                    Germaniya va dunyodagi etakchi ta&apos;lim muassasalaridan
                    biri hisoblanadi.
                  </p>
                </Reveal>

                <Reveal duration={0.6}>
                  <h2
                    className={
                      "font-bold text-[24px] text-black font-philosopher uppercase col-span-12 mt-[50px] mb-[30px]"
                    }
                  >
                    Shaharning diqqatga sazovor joylari
                  </h2>
                </Reveal>

                <Reveal duration={0.7}>
                  <p className={"mb-[50px]"}>
                    Saksoniya poytaxti Drezden o&apos;zining boy tarixiy merosi
                    va madaniy diqqatga sazovor joylari bilan mashhur.
                    Drezdenning eng mashhur diqqatga sazovor joylari:
                  </p>
                </Reveal>
              </div>
            </div>
          )}

          {tabs === 10 && (
            <div className={"col-span-9"}>
              <Title>Drezden texnika universiteti</Title>
            </div>
          )}
          {tabs === 11 && (
            <div className={"col-span-9"}>
              <Title>Xemnitskiy texnika universiteti</Title>
            </div>
          )}
          {tabs === 12 && (
            <div className={"col-span-9"}>
              <Title>Frayberg konchilik akademiyasi</Title>
            </div>
          )}

          {tabs === 13 && (
            <div className={"col-span-9"}>
              <Title>Amaliy fanlar kolleji</Title>
            </div>
          )}

          {tabs === 14 && (
            <div className={"col-span-9"}>
              <Title>Qanday hujjatlar talab qilinadi</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5 max-w-[450px]"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Leypsig universiteti (Universität Leipzig) Germaniyadagi eng
                    qadimgi universitetlardan biri bo&apos;lib, 1409 yilda
                    tashkil etilgan. Universitet o&apos;zining madaniy va
                    intellektual muhiti bilan mashhur bo&apos;lgan tarixiy
                    Leypsig shahrida joylashgan.
                  </p>

                  <p className={"text-[#5A5A5A] mt-[20px]"}>
                    Universitet gumanitar va tabiiy fanlar, tibbiyot, huquq,
                    iqtisodiyot, ijtimoiy fanlar va boshqalarni o&apos;z ichiga
                    olgan turli xil bilim sohalarida keng ko&apos;lamli
                    ta&apos;lim dasturlarini taklif etadi. Ta&apos;lim
                    dasturlari bakalavriat va magistratura hamda doktoranturani
                    qamrab oladi, bu esa talabalarga tanlangan fanlarni chuqur
                    o&apos;rganish imkoniyatini beradi. Leypsig universiteti
                    o&apos;zining kuchli tadqiqot dasturlari bilan mashhur.
                    Universitetda turli sohalarda, shu jumladan tabiiy va
                    gumanitar fanlar, tibbiyot va ijtimoiy fanlar bo&apos;yicha
                    ilmiy ishlar faol olib borilmoqda.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, translateX: "100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                  className={"col-span-7"}
                >
                  <Image
                    src={"/images/img22.png"}
                    alt={"Qanday hujjatlar talab qilinadi"}
                    width={570}
                    height={350}
                  />
                </motion.div>
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
