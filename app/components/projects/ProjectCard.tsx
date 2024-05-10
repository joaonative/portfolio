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
    <div className="col-span-1 bg-[#222222] rounded-lg">
      <Image
        src={image}
        alt={`${name} project image`}
        width={512}
        height={256}
        className="w-full 3xl:h-56 lg:h-48 border-primary object-cover rounded-tr-lg rounded-tl-lg bg-primary"
      />
      <div className="flex flex-col p-3 gap-5">
        <blockquote className="text-xl font-medium text-white/60">
          {description}
        </blockquote>
        <div className="flex items-center gap-5">
          <Link href={link} target="_blank">
            <Button variant="primary">Testar Projeto</Button>
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
