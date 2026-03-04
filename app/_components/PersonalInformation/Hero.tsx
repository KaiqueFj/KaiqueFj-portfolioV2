import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col gap-24">
      {/* ================= HERO ================= */}
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left Text */}
        <div className="flex-1 space-y-8">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            <span className="bg-linear-to-r from-accent to-accent/90 bg-clip-text text-transparent">
              Software Engineer building the next level
            </span>
          </h1>

          <p className="text-lg md:text-lg text-primary max-w-2xl leading-relaxed">
            Hi, I’m Kaique Ferraz, Fullstack Engineer / Senior SRE passionate about distributed systems, observability,
            and production reliability. I design software that empowers businesses to operate confidently and
            efficiently.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-xl border bg-accent/60 border-accent-border hover:border-accent-soft text-primary font-medium transition"
            >
              Hire Me
            </Link>
            <a
              href="/Cv/Kaique-Ferraz-de-Jesus-CV-US.pdf"
              download
              className="px-6 py-3 rounded-xl border bg-accent/60 border-accent-border hover:border-accent-soft text-primary font-medium transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Profile */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-3xl overflow-hidden border border-neutral-700 shadow-2xl h-72 md:h-auto">
            <Image
              src="/Images/profile-pic.jpg"
              alt="Kaique profile picture"
              width={250}
              height={250}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= QUICK STATS ================= */}
      <div className="grid md:grid-cols-3 gap-12 text-center pt-8">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-accent">4+</h3>
          <p className="text-primary">Years in Fullstack & SRE</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-accent">10+</h3>
          <p className="text-primary">Projects Delivered</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold text-accent">50k+</h3>
          <p className="text-primary">Users Impacted</p>
        </div>
      </div>
    </section>
  );
}
