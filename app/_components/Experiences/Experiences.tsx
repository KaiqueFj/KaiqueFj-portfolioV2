import { experiences } from "@/app/data/experienceData";
import { BriefcaseIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function Experiences() {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-accent/80">
          <BriefcaseIcon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold text-primary">Work Experience</h2>
      </div>

      <div className="relative border-l border-secondary pl-8 flex flex-col gap-16">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-10 top-2 h-4 w-4 rounded-full bg-accent shadow-md group-hover:scale-125 transition-transform duration-300" />

            <div className="bg-surface backdrop-blur-sm border border-secondary/40 hover:border-accent rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-6">
                <Image
                  className="rounded-full shadow-md"
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={50}
                  height={50}
                />

                <div className="flex flex-col gap-3 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h3 className="text-lg font-semibold text-accent">{exp.company}</h3>
                    <span className="text-sm text-accent">{exp.period}</span>
                  </div>
                  <span className="text-sm text-primary">{exp.role}</span>
                  <p className="text-sm text-secondary leading-relaxed">{exp.description}</p>
                  <ul className="mt-3 flex flex-col gap-1 text-sm text-secondary list-disc list-inside">
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
