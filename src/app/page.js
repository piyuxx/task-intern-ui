"use client";
import React, { useEffect } from "react";
import AOS from "aos";

import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Study from "@/components/Study";
import AboutApp from "@/components/AboutApp";
import Study1 from "@/components/Study1";
import FeatureSection from "@/components/FeatureSection";

import Note from "@/components/Queote";
import WorkWithUs from "@/components/Way";
import Vacancies from "@/components/Posts";
import Navbar from "@/components/Navbar";
import Way from "@/components/Way";
import Posts from "@/components/Posts";
import Chandigarh from "@/components/Chandigarh";
import Queote from "@/components/Queote";



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refreshHard();
  }, []);
  return (
    <div>
      <div className="px-12">
        <Navbar />
        <Menu />
        <Study />
        <AboutApp />
        <Chandigarh />
        <Study1 />
        <FeatureSection />
        <Queote />
        <Way />
        <Posts />
        <Footer />
      </div>
    </div>
  );
}
