"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, Clock, TrendingUp, Shield } from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap: { [key: string]: React.ElementType } = {
  Zap,
  Clock,
  TrendingUp,
  Shield,
};

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-28 md:py-36 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(#1A1A18 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Section header - editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-[#E54D2E]" />
            <span className="text-sm font-medium text-[#E54D2E] uppercase tracking-wider">Why Us</span>
            <div className="w-12 h-[2px] bg-[#E54D2E]" />
          </div>
          <h2 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A18] tracking-tight">
            Why Fast-Moving
            <br />
            <span className="text-[#7C7A72]">Founders Pick Us</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative bg-[#FAFAF8] rounded-2xl p-7 border border-[#E8E6E1] hover:border-[#D4D2CA] hover:shadow-xl transition-all duration-500"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-[#E54D2E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm border border-[#E8E6E1] group-hover:border-[#E54D2E]/20 group-hover:shadow-md transition-all mb-5">
                  <Icon className="w-6 h-6 text-[#1A1A18] group-hover:text-[#E54D2E] transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold text-[#1A1A18] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#5C5A52] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
