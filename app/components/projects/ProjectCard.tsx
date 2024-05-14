import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

interface Props {
  name: string;
  description: string;
  gitHub: string;
  link: string;
  image: string;
}

const ProjectCard = ({ name, description, gitHub, link, image }: Props) => {
  return (
    <div className="col-span-1 grid md:grid-cols-2 items-center gap-2 lg:gap-0 3xl:gap-12">
      <Image
        src={image}
        alt={`${name} project image`}
        width={512}
        height={256}
        className="h-44 md:h-60 3xl:h-80 3xl:object-cover 3xl:w-full object-contain"
      />
      <div className="col-span-1 flex flex-col gap-3">
        <h1 className="text-2xl">{name}</h1>
        <blockquote className="text-xl font-medium text-white/60">
          {description}
        </blockquote>
        <div className="flex items-center gap-5">
          <Link href={link} target="_blank">
            <Button variant="primary">Demonstração</Button>
          </Link>
          <Link href={gitHub} target="_blank">
            <Button variant="secondary">Repositório</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
