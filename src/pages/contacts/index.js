import React, { useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import Title from "@/components/title";
import Form from "@/components/form";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const Contacts = () => {
  return (
    <div>
      <Header />
      <Menu active={7} />
      <main className={"  container py-[30px] my-[100px] p-2"}>
        <div className={""}>
          <Title>Biz bilan bog`laning</Title>
          <p className={"text-sm text-gray-400 mb-[30px]"}>
            * bilan belgilangan maydonlar majburiy va toʻldirilishi kerak.
          </p>

          <div className={"grid grid-cols-12 lg:gap-x-8 gap-y-8"}>
            <Form />
            <Toaster />
            <motion.div
              initial={{ opacity: 0, translateX: "100px" }}
              animate={{ opacity: 100, translateX: "0px" }}
              transition={{ duration: 0.7 }}
              className={"md:col-span-6 col-span-12"}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.641438597046!2d-1.3819748234154423!3d50.91185037168395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874715b4737d8cd%3A0x947be81e304698c7!2z0KHQsNC60YHQvtC9INCj0L7RgNGE!5e0!3m2!1sru!2s!4v1715859536916!5m2!1sru!2s"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={"w-full lg:h-full h-[400px] border shadow-2xl"}
              ></iframe>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
