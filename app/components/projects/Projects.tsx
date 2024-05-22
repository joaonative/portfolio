"use client";

import React from "react";
import Section from "../layout/Section";
import ProjectCard from "./ProjectCard";

import { motion } from "framer-motion";

const Projects = () => {
  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const projects = [
    {
      name: "iParque",
      description:
        "IParque is an events website, where people can meet, for various activities, such as sports, conversations, picnics and even birthdays, also helping people to meet, get out of the house, have fun, breathe the fresh air of the park , among other diverse activities.",
      image: "/projects/iparqueThumb.webp",
      imageDemo: "/projects/iparque.webp",
      gitHub: "https://github.com/joaonative/tcc-front",
      link: "https://iparque.vercel.app",
      techs: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind",
        "MongoDB",
        "Express",
        "Firestore",
        "Vercel",
      ],
    },
    {
      name: "EducaPlan",
      description:
        "EducaPlan is a 100% client-side webapp where teachers create and manage their lesson plans through an intuitive and practical interface, which allows easy export of plans.",
      image: "/projects/educaplanThumb.webp",
      imageDemo: "/projects/educaplan.webp",
      gitHub: "https://github.com/joaonative/educaplan",
      link: "https://educaplan.vercel.app",
      techs: ["React", "TypeScript", "Vite", "Tailwind", "Vercel"],
    },
  ];
  return (
    <Section title="Latest Projects" id="projects">
      <ul className="grid-cols-1 grid gap-6 md:gap-12">
        {projects.map((project, i) => (
          <motion.li
            variants={itemVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: i * 0.2 }}
            key={i}
          >
            <ProjectCard project={project} />
          </motion.li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
