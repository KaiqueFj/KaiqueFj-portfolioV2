"use client";

import { CommandLineIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedinIcon, MoonIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky mt-4 mb-10 top-0 py-3 z-50 flex justify-center">
      <div className=" flex items-center gap-6 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">
        {/* Logo */}
        <CommandLineIcon className="h-6 w-6 text-primary" />

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-primary hover:text-accent transition">
            About
          </Link>

          <Link href="/projects" className="text-primary hover:text-accent transition">
            Projects
          </Link>

          <Link href="#contact" className="text-primary hover:text-accent transition">
            Contact
          </Link>

          <Link href="https://www.linkedin.com/in/kaique-ferraz-f/">
            <LinkedinIcon className="h-5 w-5 text-primary hover:text-accent transition" />
          </Link>

          <Link href="https://github.com/KaiqueFj">
            <GithubIcon className="h-5 w-5 text-primary hover:text-accent transition" />
          </Link>

          <button>
            <MoonIcon className="h-5 w-5 text-primary hover:text-accent transition" />
          </button>
        </nav>
      </div>
    </header>
  );
}
