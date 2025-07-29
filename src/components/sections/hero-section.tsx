"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.05 });

    // Background animation
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        backgroundPosition: "200% 200%",
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }

    // Headline animation
    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.03, ease: "power3.out" }
      );
    }

    // Subtext animation
    if (subtextRef.current) {
      tl.fromTo(
        subtextRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, ease: "power2.out" },
        "-=0.15"
      );
    }

    // CTA buttons animation
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current.children,
        { y: 15, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.03,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );
    }

    // Trust indicators animation
    if (indicatorsRef.current) {
      tl.fromTo(
        indicatorsRef.current.children,
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, stagger: 0.03, ease: "power2.out" },
        "-=0.05"
      );
    }

    // Hero image animation
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { x: 30, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" },
        "-=0.2"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  // Button hover animations
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, rgba(147, 51, 234, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)
          `,
          backgroundSize: "200% 200%, 200% 200%, 200% 200%, 100% 100%",
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-blue-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-300/8 to-blue-300/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Small floating dots */}
        <div
          className="absolute top-32 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-40 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-bounce"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="absolute bottom-40 right-1/4 w-1 h-1 bg-blue-500/40 rounded-full animate-bounce"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-purple-600/10 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-20 h-20 bg-gradient-to-br from-purple-300/15 to-blue-300/15 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Headline */}
            <div className="space-y-6">
              <h1
                ref={headlineRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight"
              >
                <span className="block">Transform Your</span>
                <span className="block">Brand with</span>
                <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <div className="max-w-lg">
              <p
                ref={subtextRef}
                className="text-lg sm:text-xl text-slate-600 leading-relaxed"
              >
                ADmyBRAND AI Suite helps you create, manage, and optimize your
                marketing campaigns with cutting-edge artificial intelligence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-4 border-2 border-slate-300 text-slate-700 hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50 font-semibold transition-all duration-300 relative overflow-hidden group"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span className="relative z-10">Watch Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              ref={indicatorsRef}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-sm animate-pulse" />
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 bg-emerald-500 rounded-full shadow-sm animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <span className="font-medium">14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 bg-emerald-500 rounded-full shadow-sm animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <span className="font-medium">Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Video */}
          <div ref={imageRef} className="relative lg:order-2">
            <div className="relative">
              {/* Main Hero Image/Video Container */}
              <div className="relative bg-gradient-to-br from-purple-100/50 to-blue-100/50 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                <div className="aspect-video bg-gradient-to-br from-white/80 to-slate-50/80 rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm border border-white/30">
                  {/* Placeholder for hero image/video */}
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto shadow-lg animate-pulse">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        AI Dashboard Preview
                      </h3>
                      <p className="text-sm text-slate-600">
                        Interactive marketing analytics and AI insights
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
