import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/hireMe", label: "Hire Me" },
];

const socials = [
  { href: "https://github.com/KaiqueFj", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/kaique-ferraz-f/", icon: LinkedinIcon },
  { href: "mailto:kaiqueferraz.dev@gmail.com", icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left - Name / Branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-primary font-semibold">Kaique Ferraz</span>
          <span className="text-sm text-secondary">Software Engineer / SRE </span>
        </div>

        {/* Center - Navigation */}
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-secondary hover:text-primary transition-colors
              after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
              after:bg-accent after:transition-all after:duration-300
              hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-5">
          {socials.map((social, i) => {
            const Icon = social.icon;

            return (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className="text-secondary hover:text-accent transition-colors duration-300"
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary/20">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-secondary">
          © {new Date().getFullYear()} Kaique Ferraz. Built with Next.js & Tailwind.
        </div>
      </div>
    </footer>
  );
}
