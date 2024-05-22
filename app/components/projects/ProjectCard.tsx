import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  gitHub: string;
  link: string;
  image: string;
  imageDemo: string;
  techs: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="col-span-1 flex flex-col gap-2">
      <div className="lg:gap-6 gap-2 flex lg:flex-row flex-col">
        <Link
          href={project.gitHub}
          target="_blank"
          className="group lg:w-1/2 lg:relative"
        >
          <div className="lg:relative overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.name} landing image`}
              width={1000}
              height={512}
              className="object-cover w-full h-52  md:h-80 lg:h-96 bg-primary"
            />
            <div className="lg:absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
          </div>
          <div className="lg:absolute inset-0 lg:flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
            <h1 className="text-xl font-bold text-white">GitHub Repository</h1>
          </div>
        </Link>

        <Link
          href={project.link}
          target="_blank"
          className="group lg:w-1/2 lg:relative"
        >
          <div className="lg:relative overflow-hidden">
            <Image
              src={project.imageDemo}
              alt={`${project.name} demo image`}
              width={1000}
              height={512}
              className="object-cover w-full h-52  md:h-80 lg:h-96 bg-primary"
            />
            <div className="lg:absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
          </div>
          <div className="lg:absolute inset-0 lg:flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
            <h1 className="text-xl font-bold text-white">Project Demo</h1>
          </div>
        </Link>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{project.name}</h1>
        <blockquote className="text-xl font-medium text-black/80">
          {project.description}
        </blockquote>
        <div className="flex lg:flex-row gap-2 flex-col lg:items-center">
          <h2 className="text-lg font-bold">Built With:</h2>
          <p className="text-lg font-medium">
            {project.techs.map((tech: string) => (
              <>{tech} </>
            ))}
          </p>
        </div>
        <div className="lg:hidden flex gap-2">
          <Link href={project.gitHub}>
            <Button variant="secondary">GitHub Repo</Button>
          </Link>
          <Link href={project.link}>
            <Button variant="primary">Project Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
