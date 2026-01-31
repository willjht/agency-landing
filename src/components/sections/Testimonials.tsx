"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
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
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.03]" style={{
        background: 'radial-gradient(circle at center, #E54D2E 0%, transparent 70%)'
      }} />

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
            <div className="w-8 h-[2px] bg-[#E54D2E]" />
            <span className="text-sm font-medium text-[#E54D2E] uppercase tracking-wider">Testimonials</span>
            <div className="w-8 h-[2px] bg-[#E54D2E]" />
          </div>
          <h2 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A18] tracking-tight">
            You Want Proof?
            <br />
            <span className="text-[#7C7A72]">These Reviews Say Everything.</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-[#FAFAF8] rounded-3xl p-8 border border-[#E8E6E1] hover:border-[#D4D2CA] hover:shadow-xl transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="absolute top-8 right-8 font-[family-name:var(--font-serif)] text-8xl text-[#E8E6E1] leading-none select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#F5A623] text-[#F5A623]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#3D3B35] text-lg leading-relaxed mb-8 relative z-10">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E8E6E1]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E54D2E] to-[#F5A623] flex items-center justify-center text-white font-[family-name:var(--font-clash)] font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-[family-name:var(--font-clash)] font-semibold text-[#1A1A18]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[#7C7A72]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
