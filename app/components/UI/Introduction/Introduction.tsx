"use client";

import Experiences from "./Experiences";
import Hero from "./Hero";
import ProjectsOverview from "./ProjectsOverview";
import TechStacks from "./TechStacks";

export default function Home() {
  return (
    <main className="text-white min-h-screen">
      <div className="mx-auto max-w-7xl ">
        <div className="flex flex-col gap-32 ">
          <Hero />
          <ProjectsOverview />
          <Experiences />
          <TechStacks />
        </div>
      </div>
    </main>
  );
}
