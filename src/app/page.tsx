import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}
