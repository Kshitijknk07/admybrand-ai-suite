import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Users, Mail } from "lucide-react";

export const PricingCalculator = () => {
  const [campaigns, setCampaigns] = useState([10]);
  const [contacts, setContacts] = useState([50000]);
  const [isYearly, setIsYearly] = useState(false);

  // Calculate pricing based on usage
  const calculatePrice = () => {
    const campaignCount = campaigns[0];
    const contactCount = contacts[0];

    let basePrice = 49; // Starter price

    // Upgrade to Professional if needed
    if (campaignCount > 5 || contactCount > 10000) {
      basePrice = 149;
    }

    // Upgrade to Enterprise if needed
    if (campaignCount > 50 || contactCount > 100000) {
      basePrice = 399;
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

    return isYearly ? yearlyPrice : monthlyPrice;
  };

  const getPlanName = () => {
    const campaignCount = campaigns[0];
    const contactCount = contacts[0];

    if (campaignCount > 50 || contactCount > 100000) return "Enterprise";
    if (campaignCount > 5 || contactCount > 10000) return "Professional";
    return "Starter";
  };

  const estimatedROI = Math.floor(calculatePrice() * 3.2); // 320% ROI

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Calculator className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Pricing Calculator</span>
            </div>
            <h3 className="text-3xl font-bold text-foreground">
              Calculate Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h3>
            <p className="text-muted-foreground">
              Adjust the sliders to see how our pricing scales with your needs
            </p>
          </div>

          <Card className="p-8 border-0 bg-card/50 glass">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Controls */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">
                      Monthly Campaigns
                    </label>
                    <Badge variant="secondary">{campaigns[0]}</Badge>
                  </div>
                  <Slider
                    value={campaigns}
                    onValueChange={setCampaigns}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">
                      Contact Database Size
                    </label>
                    <Badge variant="secondary">
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
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm">Monthly</span>
                  <button
                    onClick={() => setIsYearly(!isYearly)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      isYearly ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        isYearly ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                  <span className="text-sm">Yearly</span>
                  <Badge className="bg-green-100 text-green-800">
                    Save 20%
                  </Badge>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-primary rounded-xl text-white">
                  <div className="text-sm opacity-90 mb-2">
                    Recommended Plan
                  </div>
                  <div className="text-2xl font-bold mb-2">{getPlanName()}</div>
                  <div className="text-4xl font-bold">
                    ${calculatePrice()}
                    <span className="text-lg font-normal opacity-90">
                      /month
                    </span>
                  </div>
                  {isYearly && (
                    <div className="text-sm opacity-90">
                      ${calculatePrice() * 12}/year (billed annually)
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">
                      Estimated Monthly ROI
                    </div>
                    <div className="text-xl font-bold text-foreground">
                      ${estimatedROI.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">
                      Cost per Contact
                    </div>
                    <div className="text-xl font-bold text-foreground">
                      ${((calculatePrice() / contacts[0]) * 1000).toFixed(3)}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>Unlimited email campaigns</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span>AI-powered optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>Advanced audience targeting</span>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Start {getPlanName()} Plan
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
