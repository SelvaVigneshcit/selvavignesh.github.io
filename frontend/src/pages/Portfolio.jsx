import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import CareerEducation from "../components/CareerEducation";
import Hobbies from "../components/Hobbies";
import Character from "../components/Character";
import FamilyLife from "../components/FamilyLife";
import Quote from "../components/Quote";
import Connect from "../components/Connect";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2EEE5] antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CareerEducation />
        <Hobbies />
        <Character />
        <FamilyLife />
        <Quote />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
