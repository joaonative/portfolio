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
        "An outdoor events platform that allows users to create and participate in events and communities",
      image: "/iparque.png",
      gitHub: "https://github.com/joaonative/tcc-front",
      link: "https://iparque.vercel.app",
    },
    {
      name: "EducaPlan",
      description:
        "An a lesson planning manager to make teachers work easier, users create, edit and delete plans",
      image: "/educaplan.png",
      gitHub: "https://github.com/joaonative/educaplan",
      link: "https://educaplan.vercel.app",
    },
  ];
  return (
    <Section title="My Projects" id="projects">
      <ul className="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 grid gap-12">
        {projects.map((project, i) => (
          <motion.li
            variants={itemVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: i * 0.2 }}
            key={i}
          >
            <ProjectCard
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              gitHub={project.gitHub}
            />
          </motion.li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
