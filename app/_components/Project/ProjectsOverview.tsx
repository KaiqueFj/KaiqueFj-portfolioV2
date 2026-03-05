import { projects } from "@/app/data/projectsData";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Code2 } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function ProjectsOverview() {
  const featuredProjects = projects.slice(0, 2);
  const remainingCount = projects.length - 2;

  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-accent/80">
          <Code2 className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold text-primary">Projects Delivered</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_0.6fr] gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} variant="default" />
        ))}

        <Link
          href="/projects"
          className="group flex flex-col justify-center items-center rounded-2xl bg-accent/70 border border-primary p-10 text-center transition-all duration-300 hover:bg-accent/60 hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="text-5xl font-bold text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
            +{remainingCount}
          </span>

          <h3 className="text-lg font-semibold text-primary mb-2">Explore My Showcase</h3>

          <p className="text-sm text-primary mb-6 max-w-xs">
            Dive deeper into my architecture experiments and production builds.
          </p>

          <div className="flex items-center gap-2 text-primary font-medium">
            View All Projects
            <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </Link>
      </div>
    </section>
  );
}
