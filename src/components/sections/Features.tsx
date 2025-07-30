import { motion } from 'framer-motion';
import {
  Brain,
  Target,
  TrendingUp,
  Share2,
  BarChart3,
  PenTool,
  Zap,
  Shield,
} from 'lucide-react';

import { cn } from '@/lib/utils';

const Features = () => {
  const features = [
    {
      title: 'AI Campaign Generator',
      description:
        'Generate high-converting campaigns in seconds with our advanced AI that learns from millions of successful campaigns.',
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: 'Smart Budget Optimizer',
      description:
        'Automatically optimize your ad spend across channels using predictive algorithms that maximize your ROI.',
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: 'Conversion Forecasting',
      description:
        'Predict campaign performance with 94% accuracy using machine learning models trained on real market data.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Multi-Channel Publishing',
      description:
        'Distribute your campaigns across all major platforms with one click, maintaining brand consistency everywhere.',
      icon: <Share2 className="w-8 h-8" />,
    },
    {
      title: 'Real-time Analytics',
      description:
        'Monitor all your campaigns in one unified dashboard with live updates and actionable insights.',
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: 'AI Copywriter',
      description:
        "Create compelling ad copy that converts using AI trained on the world's best-performing advertisements.",
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      title: 'Lightning Fast Setup',
      description:
        'Go from signup to first campaign in under 60 seconds with our intelligent onboarding system.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: 'Enterprise Security',
      description:
        'Bank-level security with SOC 2 compliance, end-to-end encryption, and 99.9% uptime guarantee.',
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      {/* Flowing gradient effects from hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-gradient-to-b from-blue-500/4 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/3 w-[300px] h-[300px] bg-gradient-to-bl from-purple-500/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-t from-cyan-500/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
            Supercharged
            <span className="gradient-text"> AI Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to dominate your market with intelligent
            automation, predictive insights, and seamless execution.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to experience the future of marketing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of marketers who've already transformed their
              campaigns with AI.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold shadow-glow hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'flex flex-col lg:border-r border-card-border py-10 relative group/feature',
        (index === 0 || index === 4) && 'lg:border-l border-card-border',
        index < 4 && 'lg:border-b border-card-border'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-primary group-hover/feature:text-primary-glow transition-colors duration-200">
        {icon}
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-muted group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>

      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default Features;
