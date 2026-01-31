"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}

function FAQItem({ question, answer, isOpen, onToggle, delay }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="border-b border-[#E8E6E1] last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-[family-name:var(--font-clash)] text-lg font-semibold text-[#1A1A18] group-hover:text-[#E54D2E] transition-colors pr-6">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 0 : 0 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FAFAF8] border border-[#E8E6E1] flex items-center justify-center group-hover:bg-[#E54D2E] group-hover:border-[#E54D2E] transition-colors"
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-[#1A1A18] group-hover:text-white transition-colors" />
          ) : (
            <Plus className="w-4 h-4 text-[#1A1A18] group-hover:text-white transition-colors" />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#5C5A52] leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="py-28 md:py-36 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#E54D2E]" />
            <span className="text-sm font-medium text-[#E54D2E] uppercase tracking-wider">FAQ</span>
            <div className="w-8 h-[2px] bg-[#E54D2E]" />
          </div>
          <h2 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A18] tracking-tight">
            Got Questions?
            <br />
            <span className="text-[#7C7A72]">We&apos;ve Got Answers.</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="bg-white rounded-3xl border border-[#E8E6E1] p-2 md:p-4 shadow-sm"
        >
          <div className="bg-[#FAFAF8] rounded-2xl px-6 md:px-8">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                delay={inView ? index * 0.08 : 0}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
