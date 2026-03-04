import { projects } from "@/app/data/projectsData";
import ProjectCard from "../_components/Project/ProjectCard";

export default function page() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl font-semibold text-primary">Projects</h1>
      <p className="text-lg text-primary ">
        Dive deeper into my architecture experiments, distributed systems and production-grade builds.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
