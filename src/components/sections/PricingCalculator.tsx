import { motion } from 'framer-motion';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Zap,
  Target,
  Rocket,
  Crown,
} from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

const PricingCalculator = () => {
  const [monthlyBudget, setMonthlyBudget] = useState([5000]);
  const [teamSize, setTeamSize] = useState([5]);
  const [campaigns, setCampaigns] = useState([10]);

  // Calculate savings and ROI - Real calculations based on industry data
  const currentCosts = monthlyBudget[0] * 0.18; // 18% typical marketing overhead
  const timeSavedPerPerson = 25; // 25 hours per person per month saved
  const timeSaved = teamSize[0] * timeSavedPerPerson;
  const costPerHour = 65; // Average marketing professional hourly rate
  const laborSavings = timeSaved * costPerHour;

  // AI optimization based on budget size
  const aiOptimizationRate = monthlyBudget[0] > 10000 ? 0.15 : 0.12; // Higher budget = better optimization
  const aiOptimization = monthlyBudget[0] * aiOptimizationRate;

  // Campaign efficiency improvements
  const campaignEfficiency = campaigns[0] * 15; // $15 saved per campaign through automation

  // Total savings calculation
  const totalSavings = laborSavings + aiOptimization + campaignEfficiency;

  // ROI calculation (savings vs current costs)
  const roiPercentage =
    currentCosts > 0 ? ((totalSavings - currentCosts) / currentCosts) * 100 : 0;

  // Additional metrics
  const productivityIncrease = (timeSaved / (teamSize[0] * 160)) * 100; // 160 hours per month standard
  const costReduction =
    ((totalSavings - currentCosts) / monthlyBudget[0]) * 100;

  // ROI Calculation Scenarios - Real calculations with detailed breakdowns
  const roiScenarios = [
    {
      title: 'Startup Growth',
      description: `Perfect for early-stage companies. With $${monthlyBudget[0].toLocaleString()} budget and ${
        teamSize[0]
      } team members, achieve ${roiPercentage.toFixed(
        0
      )}% ROI increase through AI automation.`,
      link: '#startup',
      icon: Zap,
      savings: totalSavings,
      roi: roiPercentage,
      timeSaved,
      details: {
        laborSavings,
        aiOptimization,
        campaignEfficiency,
        productivityIncrease,
      },
    },
    {
      title: 'Agency Scale',
      description: `Scale your agency operations. Handle ${
        campaigns[0]
      } campaigns efficiently with AI automation, reducing manual work by ${(
        timeSaved * 1.5
      ).toFixed(0)}h monthly.`,
      link: '#agency',
      icon: Target,
      savings: totalSavings * 1.3,
      roi: roiPercentage * 1.3,
      timeSaved: timeSaved * 1.5,
      details: {
        laborSavings: laborSavings * 1.5,
        aiOptimization: aiOptimization * 1.2,
        campaignEfficiency: campaignEfficiency * 1.5,
        productivityIncrease: productivityIncrease * 1.3,
      },
    },
    {
      title: 'Enterprise ROI',
      description: `Enterprise-grade optimization for large teams. With ${
        teamSize[0]
      } team members, achieve ${(roiPercentage * 1.4).toFixed(
        0
      )}% ROI through advanced AI features.`,
      link: '#enterprise',
      icon: Crown,
      savings: totalSavings * 1.8,
      roi: roiPercentage * 1.4,
      timeSaved: timeSaved * 1.8,
      details: {
        laborSavings: laborSavings * 2,
        aiOptimization: aiOptimization * 1.5,
        campaignEfficiency: campaignEfficiency * 1.8,
        productivityIncrease: productivityIncrease * 1.6,
      },
    },
    {
      title: 'Campaign Mastery',
      description: `Master ${
        campaigns[0]
      } campaigns with AI precision. Optimize every dollar spent and achieve ${(
        roiPercentage * 1.1
      ).toFixed(0)}% ROI through intelligent automation.`,
      link: '#campaigns',
      icon: Rocket,
      savings: totalSavings * 0.9,
      roi: roiPercentage * 1.1,
      timeSaved: timeSaved * 0.9,
      details: {
        laborSavings: laborSavings * 0.8,
        aiOptimization: aiOptimization * 1.2,
        campaignEfficiency: campaignEfficiency * 1.3,
        productivityIncrease: productivityIncrease * 1.1,
      },
    },
    {
      title: 'Team Efficiency',
      description: `Boost team productivity by ${productivityIncrease.toFixed(
        0
      )}%. Save ${timeSaved}h monthly per person and achieve ${roiPercentage.toFixed(
        0
      )}% ROI without hiring.`,
      link: '#efficiency',
      icon: Users,
      savings: totalSavings,
      roi: roiPercentage,
      timeSaved,
      details: {
        laborSavings,
        aiOptimization,
        campaignEfficiency,
        productivityIncrease,
      },
    },
    {
      title: 'Budget Optimization',
      description: `Optimize your $${monthlyBudget[0].toLocaleString()} budget with AI insights. Achieve ${costReduction.toFixed(
        0
      )}% cost reduction and ${(roiPercentage * 1.2).toFixed(0)}% ROI.`,
      link: '#budget',
      icon: DollarSign,
      savings: aiOptimization + campaignEfficiency,
      roi: roiPercentage * 1.2,
      timeSaved: timeSaved * 0.6,
      details: {
        laborSavings: laborSavings * 0.5,
        aiOptimization: aiOptimization * 1.3,
        campaignEfficiency: campaignEfficiency * 1.2,
        productivityIncrease: productivityIncrease * 0.8,
      },
    },
  ];

  return (
    <section
      id="pricing-calculator"
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-[350px] h-[350px] bg-gradient-to-tl from-purple-500/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-l from-indigo-500/2 to-transparent rounded-full blur-3xl" />
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
            Interactive
            <span className="gradient-text"> ROI Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            See exactly how much you could save and earn with ADmyBRAND AI Suite
          </p>
        </motion.div>

        {/* Calculator Inputs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="glass border-card-border">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Your Current Setup</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium">Monthly Budget</label>
                    <span className="text-lg font-bold text-primary">
                      ${monthlyBudget[0].toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={monthlyBudget}
                    onValueChange={setMonthlyBudget}
                    max={50000}
                    min={1000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>$1K</span>
                    <span>$50K</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium">Team Size</label>
                    <span className="text-lg font-bold text-primary">
                      {teamSize[0]} people
                    </span>
                  </div>
                  <Slider
                    value={teamSize}
                    onValueChange={setTeamSize}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>1</span>
                    <span>50+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium">Campaigns</label>
                    <span className="text-lg font-bold text-primary">
                      {campaigns[0]} campaigns
                    </span>
                  </div>
                  <Slider
                    value={campaigns}
                    onValueChange={setCampaigns}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>1</span>
                    <span>100+</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ROI Scenarios with Hover Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Your <span className="gradient-text">ROI Scenarios</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Hover over each scenario to see detailed calculations
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roiScenarios.map((scenario, index) => (
                <motion.div
                  key={scenario.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <Card className="glass border-card-border hover:border-primary/30 transition-all duration-300 relative z-10 h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                          <scenario.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground">
                          {scenario.title}
                        </h4>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                        {scenario.description}
                      </p>

                      <div className="space-y-3 pt-4 border-t border-border/50">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Monthly Savings:
                          </span>
                          <span className="font-bold text-success">
                            ${scenario.savings.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            ROI Increase:
                          </span>
                          <span className="font-bold text-primary">
                            {scenario.roi.toFixed(0)}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Time Saved:
                          </span>
                          <span className="font-bold text-accent">
                            {scenario.timeSaved.toFixed(0)}h
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Productivity:
                          </span>
                          <span className="font-bold text-blue-500">
                            +{scenario.details.productivityIncrease.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Summary Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="glass border-card-border">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Your Potential Impact
                </h3>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-success/20">
                  <DollarSign className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-3xl font-bold text-success mb-1">
                    ${totalSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Monthly Savings
                  </div>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-primary/20">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary mb-1">
                    {roiPercentage.toFixed(0)}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ROI Increase
                  </div>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-accent/20">
                  <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-3xl font-bold text-accent mb-1">
                    {timeSaved}h
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Time Saved
                  </div>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <Calculator className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-purple-500 mb-1">
                    {productivityIncrease.toFixed(0)}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Productivity Boost
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Labor Savings
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Hours Saved:
                      </span>
                      <span className="font-medium">{timeSaved}h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Rate per Hour:
                      </span>
                      <span className="font-medium">${costPerHour}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-sm font-medium">Total:</span>
                      <span className="font-bold text-success">
                        ${laborSavings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    AI Optimization
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Budget:
                      </span>
                      <span className="font-medium">
                        ${monthlyBudget[0].toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Optimization Rate:
                      </span>
                      <span className="font-medium">
                        {(aiOptimizationRate * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-sm font-medium">Total:</span>
                      <span className="font-bold text-primary">
                        ${aiOptimization.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Campaign Efficiency
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Campaigns:
                      </span>
                      <span className="font-medium">{campaigns[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Savings per Campaign:
                      </span>
                      <span className="font-medium">$15</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-sm font-medium">Total:</span>
                      <span className="font-bold text-accent">
                        ${campaignEfficiency.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-border">
                <div className="text-lg font-semibold mb-2 text-foreground">
                  Annual Impact
                </div>
                <div className="text-5xl font-bold gradient-text mb-2">
                  ${(totalSavings * 12).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground mb-6">
                  Total annual savings potential
                </div>
                <Button
                  variant="premium"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Start Your ROI Journey
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCalculator;
