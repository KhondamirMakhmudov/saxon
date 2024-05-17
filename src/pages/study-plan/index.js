import React, { useState } from "react";
import Menu from "@/components/menu";
import Wrapper from "@/components/wrapper";
import Title from "@/components/title";
import { motion } from "framer-motion";

const StudyPlan = () => {
  const [chooseButton, setChooseButton] = useState(
    "Universitetlarning turlari",
  );

  const choosePlan = (plan) => {
    setChooseButton(plan);
  };

  return (
    <Wrapper>
      <Menu active={4} />
      <main
        className={"container grid grid-cols-12 gap-x-2 my-[100px] p-4 lg:p-0"}
      >
        <motion.div
          className={"col-span-12 mb-[30px]"}
          initial={{ opacity: 0, translateX: "-100px" }}
          animate={{ opacity: 100, translateX: "0px" }}
          transition={{ duration: 0.7 }}
        >
          <button
            className={`underline text-[#00BDAC] ${chooseButton === "Universitetlarning turlari" ? "text-[#00BDAC]" : "text-black"} font-philosopher mr-[30px] text-lg`}
            onClick={() => choosePlan("Universitetlarning turlari")}
          >
            Universitetlarning turlari
          </button>
          <button
            className={`underline ${chooseButton === "Daraja" ? "text-[#00BDAC]" : "text-black"}  font-philosopher mr-[30px] text-lg`}
            onClick={() => choosePlan("Daraja")}
          >
            Daraja
          </button>
        </motion.div>
        {chooseButton === "Universitetlarning turlari" && (
          <div className={"col-span-12 grid grid-cols-12 gap-x-2"}>
            <motion.div
              className={"col-span-12 lg:col-span-8"}
              initial={{ opacity: 0, translateY: "-100px" }}
              animate={{ opacity: 100, translateY: "0px" }}
              transition={{ duration: 0.7 }}
            >
              <Title>Qaysi universitet men uchun to`g`ri?</Title>

              <ul>
                <li className={""}>
                  <h3
                    className={
                      "text-[#00BDAC] font-philosopher text-xl capitalize my-[15px]"
                    }
                  >
                    universitet
                  </h3>
                  <p>
                    Universitetlar birinchi navbatda akademik ishlarga
                    qaratilgan va tadqiqotda katta rol o'ynaydi. Bu ularning eng
                    katta mavzularni taklif qilishining sabablaridan biridir.
                    O'qishdan keyin doktorlik darajasiga akademik yo'lni davom
                    ettirishni xohlayotganini biladigan har bir kishi, shuning
                    uchun universitetda eng yaxshi qo'llarda. Shifokorlar yoki
                    bo'lajak o'qituvchilarning boshqa iloji yo'q. Universitetda
                    o'qish uchun zaruriy shart - bu umumiy yoki fanga oid
                    universitetga kirish malakasi.
                  </p>
                </li>
                <li>
                  <h3
                    className={
                      "text-[#00BDAC] font-philosopher text-xl capitalize my-[15px]"
                    }
                  >
                    Amaliy fanlar kolleji
                  </h3>
                  <p>
                    Amaliy fanlar universitetlari (texnik kollejlar) ko'proq
                    amaliy yo'naltirilgan. Universitetlar bilan solishtirganda,
                    ularning fanlari doirasi ancha cheklangan, ammo ko'plab
                    texnik kollejlar amaliy kompaniyalar bilan hamkorlik qiladi.
                    Agar siz texnikumda o'qishni istasangiz, sizga o'rta maktab
                    diplomi, texnik kollejga kirish malakasi yoki fanga oid
                    universitetga kirish malakasi kerak.
                  </p>
                </li>
                <li>
                  <h3
                    className={
                      "text-[#00BDAC] font-philosopher text-xl capitalize my-[15px]"
                    }
                  >
                    San'at kolleji
                  </h3>
                  <p>
                    Qobiliyat imtihonida badiiy iqtidorini isbotlay oladigan har
                    bir kishi ba'zan o'rta maktab diplomisiz ham san'atni
                    o'rganish imkoniyatiga ega bo'ladi. San'at va musiqa
                    kollejlari universitetlarga teng bo'lib, sizga tasviriy,
                    ijodiy va sahna san'ati hamda musiqa fanlari bo'yicha
                    o'qitishni taklif qiladi. O'ziga xos xususiyat - taniqli
                    orkestrlar yoki teatrlar bilan hamkorlik qilish va
                    muvaffaqiyatli rassomlar bilan almashish.
                  </p>
                </li>
                <li>
                  <h3
                    className={
                      "text-[#00BDAC] font-philosopher text-xl capitalize my-[15px]"
                    }
                  >
                    Amaliy fanlar kolleji
                  </h3>
                  <p>
                    Amaliy fanlar universitetlari (texnik kollejlar) ko'proq
                    amaliy yo'naltirilgan. Universitetlar bilan solishtirganda,
                    ularning fanlari doirasi ancha cheklangan, ammo ko'plab
                    texnik kollejlar amaliy kompaniyalar bilan hamkorlik qiladi.
                    Agar siz texnikumda o'qishni istasangiz, sizga o'rta maktab
                    diplomi, texnik kollejga kirish malakasi yoki fanga oid
                    universitetga kirish malakasi kerak.
                  </p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 100, translateY: "0px" }}
              transition={{ duration: 0.7 }}
              className={
                "lg:col-span-4 col-span-12 bg-[#00BDAC] rounded-[30px] lg:mt-0 mt-[30px]"
              }
            >
              <h1
                className={
                  "lg:-rotate-[20deg] rotate-0 text-3xl font-philosopher text-[#00BDAC] bg-white mt-[10px] lg:mx-0  mx-2  p-2 rounded-[20px]"
                }
              >
                To'g'ri ma'lumotga ega bo'ling - yaxshiroq boshlang
              </h1>

              <p className={"mt-0 lg:mt-[100px] p-[20px] text-white text-lg"}>
                Bitirdi, dunyo oyoqlaringda - endi u boshlanadi! Lekin aslida
                nima? Universitetda o'qiysizmi? Yoki amaliy fanlar
                universitetida yoki Saksoniya kasb-hunar akademiyasida ikki
                tomonlama asosda amaliyotga yo'naltirilgan yondashuvdan
                boshlashni afzal ko'rasizmi? <br /> Siz allaqachon rejaga amal
                qilyapsizmi? Sinf! Haligacha o'qishni xohlaydimi yoki nimani
                xohlashini aniq bilmagan har bir kishi uchun turli xil o'quv
                yo'nalishi bo'yicha takliflar mavjud, shu jumladan murakkab
                orientatsiya testlari. Hochschulkompass va ZEIT'dan qiziqish
                testlari ayniqsa foydali bo'lishi mumkin .
              </p>
            </motion.div>
          </div>
        )}
        {chooseButton === "Daraja" && (
          <div className={"col-span-12"}>
            <Title>Qaysi daraja men uchun to'g'ri?</Title>

            <ul>
              <motion.li
                className={""}
                initial={{ opacity: 0, translateX: "-100px" }}
                animate={{ opacity: 100, translateX: "0px" }}
                transition={{ duration: 0.7 }}
              >
                <h3
                  className={
                    "text-[#00BDAC] font-philosopher text-xl capitalize my-[15px]"
                  }
                >
                  Bakalavr
                </h3>
                <p>
                  Sizning chiptangiz: Bakalavr va magistr darajalari xalqaro
                  miqyosda tan olingan va barcha universitetlarda mavjud.
                  Bakalavr darajasi asos bo'lib - uch yoki to'rt yildan keyin
                  birinchi ilmiy daraja bilan. Shundan so'ng, magistrlik
                  darajasi mumkin - yoki tanaffus. Siz o'z kasbiy hayotingizni
                  bakalavr darajasidan boshlashingiz mumkin. Siz
                  universitetlarda, san'at kollejlarida, amaliy fanlar
                  universitetlarida va Saksoniya kasb-hunar akademiyasida
                  bakalavr darajasini olishingiz mumkin.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, translateX: "100px" }}
                animate={{ opacity: 100, translateX: "0px" }}
                transition={{ duration: 0.7 }}
              >
                <h3
                  className={
                    "text-[#00BDAC] font-philosopher text-xl capitalize my-[15px]"
                  }
                >
                  Magistratura
                </h3>
                <p>
                  Siz ko'proq fanga qiziqasizmi, ixtisoslashmoqchimisiz yoki
                  kasbiy bilimingizni yangi bosqichga olib chiqishni
                  xohlaysizmi? Keyin universitet, san'at kolleji yoki amaliy
                  fanlar universitetining magistraturasi sizning tanlovingiz.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, translateX: "-100px" }}
                animate={{ opacity: 100, translateX: "0px" }}
                transition={{ duration: 0.7 }}
              >
                <h3
                  className={
                    "text-[#00BDAC] font-philosopher text-xl capitalize my-[15px]"
                  }
                >
                  Davlat ekspertizasi/davlat ekspertizasi
                </h3>
                <p>
                  Ba'zi kurslar har doim davlat imtihonlari (davlat imtihonlari
                  deb ham ataladi) bilan tugaydi: inson, veterinariya va
                  stomatologiya, farmatsiya, oziq-ovqat kimyosi va huquq - va
                  Saksoniyada o'qituvchilar malakasini oshirish kurslari:
                  Birinchi davlat imtihonidan so'ng siz tayyorgarlik xizmatini
                  qilasiz. (stajirovka) bir necha oy davom etadigan ikkinchi –
                  amaliy – davlat imtihonini topshirasiz.
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, translateX: "100px" }}
                animate={{ opacity: 100, translateX: "0px" }}
                transition={{ duration: 0.7 }}
              >
                <h3
                  className={
                    "text-[#00BDAC] font-philosopher text-xl capitalize my-[15px]"
                  }
                >
                  diplom
                </h3>
                <p>
                  Yaxshi obro'ga ega klassik: Saksoniyada deyarli barcha
                  universitetlarda o'qishni diplom bilan (magistr darajasiga
                  qiyoslash mumkin) yakunlashingiz mumkin. Diplom darajalarining
                  bakalavr va magistr darajalariga nisbatan haqiqiy ustunligi
                  texnik sohalarda davom etmoqda. Bu erda diplom har doim ajoyib
                  obro'ga ega bo'lgan. Barcha diplom kurslari Yevropa oliy
                  taʼlim sohasida va Boloniya deklaratsiyasiga mos keladi.
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, translateX: "-100px" }}
                animate={{ opacity: 100, translateX: "0px" }}
                transition={{ duration: 0.7 }}
              >
                <h3
                  className={
                    "text-[#00BDAC] font-philosopher text-xl capitalize my-[15px]"
                  }
                >
                  rag'batlantirish
                </h3>
                <p>
                  Magistratura, diplom yoki davlat imtihonlarini muvaffaqiyatli
                  tugatgandan so'ng akademik ishlashni davom ettirishni istagan
                  har bir kishi dissertatsiya yozadi - odatda universitetda.
                  Rassomlarga san'at kollejida doktorlik darajasini olishga ham
                  ruxsat beriladi, lekin faqat ilmiy yo'nalishga ega bo'lgan
                  fanlar bo'yicha. Saksoniyada kooperativ doktorantura jarayoni
                  bilan texnik kollej bitiruvchilari uchun maxsus yo'l mavjud.
                  Universitet va texnik kollej professori o'zlarining
                  doktorantlarini birgalikda boshqaradilar, ular ham qo'shimcha
                  universitet kurslarini o'tashlari kerak. Ko'pincha bir necha
                  yil davom etadigan sa'y-harakatlarning mukofoti doktorlikdir.
                  Akademik martaba zinapoyasining keyingi bosqichi - bu
                  imtihondan o'tish va yuqoridagi yagona narsa - professorlikka
                  chaqirish.
                </p>
              </motion.li>
            </ul>
          </div>
        )}
      </main>
    </Wrapper>
  );
};

export default StudyPlan;
