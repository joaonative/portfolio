"use client";

import Image from "next/image";
import Projects from "./components/Projects";
import Button from "./components/Button";
import Section from "./components/Section";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="px-5 lg:px-32 flex flex-col gap-8 mt-5 lg:mt-32 mb-5"
    >
      <div className="flex lg:flex-row flex-col items-center gap-5 lg:justify-between">
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          className="flex flex-col gap-5"
        >
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-3xl lg:text-5xl">
              Front-end Developer
            </h1>
            <span aria-label="computer emoji" className="text-3xl lg:text-5xl">
              💻
            </span>
          </div>
          <blockquote className="font-medium text-xl lg:text-2xl max-w-7xl">
            <span aria-label="hands waving emoji">👋</span> Hello! I'm diving
            into web development, aiming to specialize in front-end with React.
            My focus: crafting responsive designs with accessibility in mind.
            Any tips for a beginner like me?
          </blockquote>
          <div className="flex items-center gap-5">
            <Link href={""} target="_blank">
              <Button variant={"primary"}>Contact Me</Button>
            </Link>
            <Link href={"https://github.com/joaonative"} target="_blank">
              <Button variant={"secondary"}>My GitHub</Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 10 }}
          animate={{ x: 0 }}
          className="flex justify-center lg:w-1/2"
        >
          <Image
            src={"/pic.png"}
            alt="João Victor profile picture"
            width={512}
            height={512}
            className="rounded-full img object-cover w-52 h-52 bg-center lg:h-80 lg:w-80"
          />
        </motion.div>
      </div>
      <Projects />
      <Section title="About Me" id="aboutme">
        <div></div>
      </Section>
    </motion.main>
  );
}
