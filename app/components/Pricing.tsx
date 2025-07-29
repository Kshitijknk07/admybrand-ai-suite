import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Crown, Zap, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 49,
    yearlyPrice: 39,
    icon: Zap,
    features: [
      "Up to 5 campaigns",
      "Basic AI analytics",
      "Email support",
      "10,000 monthly contacts",
      "Standard templates",
      "Basic reporting",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing marketing teams",
    monthlyPrice: 149,
    yearlyPrice: 119,
    icon: Crown,
    features: [
      "Unlimited campaigns",
      "Advanced AI optimization",
      "Priority support",
      "100,000 monthly contacts",
      "Custom templates",
      "Advanced analytics",
      "A/B testing",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations and agencies",
    monthlyPrice: 399,
    yearlyPrice: 319,
    icon: Star,
    features: [
      "Everything in Professional",
      "Custom AI models",
      "Dedicated success manager",
      "Unlimited contacts",
      "White-label solution",
      "API access",
      "Custom integrations",
      "Advanced security",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24">
      <div className="container-lg">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-up">
          <h2 className="text-section">
            Simple,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no
            surprises. Cancel or upgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 glass p-2 rounded-full w-fit mx-auto">
            <span
              className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-gradient-primary"
            />
            <span
              className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly
            </span>
            <Badge variant="secondary" className="ml-2">
              Save 20%
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative p-8 border-0 bg-card/50 glass transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-up ${
                plan.popular ? "ring-2 ring-primary/20 scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white">
                  Most Popular
                </Badge>
              )}

              <div className="text-center space-y-6">
                {/* Plan Header */}
                <div className="space-y-2">
                  <div
                    className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${
                      plan.popular
                        ? "from-primary to-primary-glow"
                        : "from-muted to-accent"
                    } p-3`}
                  >
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-muted-foreground">
                      Billed annually (${plan.yearlyPrice * 12}/year)
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.name === "Enterprise"
                    ? "Contact Sales"
                    : "Start Free Trial"}
                </Button>

                {/* Features List */}
                <div className="space-y-3 pt-6">
                  {plan.features.map(feature => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-left"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 space-y-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our enterprise team can create a tailored package that fits your
              specific needs and budget requirements.
            </p>
            <Button variant="gradient" size="lg">
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
