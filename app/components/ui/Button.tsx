import Image from "next/image";
import { ReactNode } from "react";
import GHub from "../../public/github.svg";

interface Props {
  children: ReactNode;
  variant: "primary" | "secondary";
}

const Button = ({ children, variant }: Props) => {
  const classes = `${
    variant === "primary"
      ? "bg-primary text-white"
      : variant === "secondary" && "bg-white text-[#121212]"
  }`;
  return (
    <button
      className={`${classes} py-4 px-4 rounded-2xl flex items-center gap-2 text-xl font-medium shadow-2xl`}
    >
      {children}
    </button>
  );
};

export default Button;
