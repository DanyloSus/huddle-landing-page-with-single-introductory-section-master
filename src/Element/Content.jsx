import React from "react";
import Logo from "./Content/Logo";
import MainContent from "./Content/MainContent";
import Footer from "./Content/Footer";

const Content = () => {
  return (
    <section className="flex flex-col px-[80px] py-[64px] z-10 relative justify-between h-screen">
      <Logo />
      <MainContent />
      <Footer />
    </section>
  );
};

export default Content;
