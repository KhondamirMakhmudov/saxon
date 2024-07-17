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

const Index = () => {
  const [isOpenCareer, setIsOpenCareer] = useState(false);
  const [tabs, setTabs] = useState(1);
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
                <button onClick={() => selectPage(1)}>Yaxshi sabablar</button>
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
                    O‘qishdan keyin karyera
                  </p>
                  <Image
                    className={`${isOpenCareer ? "rotate-0" : "rotate-180"} ${tabs === 2 ? "fill-[#00B06C]" : "fill-[#494949]"} transform transition-transform`}
                    src={"/icons/vector-down.svg"}
                    alt={"down"}
                    width={16}
                    height={16}
                  />
                </button>
                {isOpenCareer && (
                  <ul
                    className={`!text-[14px] ml-[18px] flex flex-col gap-y-[10px] font-normal mt-[10px] font-lato `}
                  >
                    <li
                      className={`${tabs === 2 ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => selectPage(3)}>
                        Yashash (transport, telefon va h.z.)
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {tabs === 1 && (
            <div className={"col-span-9"}>
              <Title>Yaxshi sabablar</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Saksoniya universitetlarida o&apos;qish ko&apos;plab
                    afzalliklarni beradi. Saksoniya universitetlari
                    ta&apos;limning yuqori sifati va diplomlarning xalqaro
                    miqyosda tan olinishi bilan mashhur bo&apos;lib, bu keng
                    martaba imkoniyatlarini ochib beradi. Mintaqadagi
                    universitetlar turli xil fanlarni qamrab oladigan turli xil
                    o&apos;quv dasturlarini taklif qilishadi, bu esa talabalarga
                    o&apos;zlarining qiziqishlari va martaba maqsadlariga mos
                    keladigan yo&apos;nalishni tanlashga imkon beradi.
                  </p>

                  <p className={"text-[#5A5A5A] mt-[20px]"}>
                    Saksoniya universitetlari, shuningdek, talabalarga zamonaviy
                    laboratoriyalar, tadqiqot markazlari va ilmiy loyihalardan
                    foydalanish imkoniyatini berish orqali ilmiy tadqiqotlar va
                    innovatsiyalarni faol qo&apos;llab-quvvatlamoqda. Bu ilmiy
                    faoliyat bilan shug&apos;ullanishni va ilg&apos;or
                    tadqiqotlar ustida ishlashni istagan talabalar uchun ajoyib
                    imkoniyatlar yaratadi.
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

                <div className={"col-span-12 text-[#5A5A5A]"}>
                  <Reveal duration={0.5}>
                    <p className={"mt-[20px]"}>
                      Xalqaro hamkorlik va almashinuv dasturlari orqali
                      talabalar xalqaro tajribaga ega bo&apos;lishlari va
                      o&apos;zlarining professional tarmoqlarini
                      kengaytirishlari mumkin. Zamonaviy o&apos;quv va turar-joy
                      binolari, kutubxonalar va madaniy markazlarni o&apos;z
                      ichiga olgan rivojlangan universitet infratuzilmasi ham
                      muhim jihatdir.
                    </p>

                    <p className={"mt-[20px]"}>
                      Saksoniyada ta&apos;lim arzon narxga ega va talabalarni
                      qo&apos;llab-quvvatlash uchun turli xil stipendiyalar va
                      moliyaviy dasturlar mavjud. Drezden va Leypsig kabi sakson
                      shaharlari yuqori sifatli hayot, boy madaniy hayot va
                      ko&apos;plab dam olish imkoniyatlarini taklif etadi.
                    </p>

                    <p className={"mt-[20px]"}>
                      Universitetlarning professor-o&apos;qituvchilari tajribali
                      mutaxassislar va olimlarni o&apos;z ichiga oladi, bu
                      o&apos;qitishning yuqori darajasini va tegishli bilim va
                      ko&apos;nikmalarni olish imkoniyatini kafolatlaydi.
                      Universitetlar, shuningdek, talabalarga qimmatli tajriba
                      orttirish va mehnat bozorida raqobatbardoshligini
                      oshirishga yordam beradigan amaliy mashg&apos;ulotlar va
                      amaliyotlarga e&apos;tibor qaratadilar.
                    </p>

                    <p className={"mt-[20px]"}>
                      Shunday qilib, Saksoniya universitetlarida o&apos;qish
                      yuqori sifatli ta&apos;lim, mavjudlik, xalqaro
                      imkoniyatlar va rivojlangan infratuzilmani birlashtirib,
                      mintaqani butun dunyo talabalari uchun jozibador qiladi.
                    </p>
                    <h2
                      className={
                        "font-bold text-[24px] text-black font-philosopher uppercase col-span-12 my-[50px]"
                      }
                    >
                      afzalliklar
                    </h2>

                    <p className={""}>
                      Saksoniya universitetlarida o&apos;qish ko&apos;plab
                      afzalliklarga ega:
                    </p>
                  </Reveal>

                  <div
                    className={"grid grid-cols-12 gap-x-[30px] mt-[20px]" + ""}
                  >
                    <RevealLeft classNameTop={"col-span-6"}>
                      <ul className={"col-span-6 list-disc ml-[30px]"}>
                        <li className={"text-[#00965C]"}>
                          Ta&apos;limning yuqori sifati:{" "}
                          <span className={"text-[#5A5A5A]"}>
                            Saksoniya universitetlari o&apos;zlarining yuqori
                            akademik standartlari va diplomlarni xalqaro
                            miqyosda tan olishlari bilan mashhur bo&apos;lib, bu
                            keng martaba imkoniyatlarini ochib beradi.
                          </span>
                        </li>
                        <li className={"text-[#00965C]"}>
                          Dasturlarning xilma-xilligi:{" "}
                          <span className={"text-[#5A5A5A]"}>
                            universitetlar talabalarga o&apos;z qiziqishlari va
                            martaba maqsadlariga mos keladigan yo&apos;nalishni
                            tanlashga imkon beradigan turli xil fanlar
                            bo&apos;yicha turli xil ta&apos;lim dasturlarini
                            taklif qilishadi.
                          </span>
                        </li>
                        <li className={"text-[#00965C]"}>
                          Ilmiy tadqiqotlarni qo&apos;llab-quvvatlash:{" "}
                          <span className={"text-[#5A5A5A]"}>
                            universitetlar talabalarga zamonaviy
                            laboratoriyalar, tadqiqot markazlari va ilmiy
                            loyihalardan foydalanish imkoniyatini berish orqali
                            ilmiy tadqiqotlar va innovatsiyalarni faol
                            qo&apos;llab-quvvatlamoqda.
                          </span>
                        </li>
                        <li className={"text-[#00965C]"}>
                          Xalqaro sheriklik:{" "}
                          <span className={"text-[#5A5A5A]"}>
                            xalqaro sheriklik va almashinuv dasturlari orqali
                            talabalar xalqaro tajribaga ega bo&apos;lishlari,
                            professional tarmoqlarini kengaytirishlari va global
                            mehnat bozorida raqobatbardoshligini oshirishlari
                            mumkin.
                          </span>
                        </li>
                        <li className={"text-[#00965C]"}>
                          Rivojlangan infratuzilma:{" "}
                          <span className={"text-[#5A5A5A]"}>
                            universitetlar zamonaviy o&apos;quv va yashash
                            joylari, kutubxonalar va madaniy markazlarga ega
                            bo&apos;lib, o&apos;qish va yashash uchun qulay
                            sharoitlarni ta&apos;minlaydi.
                          </span>
                        </li>
                      </ul>
                    </RevealLeft>
                    <RevealRight classNameTop={"col-span-6"}>
                      <ul className={"col-span-6 list-disc ml-[30px]"}>
                        <li className={"text-[#00965C]"}>
                          Ta&apos;limning arzonligi:{" "}
                          <span className={"text-[#5A5A5A]"}>
                            Saksoniyada ta&apos;lim boshqa mintaqalarga nisbatan
                            nisbatan arzon va talabalarni
                            qo&apos;llab-quvvatlash uchun turli xil
                            stipendiyalar va moliyaviy dasturlar mavjud.
                          </span>
                        </li>
                        <li className={"text-[#00965C]"}>
                          Amaliy mashg&apos;ulotlar va amaliyotlar:{" "}
                          <span className={"text-[#5A5A5A]"}>
                            universitetlar amaliy mashg&apos;ulotlar va
                            amaliyotlarga e&apos;tibor berishadi, bu esa
                            talabalarga qimmatli tajriba orttirishga va mehnat
                            bozorida raqobatbardoshligini oshirishga yordam
                            beradi.
                          </span>
                        </li>
                        <li className={"text-[#00965C]"}>
                          Yuqori hayot sifati:{" "}
                          <span className={"text-[#5A5A5A]"}>
                            Drezden va Leypsig kabi sakson shaharlari yuqori
                            hayot sifati, boy madaniy hayot, ko&apos;plab dam
                            olish imkoniyatlari va qulay transport aloqalarini
                            taklif etadi.
                          </span>
                        </li>
                        <li className={"text-[#00965C]"}>
                          Ta&apos;limning yuqori sifati:{" "}
                          <span className={"text-[#5A5A5A]"}>
                            Saksoniya universitetlarida tajribali mutaxassislar
                            va olimlar mavjud bo&apos;lib, ular
                            o&apos;qitishning yuqori darajasi va tegishli bilim
                            va ko&apos;nikmalarga ega bo&apos;lish imkoniyatini
                            kafolatlaydi.
                          </span>
                        </li>
                        <li className={"text-[#00965C]"}>
                          Chet ellik talabalarni qo&apos;llab-quvvatlash:{" "}
                          <span className={"text-[#5A5A5A]"}>
                            universitetlar xalqaro talabalar uchun turli xil
                            dasturlar va qo&apos;llab-quvvatlash xizmatlarini
                            taklif qilishadi, bu ularga yangi madaniy va
                            akademik muhitga muvaffaqiyatli moslashish va
                            integratsiyalashishga yordam beradi.
                          </span>
                        </li>
                      </ul>
                    </RevealRight>
                  </div>
                </div>
              </div>
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
