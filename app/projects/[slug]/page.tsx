import SelectedProject from "@/app/_components/Project/SelectedProject";
import { projects } from "@/app/data/projectsData";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="max-w-7xl mx-auto px-6 ">
      <div className="flex gap-10">
        <SelectedProject {...project} />
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
