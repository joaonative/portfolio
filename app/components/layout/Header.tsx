"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 lg:px-32 py-6">
      <div className="flex items-center">
        <Terminal className="text-primary" size={32} />
        <h1 className="text-primary font-medium text-xl lg:text-2xl">Matos</h1>
      </div>
      <div className="flex items-center gap-2 lg:gap-5 text-base lg:text-xl">
        <Link href={"/#projects"}>Projects</Link>
        <Link href={"/#aboutme"}>About Me</Link>
        <Link href={"/#"}>Curriculum</Link>
      </div>
    </header>
  );
};

export default Header;
