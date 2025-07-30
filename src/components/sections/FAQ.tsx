import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How quickly can I see results with ADmyBRAND AI?',
      answer:
        "Most customers see measurable improvements within the first 7 days. Our AI begins optimizing your campaigns immediately, and you'll notice increased engagement and better conversion rates typically within the first week of implementation.",
    },
    {
      question: 'Do I need technical expertise to use the platform?',
      answer:
        'Not at all! ADmyBRAND AI is designed for marketers, not developers. Our intuitive interface and AI-powered automation handle the complex technical aspects, while you focus on strategy and creativity. Most users are up and running within 15 minutes.',
    },
    {
      question: 'How accurate is the conversion forecasting?',
      answer:
        'Our AI models achieve 94% accuracy in conversion forecasting by analyzing millions of data points from successful campaigns across various industries. The system continuously learns and improves its predictions based on your specific campaign performance.',
    },
    {
      question: 'Can I integrate with my existing marketing tools?',
      answer:
        'Yes! We offer seamless integrations with 50+ popular marketing platforms including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and more. Our API also allows for custom integrations if you have specific requirements.',
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'We provide comprehensive support including 24/7 chat support, video tutorials, live training sessions, and a dedicated account manager for Enterprise customers. Our response time averages under 2 hours during business hours.',
    },
    {
      question: 'Is my data secure with ADmyBRAND AI?',
      answer:
        'Absolutely. We use enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and GDPR compliance. Your data is never shared with third parties and is stored in secure, redundant data centers with 99.9% uptime guarantee.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer:
        "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you'll retain access to all your data and campaign insights.",
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        "Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required to start, and you can upgrade seamlessly when you're ready to continue with our platform.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI. Can't find what
            you're looking for?
            <span className="text-primary hover:text-primary-glow cursor-pointer ml-1">
              Contact our support team
            </span>
            .
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass border-card-border rounded-xl px-6 hover:border-primary/20 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch and we'll answer any
              questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold shadow-glow hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-glass/80 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
