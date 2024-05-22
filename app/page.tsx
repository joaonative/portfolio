"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="px-5 md:px-16 lg:px-24 flex flex-col gap-12 md:gap-20 mt-8 pb-8"
    >
      <Hero />
      <Projects />
      <About />
    </motion.main>
  );
}
