import React from "react";
import Section from "../layout/Section";

import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { RiNextjsLine } from "react-icons/ri";
import { CgVercel } from "react-icons/cg";
import { DiMongodb } from "react-icons/di";

const skills = [
  {
    tech: "Html",
    icon: <FaHtml5 size={32} color="orange" />,
  },
  {
    tech: "Css",
    icon: <FaCss3Alt size={32} color="blue" />,
  },
  {
    tech: "TailwindCss",
    icon: <SiTailwindcss size={32} color="lightblue" />,
  },
  {
    tech: "JavaScript",
    icon: <IoLogoJavascript size={32} color="yellow" />,
  },
  {
    tech: "ReactJs  ",
    icon: <FaReact size={32} color="lightblue" />,
  },
  {
    tech: "NextJs",
    icon: <RiNextjsLine size={32} />,
  },
  {
    tech: "Git/GitLab/GitHub",
    icon: <FaGitAlt size={32} color="orange" />,
  },
  {
    tech: "Figma/Mockups",
    icon: <FiFigma size={32} />,
  },
  {
    tech: "Vercel",
    icon: <CgVercel size={32} color="white" />,
  },
  {
    tech: "NodeJs",
    icon: <FaNodeJs size={32} color="green" />,
  },
  {
    tech: "ExpressJs",
    icon: <SiExpress size={32} color="white" />,
  },
  {
    tech: "MongoDb",
    icon: <DiMongodb size={32} color="darkgreen" />,
  },
];

const Skills = () => {
  return (
    <Section title="My Skills" id="skills">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
        {skills.map((s, i) => (
          <span className="col-span-1 flex items-center gap-2 text-2xl" key={i}>
            {s.icon}
            <p>{s.tech}</p>
          </span>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
