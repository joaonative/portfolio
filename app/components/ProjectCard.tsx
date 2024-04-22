import Image from "next/image";
import Button from "./Button";
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
        className="w-full h-56 border-primary object-cover rounded-tr-lg rounded-tl-lg bg-primary"
      />
      <div className="flex flex-col p-5 gap-5">
        <blockquote className="text-xl font-medium text-white/60 line-clamp-3">
          {description}
        </blockquote>
        <div className="flex items-center justify-between">
          <Link href={link}>
            <Button variant="primary">Try Project</Button>
          </Link>
          <Link href={gitHub}>
            <Button variant="secondary">View Github</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
