import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  id: string;
}

const Section = ({ children, title, id }: Props) => {
  return (
    <section id={title} className="flex flex-col gap-8">
      <h1 className="text-4xl lg:text-5xl font-bold text-center">{title}</h1>
      <section id={title}>{children}</section>
    </section>
  );
};

export default Section;
