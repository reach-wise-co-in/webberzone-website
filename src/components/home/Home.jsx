"use client";
import Header from "../../utilities/header/Header";
import Collaborate from "./collaborate/Collaborate";
import Help from "./help/Help";
import Hero from "./herosection/Hero";
import "./Home.css";
import Skills from "./skills/Skills";
import Testimonials from "./testimonial/Testimonials";
import { Helmet } from "@/lib/Helmet";
import { SITE } from "@/lib/site";


function Home() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${SITE.url}/`} />
      </Helmet>
    <Header/>
      <Hero/>

      
      {/* ==============how can we help you================================================================ */}
      <Help/>
      {/* ====================== Collaborate ================================================================ */}
      <Collaborate/>
      {/* ====================== Skills ================================================================ */}
      <Skills/>
      {/* ====================== Testimonial ================================================================ */}
      <Testimonials/>
 
    </>
  );
}

export default Home;
