import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Calculator,
  TrendingUp,
  Users,
  Mail,
  Zap,
  Target,
  BarChart3,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Crown,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const PricingCalculator = () => {
  const [campaigns, setCampaigns] = useState([10]);
  const [contacts, setContacts] = useState([50000]);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Starter");

  // Calculate pricing based on usage
  const calculatePrice = () => {
    const campaignCount = campaigns[0];
    const contactCount = contacts[0];

    let basePrice = 49; // Starter price
    let planName = "Starter";

    // Upgrade to Professional if needed
    if (campaignCount > 5 || contactCount > 10000) {
      basePrice = 149;
      planName = "Professional";
    }

    // Upgrade to Enterprise if needed
    if (campaignCount > 50 || contactCount > 100000) {
      basePrice = 399;
      planName = "Enterprise";
    }

    // Additional costs for extra usage
    let extraCost = 0;
    if (campaignCount > 50) {
      extraCost += (campaignCount - 50) * 5;
    }
    if (contactCount > 100000) {
      extraCost += Math.ceil((contactCount - 100000) / 10000) * 10;
    }

    const monthlyPrice = basePrice + extraCost;
    const yearlyPrice = Math.floor(monthlyPrice * 0.8); // 20% discount

    return {
      monthly: monthlyPrice,
      yearly: yearlyPrice,
      plan: planName,
    };
  };

  const pricing = calculatePrice();
  const estimatedROI = Math.floor(pricing.monthly * 3.2); // 320% ROI
  const costPerContact = ((pricing.monthly / contacts[0]) * 1000).toFixed(3);

  // Update selected plan when pricing changes
  useEffect(() => {
    setSelectedPlan(pricing.plan);
  }, [pricing.plan]);

  const planFeatures = {
    Starter: [
      "Up to 5 campaigns/month",
      "10,000 contacts",
      "Basic analytics",
      "Email support",
      "AI recommendations",
    ],
    Professional: [
      "Up to 50 campaigns/month",
      "100,000 contacts",
      "Advanced analytics",
      "Priority support",
      "AI optimization",
      "A/B testing",
    ],
    Enterprise: [
      "Unlimited campaigns",
      "Unlimited contacts",
      "Custom analytics",
      "Dedicated support",
      "AI automation",
      "Custom integrations",
    ],
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Starter":
        return "from-blue-500 to-cyan-500";
      case "Professional":
        return "from-purple-500 to-pink-500";
      case "Enterprise":
        return "from-orange-500 to-red-500";
      default:
        return "from-blue-500 to-cyan-500";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/10">
      <div className="container-lg">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full">
              <Calculator className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">
                Smart Pricing Calculator
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              Find Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Adjust your needs and see real-time pricing. Our AI will recommend
              the best plan for your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Controls */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 border-0 bg-card/50 glass backdrop-blur-sm">
                <div className="space-y-8">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-2">
                      Your Requirements
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Adjust sliders to see pricing
                    </p>
                  </div>

                  {/* Campaigns Slider */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        <label className="text-sm font-medium">
                          Monthly Campaigns
                        </label>
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {campaigns[0]}
                      </Badge>
                    </div>
                    <Slider
                      value={campaigns}
                      onValueChange={setCampaigns}
                      max={100}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1</span>
                      <span>25</span>
                      <span>50</span>
                      <span>100</span>
                    </div>
                  </div>

                  {/* Contacts Slider */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <label className="text-sm font-medium">
                          Contact Database
                        </label>
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {contacts[0].toLocaleString()}
                      </Badge>
                    </div>
                    <Slider
                      value={contacts}
                      onValueChange={setContacts}
                      max={500000}
                      min={1000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1K</span>
                      <span>50K</span>
                      <span>100K</span>
                      <span>500K</span>
                    </div>
                  </div>

                  {/* Billing Toggle */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Billing Cycle</span>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        Save 20%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <span
                        className={`text-sm transition-colors ${!isYearly ? "text-foreground font-medium" : "text-muted-foreground"}`}
                      >
                        Monthly
                      </span>
                      <button
                        onClick={() => setIsYearly(!isYearly)}
                        className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                          isYearly ? "bg-primary shadow-lg" : "bg-muted"
                        }`}
                      >
                        <motion.div
                          className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                          animate={{ x: isYearly ? 28 : 4 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      </button>
                      <span
                        className={`text-sm transition-colors ${isYearly ? "text-foreground font-medium" : "text-muted-foreground"}`}
                      >
                        Yearly
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Results & Plan Details */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="space-y-6">
                {/* Main Pricing Card */}
                <Card className="p-8 border-0 bg-gradient-to-br from-card/80 to-card/40 glass backdrop-blur-sm">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Pricing Display */}
                    <div className="space-y-6">
                      <div className="text-center">
                        <Badge
                          className={`mb-3 bg-gradient-to-r ${getPlanColor(selectedPlan)} text-white border-0`}
                        >
                          <Crown className="w-3 h-3 mr-1" />
                          {selectedPlan} Plan
                        </Badge>
                        <div className="space-y-2">
                          <div className="text-4xl font-bold text-foreground">
                            ${isYearly ? pricing.yearly : pricing.monthly}
                            <span className="text-lg font-normal text-muted-foreground">
                              /month
                            </span>
                          </div>
                          {isYearly && (
                            <div className="text-sm text-muted-foreground">
                              ${pricing.yearly * 12}/year (billed annually)
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                          <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                          <div className="text-xs text-muted-foreground mb-1">
                            Monthly ROI
                          </div>
                          <div className="text-lg font-bold text-foreground">
                            ${estimatedROI.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                          <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-xs text-muted-foreground mb-1">
                            Cost per 1K
                          </div>
                          <div className="text-lg font-bold text-foreground">
                            ${costPerContact}
                          </div>
                        </div>
                      </div>

                      <Button variant="hero" size="lg" className="w-full group">
                        Start {selectedPlan} Plan
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* Plan Features */}
                    <div className="space-y-4">
                      <h5 className="font-semibold text-lg flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        Plan Features
                      </h5>
                      <div className="space-y-3">
                        <AnimatePresence mode="wait">
                          {planFeatures[
                            selectedPlan as keyof typeof planFeatures
                          ]?.map((feature, index) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Additional Benefits */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                    <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h6 className="font-semibold mb-2">AI-Powered</h6>
                    <p className="text-sm text-muted-foreground">
                      Smart optimization for maximum results
                    </p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
                    <BarChart3 className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h6 className="font-semibold mb-2">Advanced Analytics</h6>
                    <p className="text-sm text-muted-foreground">
                      Deep insights into campaign performance
                    </p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20">
                    <Mail className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <h6 className="font-semibold mb-2">Unlimited Emails</h6>
                    <p className="text-sm text-muted-foreground">
                      Send as many campaigns as you need
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
