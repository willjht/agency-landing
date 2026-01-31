"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, X, ArrowRight } from "lucide-react";
import { COMPARISON } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Comparison() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-28 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#E54D2E]" />
            <span className="text-sm font-medium text-[#E54D2E] uppercase tracking-wider">Compare</span>
          </div>
          <h2 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A18] tracking-tight">
            The Part Where We Flex.
            <br />
            <span className="text-[#7C7A72]">How working with us actually feels.</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* With Other Agencies */}
          <motion.div
            variants={itemVariants}
            className="bg-[#FAFAF8] rounded-3xl p-8 lg:p-10 border border-[#E8E6E1]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8E6E1] flex items-center justify-center">
                <X className="w-5 h-5 text-[#7C7A72]" />
              </div>
              <h3 className="font-[family-name:var(--font-clash)] text-2xl font-semibold text-[#7C7A72]">
                With Other Agencies
              </h3>
            </div>
            <ul className="space-y-5">
              {COMPARISON.withOthers.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 text-[#7C7A72]"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <span className="text-[15px]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With Studio Mika */}
          <motion.div
            variants={itemVariants}
            className="relative bg-[#1A1A18] rounded-3xl p-8 lg:p-10 text-white overflow-hidden"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#E54D2E]/20 to-transparent blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="font-[family-name:var(--font-clash)] font-bold text-[#1A1A18]">M</span>
                </div>
                <h3 className="font-[family-name:var(--font-clash)] text-2xl font-semibold">
                  With Studio Mika
                </h3>
              </div>
              <ul className="space-y-5">
                {COMPARISON.withUs.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E54D2E] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-[15px] text-white/90">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="mt-10 pt-8 border-t border-white/10"
              >
                <Button className="bg-white text-[#1A1A18] hover:bg-[#F5F4F0] group">
                  Book a Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
