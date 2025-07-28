"use client";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: "Starter",
      description:
        "Perfect for small businesses getting started with AI marketing",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "AI-powered analytics dashboard",
        "Basic customer segmentation",
        "Email marketing automation",
        "Social media scheduling",
        "Basic reporting & insights",
        "Email support",
      ],
      popular: false,
      gradient: "from-gray-400 to-gray-600",
    },
    {
      name: "Professional",
      description:
        "Advanced features for growing businesses and marketing teams",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Everything in Starter",
        "Advanced AI predictions",
        "Multi-channel campaign automation",
        "Customer journey mapping",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom integrations",
        "Team collaboration tools",
      ],
      popular: true,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "Enterprise",
      description: "Complete AI marketing suite for large organizations",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Everything in Professional",
        "Custom AI model training",
        "Advanced predictive analytics",
        "White-label solutions",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom API access",
        "Advanced security & compliance",
        "Unlimited team members",
      ],
      popular: false,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    gsap.fromTo(
      cards,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Simple, Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a
            14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm font-medium ${
                !isAnnual ? "text-gray-900 dark:text-gray-100" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-blue-600"
            />
            <span
              className={`text-sm font-medium ${
                isAnnual ? "text-gray-900 dark:text-gray-100" : "text-gray-500"
              }`}
            >
              Annual
              <span className="ml-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "glassmorphism border-2 border-blue-500/50 scale-105"
                  : "glassmorphism border-0"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Price */}
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {isAnnual ? "per year" : "per month"}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full mt-8 ${
                    plan.popular
                      ? "gradient-border bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 glow"
                      : "border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400"
                  }`}
                >
                  {plan.popular ? "Start Free Trial" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Have questions about pricing?
          </p>
          <Button variant="link" className="text-blue-600 dark:text-blue-400">
            View our FAQ →
          </Button>
        </div>
      </div>
    </section>
  );
}
