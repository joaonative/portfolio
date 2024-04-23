"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  id: string;
}

const Section = ({ children, title, id }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id={title}
      className="flex flex-col gap-8"
    >
      <motion.h1
        initial={{ x: -20 }}
        whileInView={{ x: 1 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-bold text-center"
      >
        {title}
      </motion.h1>
      <section id={title}>{children}</section>
    </motion.section>
  );
};

export default Section;
