import { Experience } from "@/app/types/Experience-type";

type ExperienceModalProps = {
  selectedExperience: Experience | null;
  onSelectExperience: (experience: Experience | null) => void;
};

export default function ExperiencesModal({ selectedExperience, onSelectExperience }: ExperienceModalProps) {
  if (!selectedExperience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-surface border border-secondary rounded-2xl p-8 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-semibold text-accent">{selectedExperience.company}</h3>
            <p className="text-sm text-secondary">{selectedExperience.role}</p>
            <p className="text-sm text-secondary">{selectedExperience.period}</p>
          </div>

          <button onClick={() => onSelectExperience(null)} className="text-secondary hover:text-accent">
            ✕
          </button>
        </div>

        <p className="text-sm text-secondary leading-relaxed mb-6">{selectedExperience.description}</p>

        <ul className="flex flex-col gap-2 text-sm text-secondary list-disc pl-5">
          {selectedExperience.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
