"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Palette, Code, Rocket, ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import Button from "@/components/ui/Button";

const iconMap: { [key: string]: React.ElementType } = {
  Phone,
  Palette,
  Code,
  Rocket,
};

export default function Process() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="py-28 md:py-36 bg-[#1A1A18] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#E54D2E]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#F5A623]/10 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-white/30" />
            <span className="text-sm font-medium text-white/60 uppercase tracking-wider">Process</span>
            <div className="w-8 h-[2px] bg-white/30" />
          </div>
          <h2 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            How We Ship Your Site
            <br />
            <span className="text-white/50">in 2-3 Weeks</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="relative"
        >
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-8 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-[2px] bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative text-center"
                >
                  {/* Icon with number */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative inline-flex flex-col items-center mb-6"
                  >
                    {/* Icon circle */}
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative z-10">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#E54D2E] text-white text-sm font-bold rounded-full flex items-center justify-center z-20">
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-[240px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button className="bg-white text-[#1A1A18] hover:bg-[#F5F4F0] group">
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
