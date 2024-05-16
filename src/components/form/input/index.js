import React, { forwardRef, useRef } from "react";
import { motion } from "framer-motion";

const Input = forwardRef(function myFunction(
  { name, type, ...otherProps },
  ref,
) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: "-90px" }}
      animate={{ opacity: 100, translateX: "0px" }}
      transition={{ duration: 0.75 }}
      className={""}
    >
      <label className={"text-lg font-philosopher mb-[30px] text-white"}>
        {name}
      </label>{" "}
      <br />
      <input
        name={name}
        type={`${type}`}
        ref={ref}
        {...otherProps}
        className={
          "border-[2px] border-green-400 w-full p-2 rounded-[5px] placeholder:font-philosopher mt-[10px] focus:bg-green-100 "
        }
      />
    </motion.div>
  );
});

export default Input;
