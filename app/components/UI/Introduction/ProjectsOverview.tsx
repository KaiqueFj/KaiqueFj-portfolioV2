import { projects } from "@/app/data/projectsData";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsOverview() {
  const featuredProjects = projects.slice(0, 2);
  const remainingCount = projects.length - 2;

  return (
    <section className="flex flex-col gap-12">
      <h2 className="font-semibold text-primary text-4xl">Projects Delivered</h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_0.6fr] gap-8">
        {featuredProjects.map((project, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden bg-surface shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex flex-col gap-8">
              <div className="relative w-full flex justify-center items-center py-10">
                <div className="absolute inset-0 bg-linear-to-b from-accent/70 via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={220}
                  height={150}
                  className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105"
                />
              </div>

              <div className="px-6 pb-8 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold group-hover:text-accent text-primary">{project.title}</h3>

                  {project.date && <span className="text-sm text-secondary">{project.date}</span>}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech.name} className="text-xs text-primary rounded-full bg-accent/60 px-3 py-1">
                      {tech.name}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-primary-100/80 leading-relaxed">{project.description}</p>

                <Link
                  href={`/showcase/`}
                  className="text-base self-start flex items-center p-4 group-hover:text-accent gap-2 border-b-2 border-primary rounded-md pb-1 transition-all duration-300"
                >
                  View Project
                  <ArrowRightIcon className="h-5 w-5 text-primary-primary group-hover:text-accent transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        <Link
          href="/showcase"
          className="group flex flex-col justify-center items-center rounded-2xl bg-accent/70  border border-primary p-10 text-center transition-all duration-300 hover:bg-accent/60 hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="text-5xl font-bold text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
            +{remainingCount}
          </span>

          <h3 className="text-lg font-semibold text-primary-100 mb-2">Explore My Showcase</h3>

          <p className="text-sm text-primary-200 mb-6 max-w-xs">
            Dive deeper into my architecture experiments, distributed systems and production-grade builds.
          </p>

          <div className="flex items-center gap-2 text-primary-100 font-medium">
            View All Projects
            <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </Link>
      </div>
    </section>
  );
}
