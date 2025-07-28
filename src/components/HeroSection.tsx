"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, TrendingUp, Users } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        statsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );

    // Floating animation for the gradient orbs
    gsap.to(".floating-orb", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-10 blur-3xl floating-orb animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-10 blur-3xl floating-orb animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-teal-400 to-green-500 rounded-full opacity-10 blur-3xl floating-orb animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="gradient-text">Revolutionize</span> Your
          <br />
          Marketing with <span className="gradient-text">AI Power</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Transform your brand with intelligent automation, predictive
          analytics, and AI-driven insights that deliver{" "}
          <span className="font-semibold text-green-600">
            10x better results
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            className="bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-4 h-auto rounded-md font-medium"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border border-gray-300 hover:border-green-600 text-lg px-8 py-4 h-auto rounded-md font-medium"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold gradient-text">500%</div>
            <div className="text-gray-600">ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
            <div className="text-3xl font-bold gradient-text">10x</div>
            <div className="text-gray-600">Faster Results</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <div className="text-3xl font-bold gradient-text">50K+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-4">Trusted by leading brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Netflix</div>
            <div className="text-2xl font-bold text-gray-400">Spotify</div>
            <div className="text-2xl font-bold text-gray-400">Airbnb</div>
            <div className="text-2xl font-bold text-gray-400">Uber</div>
            <div className="text-2xl font-bold text-gray-400">Slack</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
