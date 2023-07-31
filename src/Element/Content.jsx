import React from "react";
import Logo from "./Content/Logo";
import MainContent from "./Content/MainContent";
import Footer from "./Content/Footer";

const Content = () => {
  return (
    <section className="flex flex-col px-[80px] py-[64px] z-10 relative justify-between table:justify-start table:gap-[128px] mobile:gap-[64px] h-screen mobile:px-[20px] overflow-y-auto overflow-x-hidden">
      <Logo />
      <MainContent />
      <Footer />
    </section>
  );
};

export default Content;
