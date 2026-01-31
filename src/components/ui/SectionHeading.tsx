"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = "",
  dark = false,
}: SectionHeadingProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const textColor = dark ? "text-white" : "text-[#1A1A18]";
  const mutedColor = dark ? "text-white/60" : "text-[#7C7A72]";
  const subtitleColor = dark ? "text-white/70" : "text-[#5C5A52]";
  const accentColor = dark ? "text-white" : "text-[#E54D2E]";
  const lineColor = dark ? "bg-white/30" : "bg-[#E54D2E]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-16 md:mb-20 ${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-3 mb-6 ${centered ? "" : ""}`}>
          <div className={`w-8 h-[2px] ${lineColor}`} />
          <span className={`text-sm font-medium ${accentColor} uppercase tracking-wider`}>
            {eyebrow}
          </span>
          {centered && <div className={`w-8 h-[2px] ${lineColor}`} />}
        </div>
      )}
      <h2 className={`font-[family-name:var(--font-clash)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${textColor}`}>
        {title.split('\n').map((line, i) => (
          <span key={i}>
            {i === 1 ? <span className={mutedColor}>{line}</span> : line}
            {i === 0 && title.includes('\n') && <br />}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg md:text-xl ${subtitleColor} max-w-2xl ${centered ? "mx-auto" : ""} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
