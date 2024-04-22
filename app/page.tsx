import Image from "next/image";
import Projects from "./components/Projects";
import Button from "./components/Button";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className="px-5 lg:px-32 flex flex-col gap-8 mt-5 lg:mt-32 mb-5">
      <div className="flex lg:flex-row flex-col items-center gap-5 lg:justify-between">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl lg:text-5xl">
            Front-end Developer
          </h1>
          <blockquote className="font-medium text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            commodo porttitor metus, quis sodales tortor euismod vel.
          </blockquote>
          <div className="flex items-center gap-5">
            <Button variant={"primary"}>Contact Me</Button>
            <Button variant={"secondary"}>My GitHub</Button>
          </div>
        </div>
        <Image
          src={"/pic.jpg"}
          alt="joaonative github avatar"
          width={256}
          height={256}
          className="rounded-full bg-primary"
        />
      </div>
      <Projects />
      <Section title="About Me">
        <div></div>
      </Section>
    </main>
  );
}
