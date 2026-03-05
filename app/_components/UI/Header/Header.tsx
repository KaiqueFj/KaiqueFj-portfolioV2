"use client";

import { useTheme } from "@/hooks/useTheme";
import { CommandLineIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedinIcon, Menu, MoonIcon, SunIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky mt-4 mb-10 top-0 py-3 z-50 flex justify-end px-10 md:justify-center">
      <div className="relative flex items-center gap-6 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">
        {/* Logo */}
        <CommandLineIcon className="h-6 w-6 text-primary" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-primary hover:text-accent transition">
            About
          </Link>

          <Link href="/projects" className="text-primary hover:text-accent transition">
            Projects
          </Link>

          <Link href="/hireMe" className="text-primary hover:text-accent transition">
            Contact
          </Link>

          <Link href="https://www.linkedin.com/in/kaique-ferraz-f/">
            <LinkedinIcon className="h-5 w-5 text-primary hover:text-accent transition" />
          </Link>

          <Link href="https://github.com/KaiqueFj">
            <GithubIcon className="h-5 w-5 text-primary hover:text-accent transition" />
          </Link>

          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-primary hover:text-accent transition" />
            ) : (
              <MoonIcon className="h-5 w-5 text-primary hover:text-accent transition" />
            )}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-primary">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-auto rounded-2xl border border-white/10 bg-surface backdrop-blur-xl shadow-xl p-4 flex flex-col gap-5 md:hidden">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-primary hover:text-accent">
              About
            </Link>

            <Link href="/projects" onClick={() => setMenuOpen(false)} className="text-primary hover:text-accent">
              Projects
            </Link>

            <Link href="/hireMe" onClick={() => setMenuOpen(false)} className="text-primary hover:text-accent">
              Contact
            </Link>

            <div className="flex items-center gap-5 pt-2 border-t border-secondary/30">
              <Link href="https://github.com/KaiqueFj">
                <GithubIcon className="h-5 w-5 text-primary hover:text-accent transition" />
              </Link>

              <Link href="https://www.linkedin.com/in/kaique-ferraz-f/">
                <LinkedinIcon className="h-5 w-5 text-primary hover:text-accent transition" />
              </Link>

              <button onClick={toggleTheme}>
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-primary hover:text-accent transition" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-primary hover:text-accent transition" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
