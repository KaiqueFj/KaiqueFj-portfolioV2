export default function HireMe() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 flex flex-col gap-16 text-center">
      {/* Title */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary">{"Let's Work Together"}</h1>

        <p className="text-secondary text-lg max-w-xl mx-auto leading-relaxed">
          {
            "I'm currently open to new opportunities where I can contribute to building reliable systems, developer platforms, and scalable applications."
          }
        </p>
      </div>

      {/* Contact options */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a
          href="mailto:kaiqueferraz.dev@gmail.com"
          className="px-6 py-3 rounded-xl bg-accent text-white font-medium
          hover:opacity-90 transition"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/kaique-ferraz-f/"
          target="_blank"
          className="px-6 py-3 rounded-xl border border-secondary/30
          text-primary hover:border-accent transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/KaiqueFj"
          target="_blank"
          className="px-6 py-3 rounded-xl border border-secondary/30
          text-primary hover:border-accent transition"
        >
          GitHub
        </a>
      </div>

      {/* Availability */}
      <div className="text-secondary text-sm">
        Open to full-time roles, remote opportunities, and impactful engineering projects.
      </div>
    </section>
  );
}
