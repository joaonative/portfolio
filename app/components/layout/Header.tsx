"use client";

import { Menu, Terminal, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="px-5 lg:px-16 xl:px-32 py-6 flex flex-col gap-5">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <Terminal className="text-primary" size={32} />
          <h1 className="text-primary font-medium text-xl lg:text-2xl">
            Matos
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-2 lg:gap-5 text-base lg:text-xl">
          <Link href={"/#projects"}>Projetos</Link>
          <Link href={"/#aboutme"}>Sobre Mim</Link>
          <a href={"/CV.pdf"} target="_blank">
            Currículo
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </header>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 text-xl">
          <Link onClick={() => setIsOpen(false)} href={"/#projects"}>
            Projetos
          </Link>
          <Link onClick={() => setIsOpen(false)} href={"/#aboutme"}>
            Sobre Mim
          </Link>
          <a onClick={() => setIsOpen(false)} href={"/CV.pdf"} target="_blank">
            Currículo
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
