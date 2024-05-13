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
        "Uma plataforma de criação de eventos e comunidades em parques, usuários navegam em uma interface amigável para participar de eventos!",
      image: "/iparque.png",
      gitHub: "https://github.com/joaonative/tcc-front",
      link: "https://iparque.vercel.app",
    },
    {
      name: "EducaPlan",
      description:
        "Criação e manutenção de planejamentos de aulas para professores, professores exportam seus planejamentos facilmente!",
      image: "/educaplan.png",
      gitHub: "https://github.com/joaonative/educaplan",
      link: "https://educaplan.vercel.app",
    },
  ];
  return (
    <Section title="Meus Projetos" id="projects">
      <ul className="grid-cols-1 grid gap-6 md:gap-12">
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
