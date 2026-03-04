import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_styles/globals.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaique Ferraz de Jesus - Portfolio",
  description:
    "Portfolio of Kaique Ferraz de Jesus, a passionate software engineer with a strong background in fullStack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative min-h-screen antialiased bg-background flex flex-col text-primary-600`}
      >
        {/* Top Glow Layer */}
        <div className="absolute inset-x-0 top-0 h-200 -z-10 overflow-hidden">
          <div className="absolute -top-32 left-0 w-150 h-150 bg-accent/20 blur-[150px] rounded-full" />
          <div className="absolute -top-32 right-0 w-150 h-150 bg-accent/10 blur-[150px] rounded-full" />
        </div>

        <Header />

        <main className="flex-1 px-6">
          <div className="max-w-7xl mx-auto pb-2 w-full flex flex-col">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
