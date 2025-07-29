import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";

export const Hero = () => {
  const marketingKeywords = [
    "AI-Powered",
    "Data-Driven",
    "Intelligent",
    "Automated",
    "Smart",
    "Predictive",
    "Real-Time",
    "Scalable",
    "Optimized",
    "Personalized",
    "Dynamic",
    "Adaptive",
    "Proactive",
    "Strategic",
    "Innovative",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/8 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <motion.div
        className="container-lg relative z-10 pt-24 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                Trusted by 10,000+ marketers
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-hero">
                <span className="text-foreground">
                  Transform Your Marketing with{" "}
                </span>
                <span className="text-primary font-extrabold inline-block min-w-[280px]">
                  <FlipWords
                    words={marketingKeywords}
                    duration={2000}
                    className="text-primary font-extrabold"
                  />
                </span>
                <span className="text-foreground"> Intelligence</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Automate your campaigns, analyze performance, and scale your
                brand with our comprehensive AI marketing suite. Increase ROI by
                300% in just 30 days.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">300%</div>
                <div className="text-sm text-muted-foreground">
                  ROI Increase
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50M+</div>
                <div className="text-sm text-muted-foreground">
                  Campaigns Run
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className="relative animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-primary rounded-xl rotate-12 animate-float opacity-80"></div>
              <div
                className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-secondary rounded-full animate-float opacity-80"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Main Image */}
              <div className="relative glass rounded-2xl overflow-hidden shadow-glow">
                <Image
                  src={heroImage}
                  alt="ADmyBRAND AI Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                  priority
                />

                {/* Overlay Stats */}
                <div className="absolute top-4 left-4 glass rounded-lg p-3">
                  <div className="text-sm font-semibold text-accent">
                    +127% CTR
                  </div>
                  <div className="text-xs text-muted-foreground">
                    This Quarter
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 glass rounded-lg p-3">
                  <div className="text-sm font-semibold text-secondary">
                    AI Optimized
                  </div>
                  <div className="text-xs text-muted-foreground">Real-time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
