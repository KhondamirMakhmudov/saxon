import React from "react";

const Title = ({ children }) => {
  return (
    <h1 className={"font-bold text-4xl font-philosopher uppercase"}>
      {children}
    </h1>
  );
};

export default Title;
