"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-28 md:py-36 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#E54D2E]/5 to-[#F5A623]/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative element */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#E54D2E]" />
            <div className="w-2 h-2 rounded-full bg-[#F5A623]" />
            <div className="w-2 h-2 rounded-full bg-[#E54D2E]" />
          </div>

          <h2 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A18] tracking-tight leading-tight">
            Let&apos;s ship your site.
            <br />
            <span className="text-[#7C7A72]">Do it once, do it right.</span>
          </h2>

          <p className="mt-6 text-lg text-[#5C5A52] max-w-xl mx-auto leading-relaxed">
            Ready to work with a team that moves as fast as you do? Let&apos;s talk about your project and make it happen.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group bg-[#1A1A18] hover:bg-[#252420] text-white shadow-xl hover:shadow-2xl w-full sm:w-auto">
              <Calendar className="mr-2 w-5 h-5" />
              Book an intro call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#D4D2CA] hover:border-[#1A1A18]">
              <Mail className="mr-2 w-5 h-5" />
              Send us an email
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-6 text-sm text-[#7C7A72]"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E54D2E]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E54D2E]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No commitments
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#E54D2E]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Quick response
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
