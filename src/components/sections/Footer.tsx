"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Dribbble, Instagram, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const SOCIAL_LINKS = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A18] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E54D2E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24 relative">
        {/* Top section with large CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-[family-name:var(--font-clash)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to ship?
          </h2>
          <p className="text-white/60 text-lg max-w-md mx-auto mb-8">
            Let&apos;s build something remarkable together.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E54D2E] text-white rounded-full font-semibold hover:bg-[#D4432A] transition-colors"
          >
            Start Your Project
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="font-[family-name:var(--font-clash)] font-bold text-[#1A1A18]">M</span>
              </div>
              <span className="font-[family-name:var(--font-clash)] font-semibold text-xl">
                {SITE_CONFIG.name}
              </span>
            </a>
            <p className="mt-5 text-white/50 max-w-sm leading-relaxed">
              Premium web design for founders who move fast. We ship beautiful, high-converting websites in 2-3 weeks.
            </p>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-[family-name:var(--font-clash)] font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#E54D2E] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-[family-name:var(--font-clash)] font-semibold text-white mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@studiomika.com"
                  className="text-white/50 hover:text-[#E54D2E] transition-colors"
                >
                  hello@studiomika.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/50 hover:text-[#E54D2E] transition-colors inline-flex items-center gap-2"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>

            {/* Newsletter hint */}
            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm text-white/40">
                Follow our journey and get design tips
              </p>
              <a href="#" className="text-sm text-[#E54D2E] hover:text-[#F5A623] transition-colors mt-1 inline-block">
                Subscribe to updates →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Crafted with care.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
