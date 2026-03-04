import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 w-full border-t border-border-color">
      <div className="px-6 py-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          {/* Links Section */}
          <div className="flex gap-6 text-primary-text-color text-sm">
            <Link
              href="/"
              className="px-4 py-2 text-primary-text-color font-medium hover:text-hover-primary-text-color transition"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 text-primary-text-color font-medium hover:text-hover-primary-text-color transition"
            >
              Projects
            </Link>
            <Link
              href="/hireMe"
              className="px-4 py-2 text-primary-text-color font-medium hover:text-hover-primary-text-color transition"
            >
              Hire me
            </Link>
          </div>
          {/* Copyright Section */}
          <p className="text-primary-text-color text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Kaique Ferraz de Jesus. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
