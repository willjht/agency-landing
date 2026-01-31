"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { PRICING_TIERS } from "@/lib/constants";

export default function Pricing() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="pricing" className="py-28 md:py-36 bg-[#FAFAF8] relative">
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
            <span className="text-sm font-medium text-[#E54D2E] uppercase tracking-wider">Pricing</span>
            <div className="w-8 h-[2px] bg-[#E54D2E]" />
          </div>
          <h2 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A18] tracking-tight">
            Simple Pricing.
            <br />
            <span className="text-[#7C7A72]">Zero Confusion.</span>
          </h2>
          <p className="mt-5 text-lg text-[#5C5A52] max-w-xl mx-auto">
            Transparent pricing that scales with your needs. No hidden fees.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-white rounded-3xl p-8 lg:p-10 border-2 transition-all duration-500 ${
                tier.highlighted
                  ? "border-[#1A1A18] shadow-2xl md:scale-105"
                  : "border-[#E8E6E1] hover:border-[#D4D2CA] hover:shadow-xl"
              }`}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#1A1A18] text-white text-sm font-semibold rounded-full shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier header */}
              <div className="mb-8">
                <h3 className="font-[family-name:var(--font-clash)] text-2xl font-bold text-[#1A1A18]">
                  {tier.name}
                </h3>
                <p className="text-sm text-[#7C7A72] mt-2">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-[#E8E6E1]">
                <span className="font-[family-name:var(--font-clash)] text-5xl font-bold text-[#1A1A18]">
                  {tier.price}
                </span>
                <span className="text-[#7C7A72] ml-2">/{tier.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E54D2E]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#E54D2E]" />
                    </div>
                    <span className="text-[#3D3B35] text-[15px]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full group ${
                  tier.highlighted
                    ? "bg-[#1A1A18] hover:bg-[#252420] text-white"
                    : "bg-white border-2 border-[#1A1A18] text-[#1A1A18] hover:bg-[#1A1A18] hover:text-white"
                }`}
              >
                {tier.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Money back guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#7C7A72] text-sm mt-12"
        >
          All plans include a 7-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
