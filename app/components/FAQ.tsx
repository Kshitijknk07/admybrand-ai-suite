import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I see results with ADmyBRAND AI?",
    answer:
      "Most customers see significant improvements within 7-14 days of implementation. Our AI algorithms start optimizing your campaigns immediately, but allow 2-4 weeks for the full learning cycle to maximize performance gains.",
  },
  {
    question: "Do I need technical expertise to use the platform?",
    answer:
      "Not at all! ADmyBRAND AI is designed for marketers, not engineers. Our intuitive interface and guided setup process make it easy for anyone to start optimizing campaigns. Plus, our 24/7 support team is always available to help.",
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer:
      "Yes, we offer seamless integrations with 200+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations.",
  },
  {
    question: "What happens to my data and is it secure?",
    answer:
      "Your data security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and GDPR-compliant data handling. Your data remains yours and is never shared with third parties.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all Professional features. No credit card required to start, and you can upgrade or cancel anytime.",
  },
  {
    question: "How does the AI learn and improve over time?",
    answer:
      "Our AI continuously analyzes your campaign performance, audience behavior, and market trends. It uses machine learning to identify patterns and optimize bidding, targeting, and creative elements automatically.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees. Your access continues until the end of your current billing period.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 customer support via chat, email, and phone. Professional and Enterprise customers also get dedicated account managers and priority support with faster response times.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container-lg">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-section">
            Got{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions?
            </span>{" "}
            We&apos;ve Got Answers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can&apos;t
            find what you&apos;re looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border-0 rounded-xl px-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our expert team is here to help you get the most out of ADmyBRAND
              AI. Get personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:scale-105 transition-transform">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
