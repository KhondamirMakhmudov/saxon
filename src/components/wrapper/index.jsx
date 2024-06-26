import React from "react";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Footer from "@/components/footer";

const Wrapper = ({ children }) => {
  return (
    <div className={""}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
