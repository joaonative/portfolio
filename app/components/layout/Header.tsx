"use client";

import { Menu, Terminal, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="px-5 lg:px-16 xl:px-24 py-6 flex flex-col gap-5">
      <header className="flex items-center justify-between text-xl">
        <nav className="space-x-4 lg:block hidden">
          <Link href={"/"}>Home</Link>
          <Link href={"/#projects"}>Projects</Link>
          <Link href={"/#aboutme"}>About</Link>
        </nav>
        <Link href={"/CV.pdf"} target="_blank" className="lg:block hidden">
          Curriculum
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </header>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-5 text-xl">
          <Link onClick={() => setIsOpen(false)} href={"/#projects"}>
            Projects
          </Link>
          <Link onClick={() => setIsOpen(false)} href={"/#aboutme"}>
            About
          </Link>
          <a onClick={() => setIsOpen(false)} href={"/CV.pdf"} target="_blank">
            Curriculum
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
