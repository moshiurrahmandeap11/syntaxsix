"use client";

import { useEffect } from "react";
import AOS from "aos";


import Hero from "@/components/Hero";
import Services from "./services/page";
import Projects from "./projects/page";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: false,    // only animate once
    });
  }, []);

  return (
    <div>
    <main>
      <div data-aos="fade-down">
        <Hero />
      </div>
      <div data-aos="fade-up">
        <Projects />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Services />
      </div>
    </main>
    </div>
  );
}
