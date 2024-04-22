import React from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Section title="My Projects">
      <div className="grid-cols-1 lg:grid-cols-4 grid gap-12">
        <ProjectCard
          name="iParque"
          description="An outdoor events platform that allows users to create and participate in events and communities"
          image="/iparque.png"
          gitHub="https://github.com/joaonative/tcc-front"
          link="https://iparque.vercel.app"
        />
        <ProjectCard
          name="EducaPlan"
          description="An a lesson planning manager to make teachers work easier, users create, edit and delete plans"
          image="/educaplan.png"
          gitHub="https://github.com/joaonative/educaplan"
          link="https://educaplan.vercel.app"
        />
      </div>
    </Section>
  );
};

export default Projects;
