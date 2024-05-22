import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-5 lg:justify-between">
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        className="flex flex-col gap-5"
      >
        <h1 className="font-bold text-3xl lg:text-5xl">
          Hey, I&apos;m João Victor a Web Developer
        </h1>
        <blockquote className="font-medium text-xl lg:text-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
          I&apos;m diving into programming, with the goal of specializing in
          front-end development. I am currently looking for internship
          opportunities.
        </blockquote>
        <div className="flex items-center gap-5">
          <Link href={"mailto:joaodematos127@gmail.com"} target="_blank">
            <Button variant={"primary"}>Get In Touch</Button>
          </Link>
          <Link href={"https://github.com/joaonative"} target="_blank">
            <Button variant={"secondary"}>Browse GitHub</Button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 10 }}
        animate={{ x: 0 }}
        className="flex justify-center lg:w-1/2"
      >
        <Image
          priority
          src={"/pic.webp"}
          alt="João Victor profile picture"
          width={512}
          height={512}
          className="rounded-full object-cover w-52 h-52 bg-center lg:h-64 lg:w-64 xl:h-80 xl:w-80"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
