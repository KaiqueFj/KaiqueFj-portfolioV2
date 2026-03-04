import { ProjectCardProps } from "@/app/types/Project-type";
import Image from "next/image";

export default function ProjectCard({ imageSrc, title, description, technologies, link, linkText }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-6 w-fit md:w-full rounded-lg max-h-fit shadow-xl bg-background p-6 space-y-4 transform duration-300 hover:scale-105">
      <div className="bg-primary-background p-4 rounded-lg h-fit w-fit md:w-fit shadow-md">
        <Image className="rounded-md shadow-lg" src={imageSrc} alt={`${title} image`} width={80} height={80} priority />
      </div>
      <div className="flex flex-col  ">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-primary-text-color">{title}</h3>
          <span className="text-secondary-text-color text-sm mb-4">{description}</span>
        </div>

        <div className="tech-stack text-primary-text-color">
          <div className="flex flex-col gap-4">
            <h4 className="text-primary-text-color mb-3">Technologies Used:</h4>
            <ul className="flex flex-col gap-4">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center mt-1 gap-2">
            <i className="fa-solid fa-link text-primary-text-color"></i>
            <a className="text-primary-text-color hover:text-hover-primary-text-color transition" href={link}>
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
