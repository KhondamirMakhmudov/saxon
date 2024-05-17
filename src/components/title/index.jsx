import React from "react";
import { motion } from "framer-motion";

const Title = ({ children }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, translateY: "-100px" }}
      animate={{ opacity: 100, translateY: "0px" }}
      transition={{ duration: 0.7 }}
      className={
        "font-bold xl:text-4xl lg:text-2xl text-xl  font-philosopher uppercase"
      }
    >
      {children}
    </motion.h1>
  );
};

export default Title;
