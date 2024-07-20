import React, { useEffect, useState } from "react";
import Title from "@/components/title";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Image from "next/image";
import { get } from "lodash";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/reveal";
import { useRouter } from "next/router";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Fanlararo hamkorlik",
    description:
      "Sakson ilmiy aloqasi turli xil ilmiy fanlar o'rtasidagi o'zaro ta'sirga yordam beradi, bu esa keng qamrovli tadqiqotlar olib borish va murakkab muammolar uchun innovatsion echimlarni topish imkonini beradi.",
  },
  {
    id: 2,
    title: "Yosh olimlarni qo'llab-quvvatlash",
    description:
      "Tashabbus rivojlanayotgan tadqiqotchilarni grantlar, stipendiyalar va amaliyot imkoniyatlari orqali faol qo'llab-quvvatlaydi, bu esa yangi iste'dodlarni rivojlantirishga va mintaqaning ilmiy salohiyatini oshirishga yordam beradi.",
  },
  {
    id: 3,
    title: "Tadqiqot infratuzilmasini rivojlantirish",
    description:
      "Tashabbus laboratoriyalarni modernizatsiya qilish va yangi tadqiqot markazlarini tashkil etishni o'z ichiga oladi, bu esa olib borilayotgan tadqiqotlar sifati va hajmini oshirishga yordam beradi.",
  },
  {
    id: 4,
    title: "Xalqaro hamkorlik",
    description:
      "Saksoniya ilmiy aloqasi xalqaro ilmiy loyihalar va sherikliklarni rivojlantiradi, bu esa ilmiy nashrlarning sifati va sonini oshirish orqali global darajada bilim va tajriba almashishga yordam beradi.",
  },
  {
    id: 5,
    title: "Sanoat bilan o'zaro aloqalar",
    description:
      "Sakson ilmiy aloqasi universitetlar va sanoat korxonalari o'rtasidagi hamkorlikni rag'batlantiradi, bu esa amaliy tadqiqotlarni rivojlantirishga va ishlab chiqarishda innovatsiyalarni tezlashtirishga yordam beradi.",
  },
  {
    id: 6,
    title: "Ta'lim faoliyati va fanni ommalashtirish",
    description:
      "Dastur ilm-fan va texnologiya yutuqlari to'g'risida jamoatchilik xabardorligini oshirishga qaratilgan ommaviy ma'ruzalar, ilmiy festivallar va boshqa tadbirlarni o'tkazadi, bu esa jamiyatda ilm-fanning ijobiy imidjini shakllantirishga yordam beradi.",
  },
];

