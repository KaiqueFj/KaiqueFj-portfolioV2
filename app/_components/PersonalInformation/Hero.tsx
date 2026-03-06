"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import { staggerContainer } from "../motion/variants";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[80vh]  gap-20">
      {/* ================= HERO ================= */}
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left Text */}
        <div className="flex-1 space-y-8">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold leading-tight bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Software Engineer building the next level
          </h1>

          <p className="text-base md:text-lg text-primary max-w-xl leading-relaxed">
            Hi, I`m Kaique Ferraz — a Fullstack Engineer and SRE passionate about distributed systems, observability and
            production reliability. I build software and infrastructure that help companies operate confidently at
            scale.
          </p>

          {/* CTAs */}
          <div className="flex justify-center md:justify-start flex-wrap gap-4 pt-2">
            <Link
              href="/hireMe"
              className="px-6 py-3 rounded-xl bg-accent text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              Get in touch
            </Link>
            <a
              href="/Cv/Kaique-Ferraz-de-Jesus-cv-en-v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-accent text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              Get my CV
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
      <Reveal variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center pt-12">
        <Reveal className="space-y-2">
          <h3 className="text-4xl font-bold text-accent">4+</h3>
          <p className="text-primary font-semibold text-lg">Years in Fullstack & SRE</p>
        </Reveal>
        <Reveal className="space-y-2">
          <h3 className="text-4xl font-bold text-accent">10+</h3>
          <p className="text-primary font-semibold text-lg">Projects Delivered</p>
        </Reveal>
        <Reveal className="space-y-2">
          <h3 className="text-4xl font-bold text-accent">50k+</h3>
          <p className="text-primary font-semibold text-lg">Users Impacted</p>
        </Reveal>
      </Reveal>
    </section>
  );
}
