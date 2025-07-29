"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.05 });

    if (navbarRef.current) {
      tl.fromTo(
        navbarRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
      );
    }

    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, ease: "power2.out" },
        "-=0.15"
      );
    }

    if (navItemsRef.current?.children) {
      tl.fromTo(
        navItemsRef.current.children,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, stagger: 0.03, ease: "power2.out" },
        "-=0.1"
      );
    }

    if (ctaRef.current?.children) {
      tl.fromTo(
        ctaRef.current.children,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, stagger: 0.03, ease: "power2.out" },
        "-=0.15"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              ref={logoRef}
              href="/"
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent tracking-[-0.02em]">
                ADmyBRAND
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            ref={navItemsRef}
            className="hidden lg:flex lg:items-center lg:space-x-8"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-purple-600 px-4 py-2 text-base font-bold transition-all duration-300 relative overflow-hidden group tracking-wide"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div
            ref={ctaRef}
            className="hidden lg:flex lg:items-center lg:space-x-4"
          >
            <Button
              variant="ghost"
              className="text-slate-700 hover:text-purple-600 hover:bg-purple-50 font-bold transition-all duration-300 text-base tracking-wide"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base tracking-wide">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-slate-700 hover:text-purple-600"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-l border-slate-200/50"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link
                      href="/"
                      className="flex items-center space-x-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">A</span>
                      </div>
                      <span className="text-2xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent tracking-[-0.02em]">
                        ADmyBRAND
                      </span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-slate-700 hover:text-purple-600"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  <div className="flex flex-col space-y-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-slate-700 hover:text-purple-600 px-3 py-3 text-lg font-semibold transition-all duration-300 hover:bg-purple-50 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto space-y-4 pt-8">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-slate-700 hover:text-purple-600 hover:bg-purple-50 font-semibold"
                    >
                      Sign In
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white font-semibold shadow-lg">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
