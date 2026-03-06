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
  slug,
  date,
  title,
  description,
  technologies,
  variant = "default",
  className,
}: ExtendedProjectCardProps) {
  const isCompact = variant === "compact";

  return (
    <Link
      href={`/projects/${slug}`}
      className={clsx(
        "group w-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl",
        className,
      )}
    >
      {/* Image */}
      {!isCompact && (
        <div className="relative w-full aspect-4/3 flex items-center justify-center overflow-hidden rounded-lg bg-surface">
          {/* Gradient hover */}
          <div className="absolute inset-0 bg-linear-to-b from-accent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Image
            src={imageSrc}
            alt={`${title} preview`}
            fill
            className="object-contain p-6 transition-transform duration-300 group-hover:-translate-y-2"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-accent transition">{title}</h3>

          {date && <p className="text-xs sm:text-sm text-secondary">{date}</p>}
        </div>

        <p className="text-xs sm:text-sm text-secondary leading-relaxed line-clamp-2 sm:line-clamp-3">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech.name} className="text-[10px] sm:text-xs text-primary rounded-full bg-accent/60 px-2.5 py-1">
              {tech.name}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-primary group-hover:text-accent transition mt-1 sm:mt-2">
          View Project
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
