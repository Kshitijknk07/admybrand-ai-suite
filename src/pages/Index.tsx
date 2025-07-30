import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import BonusFeatures from "@/components/sections/BonusFeatures";
import PricingCalculator from "@/components/sections/PricingCalculator";
import DemoVideo from "@/components/sections/DemoVideo";
import BlogResources from "@/components/sections/BlogResources";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-hero"
    >
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Pricing />
        <BonusFeatures />
        <PricingCalculator />
        <DemoVideo />
        <BlogResources />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
