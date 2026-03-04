import { techStack } from "@/app/data/techStackData";

export default function TechStacks() {
  return (
    <section className="flex flex-col gap-16">
      {/* Section Header */}
      <div className="max-w-2xl">
        <h2 className="text-3xl text-primary font-semibold">Technologies Used</h2>
      </div>

      {/* Tech Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((section, index) => {
          const Icon = section.icon;

          return (
            <div
              key={index}
              className="group rounded-2xl border border-secondary/40 bg-surface backdrop-blur-sm p-8 transition hover:-translate-y-1 hover:border-accent"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold text-accent">{section.category}</h3>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-3">
                {section.items.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full bg-secondary/40 border border-secondary hover:border-accent transition"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
