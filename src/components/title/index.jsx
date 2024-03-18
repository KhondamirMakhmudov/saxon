import React from "react";

const Title = ({ children }) => {
  return (
    <h1
      className={
        "font-bold xl:text-4xl lg:text-2xl text-xl  font-philosopher uppercase"
      }
    >
      {children}
    </h1>
  );
};

export default Title;
