import Experiences from "./_components/Experiences/Experiences";
import Hero from "./_components/PersonalInformation/Hero";
import ProjectsOverview from "./_components/Project/ProjectsOverview";
import TechStacks from "./_components/TechStack/TechStacks";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="flex flex-col gap-32 ">
        <Hero />
        <ProjectsOverview />
        <Experiences />
        <TechStacks />
      </div>
    </div>
  );
}
