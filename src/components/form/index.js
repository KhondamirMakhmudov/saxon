import React, { useRef } from "react";
import Input from "@/components/form/input";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Form = () => {
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
    const enteredMessage = message.current.value;

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    if (!enteredName.trim("") || !enteredEmail.includes("@")) {
      toast.error(
        "Iltimos, ism-sharifingizni va pochtangizni (to'g'ri) kiriting",
        {
          duration: 4000,
          position: "top-right",
        },
      );
    } else {
      toast.success(
        "Rahmat!. Batafsil ma'lumot tez orada pochtangizga yuboriladi.",
        {
          duration: 4000,
          position: "top-right",
        },
      );
    }
    event.currentTarget.reset();

    return console.log([enteredEmail, enteredName, enteredMessage]);
  };

  return (
    <motion.form
      initial={{ opacity: 0, translateX: "-100px" }}
      animate={{ opacity: 100, translateX: "0px" }}
      transition={{ duration: 0.7 }}
      onSubmit={handleSubmit}
      className={
        "lg:col-span-6 col-span-12 p-4 border-green-400 border-[2px] rounded-[10px] bg-green-600"
      }
    >
      <Input
        ref={name}
        type={"text"}
        name={"FIO*"}
        placeholder={"Ism-sharifingizni kiriting"}
      />{" "}
      <br />
      <Input
        ref={email}
        type={"email"}
        name={"Email*"}
        placeholder={"E-mail pochtangizni kiriting"}
      />{" "}
      <br />
      <textarea
        ref={message}
        cols={30}
        rows={5}
        className={
          "w-full p-2 border rounded-[5px] mb-[20px] focus:bg-green-100 text-gray-400"
        }
        defaultValue={"Taklif va savollaringiz bo'lsa yuboring"}
      ></textarea>
      <div>
        <button
          className={
            " bg-green-900 hover:bg-green-8 py-2 px-10 text-white rounded-[6px] font-philosopher transition-all duration-300"
          }
        >
          Yuborish
        </button>
      </div>
    </motion.form>
  );
};

export default Form;
