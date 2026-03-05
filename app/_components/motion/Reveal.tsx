// components/Reveal.tsx
"use client";

import { motion, MotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";
import { scrollReveal } from "../motion/variants";

interface RevealProps extends MotionProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}

export default function Reveal({ children, variants = scrollReveal, ...props }: RevealProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
