import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Comparison from "@/components/sections/Comparison";
import LogoCloud from "@/components/sections/LogoCloud";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Comparison />
        <LogoCloud />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
