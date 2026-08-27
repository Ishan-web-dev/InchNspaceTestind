import React from "react";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Intro from "./Intro";
import ServicesSplit from "./ServicesSplit";
import PortfolioPreview from "./PortfolioPreview";
import WhyUs from "./WhyUs";
import Process from "./Process";
import CtaSection from "./CtaSection";
import Stats from "./Stats";

const HomeMain = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <ServicesSplit />
      <PortfolioPreview />
      <WhyUs />
      <Process />
      <Stats />
      <CtaSection />
    </div>
  );
};

export default HomeMain;
