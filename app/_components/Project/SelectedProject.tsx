import { ProjectCardProps } from "@/app/types/Project-type";
import { GithubIcon, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ExtendedProjectCardProps extends ProjectCardProps {
  variant?: "default" | "compact";
  className?: string;
}
export default function SelectedProject({
  imageSrc,
  problemSolved,
  date,
  title,
  solution,
  description,
  highlights,
  technologies,
  links,
}: ExtendedProjectCardProps) {
  return (
    <article className="w-full flex flex-col gap-16">
      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold text-primary">{title}</h1>

            {date && <p className="text-sm text-secondary">{date}</p>}
          </div>

          <p className="text-secondary leading-relaxed max-w-lg">{description}</p>

          {/* LINKS */}
          <div className="flex gap-4 pt-2">
            {links.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                bg-secondary text-primary hover:bg-accent transition"
              >
                {link.name === "website" ? <Globe size={18} /> : <GithubIcon size={18} />}

                <span className="text-sm capitalize">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* TECH */}
          <div className="flex flex-wrap gap-2 pt-4">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="text-xs px-3 py-1 rounded-full
                bg-accent text-primary border border-accent/20"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />

          <Image src={imageSrc} alt={title} width={420} height={320} className="relative rounded-xl shadow-xl" />
        </div>
      </div>

      {/* PROBLEM */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <h2 className="text-xl font-semibold text-primary">Problem</h2>

        <p className="text-secondary leading-relaxed">{problemSolved}</p>
      </section>

      {/* SOLUTION */}
      <section className="flex flex-col gap-4 max-w-3xl">
        <h2 className="text-xl font-semibold text-primary">Solution</h2>

        <p className="text-secondary leading-relaxed">{solution}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-primary">Key Features</h2>

        <ul className="flex flex-col gap-2 text-secondary list-disc list-inside">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
