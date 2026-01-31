"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export default function Portfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
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
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="works" className="py-28 md:py-36 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#E54D2E]" />
            <span className="text-sm font-medium text-[#E54D2E] uppercase tracking-wider">Portfolio</span>
            <div className="w-8 h-[2px] bg-[#E54D2E]" />
          </div>
          <h2 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A18] tracking-tight">
            Some of Our
            <br />
            <span className="text-[#7C7A72]">Best Works</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              className="group relative"
            >
              <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${item.color} p-[3px]`}>
                <div className="bg-white rounded-[21px] overflow-hidden">
                  {/* Project Image Placeholder */}
                  <div className="relative aspect-[16/10] bg-[#F5F4F0] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Placeholder content mimicking a website */}
                      <div className="w-full h-full p-5">
                        <div className="w-full h-full bg-white rounded-xl shadow-inner overflow-hidden border border-[#E8E6E1]">
                          {/* Mock browser chrome */}
                          <div className="h-7 bg-[#F5F4F0] flex items-center px-3 gap-2 border-b border-[#E8E6E1]">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                          </div>
                          {/* Mock content */}
                          <div className="p-4 space-y-3">
                            <div className="h-5 bg-[#E8E6E1] rounded w-2/3" />
                            <div className="h-3 bg-[#F5F4F0] rounded w-1/2" />
                            <div className="grid grid-cols-3 gap-3 mt-5">
                              <div className="aspect-square bg-[#F5F4F0] rounded-lg" />
                              <div className="aspect-square bg-[#F5F4F0] rounded-lg" />
                              <div className="aspect-square bg-[#F5F4F0] rounded-lg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#1A1A18]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1 }}
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <ArrowUpRight className="w-6 h-6 text-[#1A1A18]" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex items-center justify-between border-t border-[#E8E6E1]">
                    <div>
                      <h3 className="font-[family-name:var(--font-clash)] font-semibold text-lg text-[#1A1A18] group-hover:text-[#E54D2E] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#7C7A72] mt-1">{item.category}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#A8A69E] group-hover:text-[#E54D2E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A18] text-white rounded-full font-semibold hover:bg-[#252420] transition-colors shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
