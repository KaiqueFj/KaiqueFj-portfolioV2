import { ProjectCardProps } from "@/app/types/Project-type";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface ExtendedProjectCardProps extends ProjectCardProps {
  variant?: "default" | "compact";
  className?: string;
}

export default function ProjectCard({
  imageSrc,
  date,
  title,
  description,
  technologies,
  link,
  variant = "default",
  className,
}: ExtendedProjectCardProps) {
  const isCompact = variant === "compact";

  return (
    <Link
      href={link}
      className={clsx(
        "group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
        "border border-white/5 bg-surface/60 backdrop-blur-md",
        className,
      )}
    >
      {/* Image (only in default variant) */}
      {!isCompact && (
        <div className="relative w-full flex justify-center items-center overflow-hidden rounded-lg py-8">
          {/* Background Gradient Layer */}
          <div className=" absolute inset-0 bg-linear-to-b from-accent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Image
            src={imageSrc}
            alt="SneakerStore preview"
            width={250}
            height={200}
            className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2"
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition">{title}</h3>
          {date && <p className="text-sm text-secondary leading-relaxed">{date}</p>}
        </div>

        <p className="text-sm text-secondary leading-relaxed line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech.name} className="text-xs text-primary rounded-full bg-accent/60 px-3 py-1">
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-primary group-hover:text-accent transition mt-2">
          View Project
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
