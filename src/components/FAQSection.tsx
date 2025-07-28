"use client";

import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: "How does ADmyBRAND AI Suite work?",
      answer:
        "ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your marketing data, identify patterns, and automatically optimize your campaigns. It integrates with your existing marketing tools and provides actionable insights to improve ROI and campaign performance.",
    },
    {
      question: "What marketing platforms does it integrate with?",
      answer:
        "We integrate with all major marketing platforms including Google Ads, Facebook Ads, Instagram, LinkedIn, Twitter, TikTok, Google Analytics, HubSpot, Mailchimp, Salesforce, and many more. Our API also allows for custom integrations with your existing tools.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most customers start seeing improvements within the first 2-4 weeks of using our platform. The AI needs some initial data to learn your business patterns, but you'll get immediate insights and recommendations from day one.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan at any time during or after the trial period.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide comprehensive support including 24/7 live chat, email support, video tutorials, and dedicated account managers for enterprise customers. Our average response time is under 2 hours.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and we maintain strict privacy controls.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no penalties or hidden fees. You'll continue to have access to the platform until the end of your current billing period.",
    },
    {
      question: "Do you offer custom AI model training?",
      answer:
        "Yes, our Enterprise plan includes custom AI model training tailored to your specific business needs and data. Our team of data scientists will work with you to create models that deliver maximum ROI for your unique use case.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      accordionRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
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
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </div>

        {/* FAQ Accordion */}
        <div ref={accordionRef}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glassmorphism border-0 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team is here to help you get the most out of ADmyBRAND AI
              Suite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-border bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 glow">
                Contact Support
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
