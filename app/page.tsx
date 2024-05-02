"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Education from "./components/about/Education";
import Skills from "./components/skils/Skills";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="px-5 lg:px-32 flex flex-col gap-8 mt-5 lg:mt-32 pb-8"
    >
      <Hero />
      <Projects />
      <About />
      <Education />
      <Skills />
    </motion.main>
  );
}
