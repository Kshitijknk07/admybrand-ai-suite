import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, Crown, Sparkles, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Feature Badge Component for Clean Comparison Table
const FeatureBadge = ({
  feature,
}: {
  feature: { value: string; available: boolean };
}) => {
  if (!feature.available) {
    return (
      <div className="flex items-center justify-center">
        <X className="w-4 h-4 text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="text-sm font-medium text-foreground">{feature.value}</div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Star,
      description: 'Perfect for individuals and small teams',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        '5 AI-generated campaigns per month',
        'Basic analytics dashboard',
        'Email support',
        '1 social media platform',
        'Standard templates',
        'Community access',
      ],
      limitations: [
        'No advanced AI optimization',
        'No multi-channel publishing',
        'No priority support',
      ],
      cta: 'Get Started Free',
      popular: false,
      gradient: 'from-slate-500 to-slate-600',
      color: 'slate',
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: Zap,
      description: 'Best for growing businesses and agencies',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'Unlimited AI campaigns',
        'Advanced performance analytics',
        'Priority support',
        'All social media platforms',
        'Custom templates & branding',
        'A/B testing suite',
        'Conversion forecasting',
        'Smart budget optimization',
        'Team collaboration',
        'API access',
      ],
      limitations: ['No white-label solution', 'No custom integrations'],
      cta: 'Start Pro Trial',
      popular: true,
      gradient: 'from-purple-500 via-pink-500 to-orange-500',
      color: 'purple',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      description: 'For large organizations and enterprises',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Everything in Pro',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'Custom AI model training',
        'Advanced security & compliance',
        'Unlimited API access',
        'Custom reporting & dashboards',
        '24/7 phone support',
        'On-premise deployment',
        'Custom SLA',
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      color: 'amber',
    },
  ];

  const comparisonFeatures = [
    {
      feature: 'AI Campaigns',
      starter: { value: '5/month', available: true },
      pro: { value: 'Unlimited', available: true },
      enterprise: { value: 'Unlimited', available: true },
    },
    {
      feature: 'Platforms',
      starter: { value: '1 platform', available: true },
      pro: { value: 'All platforms', available: true },
      enterprise: { value: 'All + Custom', available: true },
    },
    {
      feature: 'Analytics',
      starter: { value: 'Basic', available: true },
      pro: { value: 'Advanced', available: true },
      enterprise: { value: 'Custom', available: true },
    },
    {
      feature: 'Support',
      starter: { value: 'Email', available: true },
      pro: { value: 'Priority', available: true },
      enterprise: { value: '24/7 Dedicated', available: true },
    },
    {
      feature: 'API Access',
      starter: { value: 'No', available: false },
      pro: { value: 'Yes', available: true },
      enterprise: { value: 'Full', available: true },
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects - Enhanced flowing gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/4 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/4 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-cyan-500/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/3 to-transparent rounded-full blur-3xl" />
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
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Pricing Plans
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
            Choose Your
            <span className="gradient-text"> Growth Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Start free, scale as you grow. Every plan includes our core AI
            features with no hidden fees.
          </p>

          {/* Enhanced Billing Toggle */}
          <motion.div
            className="inline-flex items-center glass rounded-2xl p-2 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-8 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                !isAnnual
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-8 py-3 text-sm font-semibold rounded-xl transition-all duration-300 relative ${
                isAnnual
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annual
              <motion.span
                className="absolute -top-3 -right-3 bg-accent text-xs px-3 py-1 rounded-full text-background font-bold shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Save 20%
              </motion.span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 auto-rows-fr">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.01 }}
              className="relative h-full"
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-5 py-2 rounded-full text-xs font-bold shadow-glow tracking-wide">
                    <Sparkles className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <Card
                className={
                  'glass border-card-border hover:border-primary/30 transition-all duration-500 overflow-hidden h-full flex flex-col'
                }
              >
                <div className={`h-1 bg-gradient-to-r ${plan.gradient}`} />

                {/* Header Section - Fixed Height */}
                <CardHeader className="text-center pb-6 pt-8 flex-shrink-0">
                  <div className="mb-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${plan.gradient} p-0.5 shadow-lg`}
                    >
                      <div className="w-full h-full bg-card rounded-3xl flex items-center justify-center">
                        <plan.icon className="w-10 h-10 text-foreground" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed min-h-[48px]">
                    {plan.description}
                  </p>

                  {/* Pricing Section - Fixed Height */}
                  <div className="mb-6 min-h-[100px] flex flex-col justify-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground ml-3 text-lg">
                        /month
                      </span>
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Billed annually (${plan.annualPrice * 12})
                      </p>
                    )}
                    {plan.monthlyPrice === 0 && (
                      <p className="text-sm text-success font-semibold mt-2">
                        Forever Free
                      </p>
                    )}
                  </div>
                </CardHeader>

                {/* Content Section - Flexible Height */}
                <CardContent className="pt-0 flex-grow flex flex-col">
                  {/* Features List - Flexible */}
                  <div className="space-y-3 flex-grow mb-6">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                      What's included:
                    </h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}

                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3 mt-6">
                          Not included:
                        </h4>
                        {plan.limitations.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start opacity-60"
                          >
                            <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                              <X className="w-3 h-3 text-muted-foreground" />
                            </div>
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* Button Section - Fixed at Bottom */}
                  <div className="mt-auto pt-6 border-t border-card-border/50">
                    <Button
                      variant={plan.popular ? 'premium' : 'outline'}
                      className="w-full h-12 text-base font-semibold"
                      size="lg"
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Simple Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">
              Compare <span className="gradient-text">Features</span>
            </h3>
            <p className="text-muted-foreground">
              See what's included in each plan
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="glass rounded-2xl overflow-hidden shadow-elegant">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-card-border">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Starter</th>
                      <th className="text-center p-4 font-semibold">Pro</th>
                      <th className="text-center p-4 font-semibold">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, index) => (
                      <motion.tr
                        key={index}
                        className="border-b border-card-border/30 hover:bg-muted/30 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          <FeatureBadge feature={row.starter} />
                        </td>
                        <td className="p-4 text-center">
                          <FeatureBadge feature={row.pro} />
                        </td>
                        <td className="p-4 text-center">
                          <FeatureBadge feature={row.enterprise} />
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Plan Selection Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPlan(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-3xl p-8 max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">
                Get Started with {plans.find(p => p.id === selectedPlan)?.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to transform your marketing? Let's get you set up with the
                perfect plan.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedPlan(null)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button variant="premium" className="flex-1">
                  Continue
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Pricing;
