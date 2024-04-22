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
      className={`${classes} py-1 px-3 rounded flex items-center gap-2 text-xl font-medium`}
    >
      {children}
    </button>
  );
};

export default Button;
