import { motion } from "framer-motion";
import {
  Brain,
  Target,
  BarChart3,
  Zap,
  Users,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description:
      "Advanced machine learning algorithms analyze your campaigns in real-time, providing actionable insights that increase conversion rates by up to 45%.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description:
      "Leverage behavioral data and predictive modeling to reach your ideal customers at the perfect moment with personalized messaging.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description:
      "Automatically optimize ad spend, bid strategies, and creative elements across all platforms for maximum ROI and reduced costs.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Zap,
    title: "Automated Campaigns",
    description:
      "Set up and launch multi-channel campaigns in minutes with our intelligent automation that learns and adapts to your brand voice.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description:
      "Visualize and optimize every touchpoint in your customer journey with AI-driven insights and personalization at scale.",
    gradient: "from-secondary to-primary-glow",
  },
  {
    icon: Shield,
    title: "Brand Safety & Compliance",
    description:
      "Ensure your campaigns maintain brand integrity with AI-powered content moderation and regulatory compliance checks.",
    gradient: "from-accent to-secondary",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container-lg relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-section">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dominate
            </span>{" "}
            Your Market
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI marketing suite combines cutting-edge
            technology with intuitive design to deliver results that transform
            your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="group p-8 border-0 bg-card/50 glass hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-feature text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center text-primary group-hover:text-accent transition-colors cursor-pointer">
                    <span className="text-sm font-medium">Learn more</span>
                    <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the power of AI marketing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:scale-105 transition-transform">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
