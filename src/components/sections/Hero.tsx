"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Refined background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orb - top right */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-[15%] w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(229, 77, 46, 0.08) 0%, transparent 70%)",
          }}
        />
        {/* Floating orb - bottom left */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-[10%] w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(245, 166, 35, 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-10">
            <span className="badge badge-accent">
              <Star className="w-3.5 h-3.5 fill-current" />
              Now accepting projects for Q1 2025
            </span>
          </motion.div>

          {/* Headline - using display font */}
          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-clash)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#1A1A18] tracking-[-0.03em] max-w-5xl mx-auto leading-[0.95]"
          >
            We Design Websites
            <br />
            <span className="relative inline-block mt-2">
              for{" "}
              <span className="relative">
                <span className="gradient-text">Founders</span>
                {/* Hand-drawn underline */}
                <svg
                  viewBox="0 0 286 12"
                  fill="none"
                  className="absolute -bottom-2 left-0 w-full h-auto"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8.5C52 3.5 98 2 143 4C188 6 234 5 284 9"
                    stroke="url(#underline-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E54D2E" />
                      <stop offset="100%" stopColor="#F5A623" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </span>
            <br />
            <span className="text-[#6B6B63]">who move fast</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-10 text-lg sm:text-xl text-[#5C5A52] max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Premium web design that ships in 2-3 weeks. No endless meetings,
            no scope creep. Just beautiful, high-converting websites.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group bg-[#1A1A18] hover:bg-[#252420] shadow-lg hover:shadow-xl">
              Book a Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-[#D4D2CA] hover:border-[#1A1A18] text-[#1A1A18]">
              View Our Work
            </Button>
          </motion.div>

          {/* Stats - editorial style */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
          >
            {[
              { value: "50+", label: "Projects Shipped" },
              { value: "2-3", label: "Weeks to Launch" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="font-[family-name:var(--font-clash)] text-4xl sm:text-5xl font-bold text-[#1A1A18] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-[#7C7A72] mt-1 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Cards - Premium showcase */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-24 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {/* Left card - tilted */}
            <motion.div
              whileHover={{ y: -8, rotate: 0, transition: { duration: 0.4 } }}
              className="relative rounded-2xl overflow-hidden shadow-xl transform -rotate-2 md:translate-y-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#2563EB]" />
              <div className="relative p-5 aspect-[4/3]">
                <div className="w-full h-full bg-[#0F172A] rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="text-[10px] text-[#38BDF8] font-mono mb-3 tracking-widest">ANALYTICS DASHBOARD</div>
                    <div className="text-white text-base font-semibold">First.io</div>
                    <div className="mt-4 flex gap-2 justify-center flex-wrap">
                      <span className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full">SaaS</span>
                      <span className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full">B2B</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center card - prominent */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4 } }}
              className="relative rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E54D2E] to-[#F5A623]" />
              <div className="relative p-5 aspect-[4/3]">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1A1A18] to-[#3D3B35] rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-lg">
                      <span className="text-white text-3xl font-[family-name:var(--font-clash)] font-bold">M</span>
                    </div>
                    <div className="text-[#1A1A18] font-semibold text-lg">Premium Design</div>
                    <div className="text-[#7C7A72] text-sm mt-1">Built to Convert</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right card - tilted */}
            <motion.div
              whileHover={{ y: -8, rotate: 0, transition: { duration: 0.4 } }}
              className="relative rounded-2xl overflow-hidden shadow-xl transform rotate-2 md:translate-y-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7] to-[#EC4899]" />
              <div className="relative p-5 aspect-[4/3]">
                <div className="w-full h-full bg-[#18181B] rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="text-2xl font-[family-name:var(--font-clash)] font-bold text-white mb-2">THE LIBBY&apos;S FAB</div>
                    <div className="text-[#F0ABFC] text-sm font-medium">CHALLENGE</div>
                    <div className="mt-4 text-xs text-white/60">E-commerce Platform</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
