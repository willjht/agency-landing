"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LOGOS = [
  { name: "Notion", initial: "N", color: "from-[#1A1A18] to-[#2D2D2B]" },
  { name: "GitHub", initial: "G", color: "from-[#24292E] to-[#3D4247]" },
  { name: "Linear", initial: "L", color: "from-[#5E6AD2] to-[#7B84E3]" },
  { name: "Stripe", initial: "S", color: "from-[#635BFF] to-[#8178FF]" },
  { name: "Supabase", initial: "Sb", color: "from-[#3ECF8E] to-[#5FD9A3]" },
  { name: "Vercel", initial: "V", color: "from-[#1A1A18] to-[#2D2D2B]" },
  { name: "Figma", initial: "F", color: "from-[#F24E1E] to-[#FF7262]" },
  { name: "Webflow", initial: "W", color: "from-[#4353FF] to-[#6B77FF]" },
];

export default function LogoCloud() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 bg-white border-y border-[#E8E6E1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-[#7C7A72] uppercase tracking-wider">
            Trusted by founders at
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden"
        >
          {/* Gradient masks for infinite scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex gap-16 animate-scroll">
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-4 flex-shrink-0 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${logo.color} rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}>
                  <span className="font-[family-name:var(--font-clash)] font-bold text-white text-sm">
                    {logo.initial}
                  </span>
                </div>
                <span className="font-[family-name:var(--font-clash)] text-[#5C5A52] font-medium whitespace-nowrap group-hover:text-[#1A1A18] transition-colors">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
