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
import { Toaster } from "../components/ui/toaster";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#FAF5EC] text-[#2C1F14] antialiased">
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
      <Toaster />
    </div>
  );
};

export default Portfolio;