const Index = () => {
  const router = useRouter();
  const { tab } = router.query;
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenCollege, setIsOpenCollege] = useState(false);
  const [tabs, setTabs] = useState(1);
  const [activeTab, setActiveTab] = useState("saxon-haqida");
  const [accordion, setAccordion] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdownServices = () => {
    setIsOpenServices(!isOpenServices);
    setActiveTab("O‘qishga bo‘yicha maslahat");
  };

  const selectPage = (tab) => {
    setTabs(tab);
  };

  const handleTabClick = (tab) => {
    router.push(`/about?tab=${tab}`);
  };

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const selectAccordion = (item) => {
    setAccordion(item);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownCollege = () => {
    setIsOpenCollege(!isOpenCollege);
  };

  return (
    <div className={"min-h-[100vh]"}>
      <Header />
      <Menu active={2} />

      <section className={"container mt-[70px]"}>
        <div className={"grid grid-cols-12 gap-x-[30px] min-h-[50vh]"}>
          <div
            className={
              "col-span-3 bg-[#F7F7F7] font-philosopher font-bold max-h-[530px]"
            }
          >
            <ul
              className={"flex flex-col gap-y-[20px] p-[20px] text-[#494949]"}
            >
              <li
                className={`cursor-pointer ${activeTab === "saxon-haqida" ? "text-[#00B06C]" : "text-[#494949]"}`}
              >
                <button onClick={() => handleTabClick("saxon-haqida")}>
                  Sakson ilmiy aloqasi haqida
                </button>
              </li>
              <li
                className={`cursor-pointer ${isOpenServices ? "text-[#00B06C]" : "text-[#494949]"}`}
              >
                <button
                  onClick={toggleDropdownServices}
                  className={"flex cursor-pointer items-center"}
                >
                  <p
                    className={`${!isOpenServices ? "text-[#00B06C]" : "text-[#494949]"}`}
                  >
                    Xizmatlar
                  </p>
                  <Image
                    className={`${!isOpenServices ? "rotate-0" : "rotate-180"} ${activeTab === "Xizmatlar" ? "fill-[#00B06C]" : "fill-[#494949]"} transform transition-transform`}
                    src={"/icons/vector-down.svg"}
                    alt={"down"}
                    width={16}
                    height={16}
                  />
                </button>
                {!isOpenServices && (
                  <motion.ul
                    initial={{ opacity: 0, translateY: "30px" }}
                    animate={{ opacity: 100, translateY: "0px" }}
                    transition={{ duration: 0.4 }}
                    className={`!text-[14px] ml-[18px] flex flex-col gap-y-[10px] font-normal mt-[10px] font-lato `}
                  >
                    <li
                      className={`${activeTab === "O‘qishga bo‘yicha maslahat" ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button
                        onClick={() =>
                          handleTabClick("O‘qishga bo‘yicha maslahat")
                        }
                      >
                        O‘qishga bo‘yicha maslahat
                      </button>
                    </li>
                    <li
                      className={`${activeTab === "Universitet tanlash" ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button
                        onClick={() => handleTabClick("Universitet tanlash")}
                      >
                        Universitet tanlash
                      </button>
                    </li>
                    <li
                      className={`${activeTab === "O‘qishga tayyorgarlik" ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button
                        onClick={() => handleTabClick("O‘qishga tayyorgarlik")}
                      >
                        O‘qishga tayyorgarlik
                      </button>
                    </li>
                  </motion.ul>
                )}
              </li>
              <li className={"cursor-pointer"}>
                <button
                  onClick={toggleDropdownCollege}
                  className={"flex cursor-pointer items-center"}
                >
                  <p
                    className={`${!isOpenCollege ? "text-[#00B06C]" : "text-[#494949]"}`}
                  >
                    Tayyorgarlik kolleji
                  </p>
                  <Image
                    className={`${!isOpenCollege ? "rotate-0" : "rotate-180"} transform transition-transform`}
                    src={"/icons/vector-down.svg"}
                    alt={"down"}
                    width={16}
                    height={16}
                  />
                </button>

                {!isOpenCollege && (
                  <motion.ul
                    initial={{ opacity: 0, translateY: "30px" }}
                    animate={{ opacity: 100, translateY: "0px" }}
                    transition={{ duration: 0.4 }}
                    className={
                      "!text-[14px] ml-[18px] flex flex-col gap-y-[10px] font-normal mt-[10px] font-lato"
                    }
                  >
                    <li
                      className={`${activeTab === "Tayyorlov kolleji haqida" ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button
                        onClick={() =>
                          handleTabClick("Tayyorlov kolleji haqida")
                        }
                      >
                        Tayyorlov kolleji haqida
                      </button>
                    </li>
                    <li
                      className={`${activeTab === "Ro‘yhatdan o‘tish" ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button
                        onClick={() => handleTabClick("Ro‘yhatdan o‘tish")}
                      >
                        Ro‘yhatdan o‘tish
                      </button>
                    </li>
                    <li
                      className={`${activeTab === "Kurs mazmuni" ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => handleTabClick("Kurs mazmuni")}>
                        Kurs mazmuni
                      </button>
                    </li>
                    <li
                      className={`${activeTab === "Voqealar" ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => handleTabClick("Voqealar")}>
                        Voqealar
                      </button>
                    </li>
                    <li
                      className={`${activeTab === "Kurs to‘lovlari" ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => handleTabClick("Kurs to‘lovlari")}>
                        Kurs to‘lovlari
                      </button>
                    </li>
                    <li
                      className={`${activeTab === "Baholash testi" ? "text-[#00B06C]" : "text-[#494949]"}`}
                    >
                      <button onClick={() => handleTabClick("Baholash testi")}>
                        Baholash testi
                      </button>
                    </li>
                  </motion.ul>
                )}
              </li>

              <li
                className={`${activeTab === "Aloqa" ? "text-[#00B06C]" : "text-[#494949]"} cursor-pointer`}
              >
                <button onClick={() => handleTabClick("Aloqa")}>Aloqa</button>
              </li>
              <li
                className={`${activeTab === "Sharh" ? "text-[#00B06C]" : "text-[#494949]"} cursor-pointer`}
              >
                <button onClick={() => handleTabClick("Sharh")}>Sharh</button>
              </li>
            </ul>
          </div>

          {activeTab === "saxon-haqida" && (
            <div id={"saxon-scientific-connection"} className={"col-span-9"}>
              <Title>Sakson ilmiy aloqasi haqida</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.4 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Sakson ilmiy aloqasi Saksoniyada ilmiy hamkorlik va
                    innovatsiyalarni rivojlantirishga qaratilgan tashabbusdir.
                    Dastur fanlararo tadqiqotlarni va universitetlar va tadqiqot
                    markazlari o&apos;rtasida olimlar almashinuvini
                    rag&apos;batlantiradi. Asosiy maqsadlardan biri sanoat va
                    ijtimoiy muammolar uchun innovatsion echimlarni yaratishdir.
                    Tashabbus grantlar, stipendiyalar va amaliyot
                    imkoniyatlarini taklif qilish orqali yosh iste&apos;dodlarni
                    faol qo&apos;llab-quvvatlaydi. Sakson ilmiy aloqasi xalqaro
                    ilmiy loyihalar va hamkorlikni rivojlantiradi, xorijiy
                    sheriklarni jalb qiladi. U fanlararo tadqiqotlarni
                    qo&apos;llab-quvvatlaydi, universitetlar, ilmiy markazlar va
                    sanoat hamkorlari o&apos;rtasida bilim va tajriba
                    almashishni osonlashtiradi.
                  </p>
                </motion.div>
                <motion.div
                  className={"col-span-7"}
                  initial={{ opacity: 0, translateX: "100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={"/images/img-about-saxon.png"}
                    alt={"img-about-saxon"}
                    width={570}
                    height={350}
                  />
                </motion.div>

                <Reveal duration={0.2} classNames={"col-span-12 mt-[30px]"}>
                  <p>
                    Dastur ilmiy nashrlar sifatini yaxshilashga va fanning
                    ta&apos;lim dasturlariga integratsiyalashuviga yordam
                    beradi. Tashabbus doirasida ilmiy konferensiyalar,
                    seminarlar, ommaviy ma&apos;ruzalar va ma&apos;rifiy
                    tadbirlar o&apos;tkaziladi. Saksoniya ilmiy aloqasi,
                    shuningdek, tadqiqot infratuzilmasini rivojlantirishga va
                    fan va biznes o&apos;rtasidagi o&apos;zaro ta&apos;sirga
                    yordam beradi, ekologiya, biotexnologiya, axborot
                    texnologiyalari, madaniy va gumanitar fanlar kabi turli
                    ilmiy sohalardagi tadqiqotlarni qo&apos;llab-quvvatlaydi.
                  </p>
                </Reveal>

                <Reveal duration={0.3} className={"col-span-12"}>
                  <h2
                    className={
                      "font-bold text-[24px] font-philosopher uppercase  mt-[50px] mb-[30px]"
                    }
                  >
                    Ustunliklarimiz
                  </h2>
                </Reveal>

                <div className={"col-span-12"}>
                  <Reveal duration={0.1}>
                    <div
                      className={
                        "grid grid-cols-12 gap-x-[30px] gap-y-[30px] mb-[50px]"
                      }
                    >
                      {DUMMY_DATA.map((item) => (
                        <div
                          key={get(item, "id")}
                          className={
                            "lg:col-span-6 col-span-12 shadow-md  rounded-r-[10px]  border-l-[4px] p-[25px]  border-[#00965C]"
                          }
                        >
                          <Reveal duration={0.3}>
                            <h3
                              className={
                                "font-bold text-lg font-philosopher uppercase mb-[20px]"
                              }
                            >
                              {get(item, "title")}
                            </h3>

                            <p>{get(item, "description")}</p>
                          </Reveal>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
                <Reveal classNames={"col-span-12"}>
                  <div
                    className={
                      " w-full h-[530px] bg-gray-400 mb-[70px] rounded-[10px]"
                    }
                  ></div>
                </Reveal>
              </div>
            </div>
          )}
          {activeTab === "O‘qishga bo‘yicha maslahat" && (
            <div className={"col-span-9"}>
              <Title>
                Sakson universitetlariga o‘qishga kirish bo’yicha maslahat
              </Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Sakson ilmiy aloqasi Saksoniyada ilmiy hamkorlik va
                    innovatsiyalarni rivojlantirishga qaratilgan tashabbusdir.
                    Dastur fanlararo tadqiqotlarni va universitetlar va tadqiqot
                    markazlari o&apos;rtasida olimlar almashinuvini
                    rag&apos;batlantiradi. Asosiy maqsadlardan biri sanoat va
                    ijtimoiy muammolar uchun innovatsion echimlarni yaratishdir.
                    Tashabbus grantlar, stipendiyalar va amaliyot
                    imkoniyatlarini taklif qilish orqali yosh iste&apos;dodlarni
                    faol qo&apos;llab-quvvatlaydi. Sakson ilmiy aloqasi xalqaro
                    ilmiy loyihalar va hamkorlikni rivojlantiradi, xorijiy
                    sheriklarni jalb qiladi. U fanlararo tadqiqotlarni
                    qo&apos;llab-quvvatlaydi, universitetlar, ilmiy markazlar va
                    sanoat hamkorlari o&apos;rtasida bilim va tajriba
                    almashishni osonlashtiradi.
                  </p>
                </motion.div>
                <motion.div
                  className={"col-span-7"}
                  initial={{ opacity: 0, translateX: "100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={"/images/img2.png"}
                    alt={"img-about-saxon"}
                    width={570}
                    height={350}
                  />
                </motion.div>

                <Reveal duration={0.3} classNames={"col-span-12"}>
                  <p className={"text-[#5A5A5A] mt-[15px]"}>
                    Maslahatchilar tegishli mutaxassislik va universitetni
                    tanlash bo&apos;yicha individual ko&apos;rsatmalar beradi,
                    akademik yutuqlarni tahlil qiladi va raqobatbardosh
                    arizalarni tuzishda yordam beradi. Shuningdek, ular kerakli
                    hujjatlarni tayyorlashda yordam berishadi, ariza berish
                    jarayonida va intervyuga tayyorgarlik ko&apos;rishda yordam
                    berishadi. Maslahat Saksoniyadagi ta&apos;lim muhitiga
                    muvaffaqiyatli kirish va moslashish imkoniyatini oshiradi.
                  </p>
                  <p className={"text-[#5A5A5A] mt-[15px] "}>
                    Saksoniya universitetlariga kirish uchun maslahat olish,
                    o&apos;qishga kirishga tayyorgarlikning har bir bosqichida
                    professional rahbarlik va qo&apos;llab-quvvatlash uchun
                    qimmatli imkoniyatdir. Maslahatchilar qabul talablarini
                    tushunishga, mutaxassislik va universitetni
                    to&apos;g&apos;ri tanlashga, akademik yutuqlarni baholashga
                    va kerakli hujjatlarni tayyorlashga yordam beradi. Bu sizga
                    muvaffaqiyatli qabul qilish imkoniyatini oshirishga va
                    arizalar va intervyular jarayonini osonlashtirishga imkon
                    beradi.
                  </p>
                </Reveal>

                <div className={"col-span-12 mt-[50px] mb-[70px]"}>
                  <Reveal duration={0.2}>
                    <h2
                      className={
                        "font-bold text-[24px] mb-[10px] font-philosopher uppercase  "
                      }
                    >
                      Maslahat olish uchun murojaat qoldiring
                    </h2>
                  </Reveal>

                  <Reveal duration={0.3}>
                    <p className={"text-[#5A5A5A]"}>
                      Saksoniya universitetlariga kirish uchun maslahat olishga
                      o‘z murojaatingizni batafsil yozib yuboring. Tez orada siz
                      bilan bog‘lanishadi.
                    </p>
                  </Reveal>

                  <Reveal duration={0.4}>
                    <form className={"max-w-[690px] mt-[30px]"}>
                      <div className={"flex justify-between mb-[30px]"}>
                        <input
                          type={"text"}
                          className={
                            "border border-[#007C4C] rounded-[6px] max-w-[330px] w-full  px-4 py-[12px]"
                          }
                          placeholder={"F.I.SH."}
                        />

                        <input
                          type={"email"}
                          className={
                            "border border-[#007C4C] rounded-[6px] max-w-[330px] w-full  px-4 py-[12px]"
                          }
                          placeholder={"Email"}
                        />
                      </div>

                      <input
                        type={"text"}
                        className={
                          "border border-[#007C4C] rounded-[6px] mb-[30px] w-full  px-4 py-[12px]"
                        }
                        placeholder={"Murojaat mavzusi"}
                      />

                      <textarea
                        className={
                          "border border-[#007C4C] rounded-[6px] mb-[30px]  w-full  px-4 py-2 "
                        }
                        placeholder={"Murojaat matni"}
                        rows={8}
                      ></textarea>

                      <button
                        className={
                          "bg-[#00965C] text-white max-w-[210px] w-full py-3 rounded-[6px] uppercase hover:bg-[#00AF6C] transition-all duration-300 "
                        }
                      >
                        Yuborish
                      </button>
                    </form>
                  </Reveal>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Universitet tanlash" && (
            <div className={"col-span-9"}>
              <Title>Universitet tanlash</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5"}
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Germaniyada davlat va davlat tomonidan tan olingan
                    universitetlar mavjud. Aksariyat universitetlar davlat
                    tomonidan moliyalashtiriladi va davlat tomonidan
                    boshqariladi. Saksoniyada bu fan vazirligi tomonidan
                    boshqariladigan 14 ta universitet, shuningdek Saksoniya kasb
                    - hunar akademiyasi (2025 yildan beri Saksoniya kooperativ
                    davlat universiteti).
                  </p>

                  <p className={"text-[#5A5A5A] my-[10px]"}>
                    Shuningdek, davlat tomonidan tan olingan xususiy yoki
                    cherkov universitetlari, shuningdek ma&apos;muriy
                    universitetlar mavjud.
                  </p>

                  <p className={"text-[#5A5A5A]"}>
                    Universitetlar odatda tadqiqotga yo&apos;naltirilgan va
                    turli xil mavzular bilan ajralib turadi. Aksincha, amaliy
                    fanlar universitetlarida o&apos;qish amaliyotga ko&apos;proq
                    yo&apos;naltirilgan va qattiqroq tuzilgan.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, translateX: "100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.7 }}
                  className={"col-span-7"}
                >
                  <Image
                    src={"/images/img3.png"}
                    alt={"img-about-saxon"}
                    width={570}
                    height={350}
                  />
                </motion.div>

                <motion.div
                  className={"col-span-12 mt-[20px] text-[#5A5A5A]"}
                  initial={{ opacity: 0, translateY: "100px" }}
                  animate={{ opacity: 100, translateY: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <p>
                    {" "}
                    Garchi ular hozirda barcha mavzularni taklif qilsalar ham,
                    o&apos;qishni boshlashdan oldin ko&apos;pincha amaliyot
                    o&apos;tash talab etiladi. Boshqa tomondan, agar siz rassom,
                    musiqachi yoki terapevtik yoki ta&apos;lim sohasida hayotga
                    tayyorgarlik ko&apos;rmoqchi bo&apos;lsangiz, san&apos;at
                    kollejida o&apos;qish yaxshiroqdir, buning uchun sizga
                    o&apos;rta maktab diplomi kerak emas, lekin siz bunday
                    o&apos;quv kursiga mos ekanligingizni isbotlashingiz kerak.
                    Biroq, professional akademiyaning eshigi qobiliyat
                    portfelini emas, balki amaliyot sherigi bilan o&apos;qish
                    shartnomasini ochadi. Bu erda o&apos;qitish ish talablariga
                    maxsus moslashtirilgan.
                  </p>
                </motion.div>

                <motion.div
                  className={"col-span-12 mt-[20px] text-[#5A5A5A]"}
                  initial={{ opacity: 0, translateY: "100px" }}
                  animate={{ opacity: 100, translateY: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <ul className={"flex flex-col gap-y-[20px] mb-[30px]"}>
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
                        <p
                          className={
                            "font-philosopher uppercase text-lg font-bold"
                          }
                        >
                          Universitetlar
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
                            Universitetlar birinchi navbatda ilmiy ishlarga
                            yo&apos;naltirilgan va tadqiqotlar muhim rol
                            o&apos;ynaydi. Bu ularning eng katta mahsulot
                            tanlovini taklif qilishining sabablaridan biridir.
                            Ko&apos;pgina hollarda, universitet tadqiqotlari
                            dastlab hodisalarga nazariy qarash va ularni tadqiq
                            qilishni o&apos;z ichiga oladi.
                          </p>

                          <p className={"my-[20px]"}>
                            Shunday qilib, o&apos;qishni tugatgandan so&apos;ng,
                            doktorlik darajasiga akademik yo&apos;lni davom
                            ettirishni xohlashini biladigan har bir kishi
                            universitetda ishonchli qo&apos;llarda.
                          </p>

                          <p>
                            Inson tibbiyoti va o&apos;qitish faqat
                            universitetlarda taqdim etiladigan bir nechta
                            kurslardan biridir. Universitetda o&apos;qish uchun
                            zarur shart-bu universitetga umumiy yoki
                            ixtisoslashtirilgan kirish imtihonining mavjudligi.
                            Abitur barcha o&apos;quv kurslariga va universitetga
                            kirish imtihoniga faqat ma&apos;lum fanlar
                            bo&apos;yicha kirish huquqini beradi.
                          </p>

                          <p className={"mt-[30px]"}>
                            Saksoniyada to&apos;rtta universitet mavjud:
                          </p>

                          <ul className={"list-disc text-[#007C4C] ml-[30px]"}>
                            <li className={"underline"}>
                              <Link href={"#"}>
                                Drezden texnika universiteti
                              </Link>
                            </li>
                            <li className={"underline"}>
                              <Link href={"#"}>Leypsig universiteti</Link>
                            </li>
                            <li className={"underline"}>
                              <Link href={"#"}>
                                Xemnitskiy texnologiya universiteti
                              </Link>
                            </li>
                            <li className={"underline"}>
                              <Link href={"#"}>
                                Frayburg akademiyasining Berg texnologiya
                                universiteti
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </li>
                    <li>
                      <button
                        className={
                          "flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#D6F2E7]"
                        }
                      >
                        <Image
                          src={"/icons/vector-down.svg"}
                          alt={"down"}
                          width={24}
                          height={24}
                        />
                        <p
                          className={
                            "font-philosopher uppercase text-lg font-bold"
                          }
                        >
                          San&apos;at kollejlari
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        className={
                          "flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#D6F2E7]"
                        }
                      >
                        <Image
                          src={"/icons/vector-down.svg"}
                          alt={"down"}
                          width={24}
                          height={24}
                        />
                        <p
                          className={
                            "font-philosopher uppercase text-lg font-bold"
                          }
                        >
                          Amaliy fanlar universitetlari
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        className={
                          "flex items-center gap-x-[10px]  w-full p-2 rounded-[6px] bg-[#D6F2E7]"
                        }
                      >
                        <Image
                          src={"/icons/vector-down.svg"}
                          alt={"down"}
                          width={24}
                          height={24}
                        />
                        <p
                          className={
                            "font-philosopher uppercase text-lg font-bold"
                          }
                        >
                          Saksoniya kasb-hunar akademiyasi / 2025 yildan:
                          Saksoniya kooperativ davlat universiteti.
                        </p>
                      </button>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === "O‘qishga tayyorgarlik" && (
            <div className={"col-span-9"}>
              <Title>O‘QISHGA TAYYORGARLIK</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <motion.div
                  className={"col-span-5"}
                  initial={{ opacity: 0, translateX: "-50px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.4 }}
                >
                  <p className={"text-[#5A5A5A]"}>
                    Saksoniya universitetlarida o&apos;qishga tayyorgarlik bir
                    necha muhim bosqichlarni o&apos;z ichiga oladi. Avvalo,
                    ularning ixtisoslashuvi va akademik talablarini hisobga
                    olgan holda universitet va o&apos;quv dasturini tanlash
                    to&apos;g&apos;risida qaror qabul qilish kerak. Keyin
                    tanlangan dasturning til talablarini tekshirish va Agar
                    kerak bo&apos;lsa, TestDaF yoki IELTS/TOEFL kabi tegishli
                    til testlarini topshirishga tayyorgarlik ko&apos;rish kerak.
                  </p>

                  <p className={"text-[#5A5A5A] mt-[20px]"}>
                    Keyinchalik, ariza berish uchun barcha kerakli hujjatlarni,
                    shu jumladan to&apos;liq o&apos;rta ma&apos;lumot
                    to&apos;g&apos;risidagi guvohnoma, akademik tavsiyalar,
                    motivatsion xat va universitet tomonidan ko&apos;rsatilgan
                    boshqa hujjatlarni to&apos;plash kerak. Ba&apos;zi
                    universitetlar qo&apos;shimcha testlar yoki topshiriqlarni
                    ham talab qilishi mumkin.
                  </p>
                </motion.div>
                <motion.div
                  className={"col-span-7"}
                  initial={{ opacity: 0, translateX: "50px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={"/images/img3.png"}
                    alt={"img-about-saxon"}
                    width={570}
                    height={350}
                  />
                </motion.div>

                <div
                  className={"col-span-12 text-[#5A5A5A] mt-[20px] mb-[50px]"}
                >
                  <p>
                    Agar til darajasi yoki akademik ko&apos;nikmalar
                    yaxshilanishni talab qilsa, universitetning o&apos;quv yuki
                    va til muhitiga moslashishga yordam beradigan tayyorgarlik
                    kurslarida ishtirok etishni ko&apos;rib chiqish foydali
                    bo&apos;ladi.
                  </p>

                  <p className={"my-[20px]"}>
                    Qabulni tasdiqlaganingizdan so&apos;ng, talabalar
                    shaharchasida qulay bo&apos;lishingizga, universitetning
                    o&apos;quv resurslari va qoidalari bilan tanishishingizga va
                    Saksoniyadagi o&apos;quv va jamoat hayotiga
                    qo&apos;shilishingizga yordam beradigan yo&apos;naltirilgan
                    dasturlardan o&apos;tish muhimdir.
                  </p>

                  <p>
                    Saksoniya universitetlari turli xil bilim sohalarida turli
                    xil ta&apos;lim dasturlarini taklif qilishadi. Ularning
                    assortimenti quyidagi sohalarni qamrab oluvchi bakalavriat,
                    magistratura va doktorantura dasturlarini o&apos;z ichiga
                    oladi:
                  </p>

                  <ul className={"list-disc ml-[30px]"}>
                    <li>
                      Fizika, kimyo, biologiya va matematikani o&apos;z ichiga
                      olgan tabiiy fanlar.
                    </li>

                    <li>
                      Mashinasozlik, elektrotexnika, axborot texnologiyalari va
                      qurilish kabi muhandislik fanlari.
                    </li>

                    <li>
                      Tarix, falsafa, adabiyot va tilshunoslikni o&apos;z ichiga
                      olgan gumanitar fanlar
                    </li>

                    <li>
                      Iqtisodiyot, siyosatshunoslik, sotsiologiya va psixologiya
                      kabi ijtimoiy fanlar.
                    </li>

                    <li>
                      Tibbiyot va sog&apos;liqni saqlash fanlari, shu jumladan
                      tibbiyot, stomatologiya va jamoat salomatligi.
                    </li>

                    <li>
                      San&apos;at va dizayn, shu jumladan tasviriy san&apos;at,
                      musiqa, teatr va arxitektura.
                    </li>
                  </ul>

                  <p className={"mt-[20px]"}>
                    Har bir universitetning mehnat bozori va ilmiy yutuqlarning
                    zamonaviy talablariga javob beradigan o&apos;ziga xos
                    ixtisosliklari va noyob dasturlari mavjud.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Tayyorlov kolleji haqida" && (
            <div className={"col-span-9"}>
              <Title>Tayyorlov kolleji haqida</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <div className={"col-span-5"}>
                  <p>
                    Saksoniya universitetlarida asosiy o&apos;quv kursini
                    boshlashdan oldin qo&apos;shimcha tayyorgarlikka muhtoj
                    bo&apos;lgan talabalar uchun mo&apos;ljallangan maxsus
                    tayyorgarlik dasturlari va kollejlar mavjud. Ushbu dasturlar
                    odatda til ko&apos;nikmalarini yaxshilashga (masalan, nemis
                    yoki ingliz), tanlangan sohada muvaffaqiyatli o&apos;rganish
                    uchun zarur bo&apos;lgan akademik ko&apos;nikmalar va
                    bilimlarni tayyorlashga qaratilgan. Tayyorgarlik kollejlari,
                    shuningdek, universitetning madaniy va o&apos;quv hayotiga
                    kirishni taklif qilishi mumkin, bu esa talabalarga yangi
                    o&apos;quv muhitiga yaxshiroq moslashishga yordam beradi.
                  </p>
                </div>
                <div className={"col-span-7"}>
                  <Image
                    src={"/images/img4.png"}
                    alt={"img-about-saxon"}
                    width={570}
                    height={350}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "Ro‘yhatdan o‘tish" && (
            <div className={"col-span-9"}>
              <Title>Ro‘yhatdan o‘tish</Title>
            </div>
          )}

          {activeTab === "Kurs mazmuni" && (
            <div className={"col-span-9"}>
              <Title>Kurs mazmuni</Title>

              <div className={"grid grid-cols-12 gap-x-[30px] mt-[30px]"}>
                <div className={"col-span-5"}>
                  <p className={"text-[#5A5A5A]"}>
                    Saksoniya universitetlarida asosiy o&apos;quv kursini
                    boshlashdan oldin qo&apos;shimcha tayyorgarlikka muhtoj
                    bo&apos;lgan talabalar uchun mo&apos;ljallangan maxsus
                    tayyorgarlik dasturlari va kollejlar mavjud. Ushbu dasturlar
                    odatda til ko&apos;nikmalarini yaxshilashga (masalan, nemis
                    yoki ingliz), tanlangan sohada muvaffaqiyatli o&apos;rganish
                    uchun zarur bo&apos;lgan akademik ko&apos;nikmalar va
                    bilimlarni tayyorlashga qaratilgan. Tayyorgarlik kollejlari,
                    shuningdek, universitetning madaniy va o&apos;quv hayotiga
                    kirishni taklif qilishi mumkin, bu esa talabalarga yangi
                    o&apos;quv muhitiga yaxshiroq moslashishga yordam beradi.
                  </p>
                </div>
                <div className={"col-span-7"}>
                  <Image
                    src={"/images/img5.png"}
                    alt={"img-about-saxon"}
                    width={570}
                    height={350}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "Voqealar" && (
            <div className={"col-span-9"}>
              <Title>Voqealar</Title>
            </div>
          )}

          {activeTab === "Kurs to‘lovlari" && (
            <div className={"col-span-9"}>
              <Title>Kurs to‘lovlari</Title>
            </div>
          )}

          {activeTab === "Baholash testi" && (
            <div className={"col-span-9"}>
              <Title>Baholash testi</Title>
            </div>
          )}

          {activeTab === "Aloqa" && (
            <div className={"col-span-9"}>
              <Title>Aloqa</Title>

              <div className={"flex items-start justify-between mb-[70px]"}>
                <motion.div
                  initial={{ opacity: 0, translateY: "-70px" }}
                  animate={{ opacity: 100, translateY: "0px" }}
                  transition={{ duration: 0.4 }}
                >
                  <div>
                    <h4 className={"text-[20px] my-[20px]"}>Manzil</h4>
                    <p className={"text-[#5A5A5A]"}>
                      Вигардштрассе 17, 01097 Дрезден
                    </p>
                  </div>

                  <div>
                    <h4 className={"text-[20px] my-[20px]"}>Telefon</h4>
                    <div className={"flex gap-x-[3px] text-[#5A5A5A]"}>
                      <p>Телефон:</p>
                      <a href={"tel:0351 564-0"}>0351 564-0</a>
                    </div>
                    <div className={"flex gap-x-[3px] text-[#5A5A5A]"}>
                      <p>Факс:</p>
                      <a href={"tel:0351 564-60099"}>0351 564-60099</a>
                    </div>
                  </div>

                  <div>
                    <h4 className={"text-[20px] my-[20px]"}>Email</h4>
                    <a
                      href={"mailto:info@saxonscienceliaison.uz"}
                      className={"text-[#5A5A5A]"}
                    >
                      info@saxonscienceliaison.uz
                    </a>
                  </div>

                  <div>
                    <h4 className={"text-[20px] my-[20px]"}>
                      Ijtimoiy tarmoqlar
                    </h4>
                    <a
                      href={"mailto:info@saxonscienceliaison.uz"}
                      className={"text-[#5A5A5A]"}
                    >
                      info@saxonscienceliaison.uz
                    </a>
                  </div>
                </motion.div>

                <motion.form
                  className={"max-w-[690px] "}
                  initial={{ opacity: 0, translateY: "70px" }}
                  animate={{ opacity: 100, translateY: "0px" }}
                  transition={{ duration: 0.4 }}
                >
                  <div>
                    <h4 className={"text-[20px] my-[20px]"}>
                      Murojaat qoldiring
                    </h4>
                    <p className={"mb-[20px] text-[#5A5A5A]"}>
                      Maslahat olish, taklif yuborish uchun o‘z murojaatingizni
                      batafsil yozib yuboring. Tez orada siz bilan
                      bog‘lanishadi.
                    </p>
                  </div>
                  <div
                    className={"flex justify-between gap-x-[30px] mb-[30px]"}
                  >
                    <input
                      type={"text"}
                      className={
                        "border border-[#007C4C] rounded-[6px] max-w-[330px] w-full  px-4 py-2"
                      }
                      placeholder={"F.I.SH."}
                    />

                    <input
                      type={"email"}
                      className={
                        "border border-[#007C4C] rounded-[6px] max-w-[330px] w-full  px-4 py-2"
                      }
                      placeholder={"Email"}
                    />
                  </div>

                  <input
                    type={"text"}
                    className={
                      "border border-[#007C4C] rounded-[6px] mb-[30px] w-full  px-4 py-2"
                    }
                    placeholder={"Murojaat mavzusi"}
                  />

                  <textarea
                    className={
                      "border border-[#007C4C] rounded-[6px] mb-[30px]  w-full  px-4 py-2 "
                    }
                    placeholder={"Murojaat matni"}
                    rows={8}
                  ></textarea>

                  <button
                    className={
                      "bg-[#00965C] text-white max-w-[210px] w-full py-3 rounded-[6px] uppercase hover:bg-[#00AF6C] transition-all duration-300"
                    }
                  >
                    Yuborish
                  </button>
                </motion.form>
              </div>
            </div>
          )}

          {activeTab === "Sharh" && (
            <div className={"col-span-9"}>
              <Title>Sharhlar</Title>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
