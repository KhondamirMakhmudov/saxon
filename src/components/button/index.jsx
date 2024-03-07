import React from "react";
import Link from "next/link";

const Button = ({ children, url = "#" }) => {
  return (
    <button
      className={
        "bg-[#00965C] hover:bg-[#40A161] transition-all duration-300 py-2 px-6 uppercase text-[#fff] rounded-[6px]"
      }
    >
      <Link href={url}>{children}</Link>
    </button>
  );
};

export default Button;
