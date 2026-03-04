"use client";

import { CommandLineIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedinIcon, MoonIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-fit self-center h-fit my-6 py-2  rounded-2xl backdrop-blur-md  ">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center h-15 gap-4 border border-secondary bg-surface/70 px-4 py-2.5 rounded-2xl shadow-lg">
          {/* Logo */}
          <CommandLineIcon className="h-8 w-8 text-primary" />

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-primary hover:text-accent transition">
              About
            </Link>
            <Link href="#projects" className="text-primary hover:text-accent transition">
              Projects
            </Link>
            <Link href="#contact" className="text-primary hover:text-accent transition">
              Contact
            </Link>

            <Link
              href="https://www.linkedin.com/in/kaique-ferraz-de-jesus-a6b01b231/"
              className="flex items-center gap-2"
            >
              <LinkedinIcon className="h-5 w-5 text-primary hover:text-accent transition cursor-pointer" />
            </Link>

            <Link href="https://github.com/kaiqueferraz" className="flex items-center gap-2">
              <GithubIcon className="h-5 w-5 text-primary hover:text-accent transition cursor-pointer" />
            </Link>

            <button className="flex items-center gap-2 text-primary hover:text-accent transition">
              <MoonIcon className="h-5 w-5 text-primary hover:text-accent transition cursor-pointer" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
