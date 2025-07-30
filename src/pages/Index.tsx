import { motion } from 'framer-motion';

import BlogResources from '@/components/sections/BlogResources';
import BonusFeatures from '@/components/sections/BonusFeatures';
import Contact from '@/components/sections/Contact';
import DemoVideo from '@/components/sections/DemoVideo';
import FAQ from '@/components/sections/FAQ';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Pricing from '@/components/sections/Pricing';
import PricingCalculator from '@/components/sections/PricingCalculator';
import Testimonials from '@/components/sections/Testimonials';
import Navbar from '@/components/shared/Navbar';

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
