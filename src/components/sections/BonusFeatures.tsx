import React from 'react';

import { Timeline } from '../ui/timeline';

const BonusFeatures = () => {
  const timelineData = [
    {
      title: '2024',
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-muted-foreground md:text-lg leading-relaxed">
            Launched ADmyBRAND AI Suite with advanced campaign generation and
            multi-platform publishing capabilities. This marked the beginning of
            our journey to revolutionize AI-powered marketing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
              alt="AI Campaign Dashboard"
              width={500}
              height={300}
              className="h-48 w-full rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-56 lg:h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop"
              alt="Analytics Dashboard"
              width={500}
              height={300}
              className="h-48 w-full rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-56 lg:h-64"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Q3 2024',
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-muted-foreground md:text-lg leading-relaxed">
            Introduced predictive analytics with 94% accuracy and real-time
            performance optimization for marketing campaigns. Our AI models
            began delivering unprecedented insights for marketers worldwide.
          </p>
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-3 text-base text-muted-foreground md:text-lg">
              <span className="text-green-500 text-xl">✅</span>
              <span className="font-medium">
                Conversion Forecasting with 94% Accuracy
              </span>
            </div>
            <div className="flex items-center gap-3 text-base text-muted-foreground md:text-lg">
              <span className="text-green-500 text-xl">✅</span>
              <span className="font-medium">Smart Budget Optimization</span>
            </div>
            <div className="flex items-center gap-3 text-base text-muted-foreground md:text-lg">
              <span className="text-green-500 text-xl">✅</span>
              <span className="font-medium">Multi-Channel Publishing</span>
            </div>
            <div className="flex items-center gap-3 text-base text-muted-foreground md:text-lg">
              <span className="text-green-500 text-xl">✅</span>
              <span className="font-medium">Advanced Real-time Reporting</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Q4 2024',
      content: (
        <div>
          <p className="mb-8 text-base font-normal text-muted-foreground md:text-lg leading-relaxed">
            Enhanced AI capabilities with custom model training and
            enterprise-grade security features. We expanded our platform to
            serve Fortune 500 companies with specialized requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <img
              src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=500&h=300&fit=crop"
              alt="AI Model Training"
              width={500}
              height={300}
              className="h-48 w-full rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-56 lg:h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop"
              alt="Security Features"
              width={500}
              height={300}
              className="h-48 w-full rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-56 lg:h-64"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-base text-muted-foreground md:text-lg">
              <span className="text-blue-500 text-xl">🔒</span>
              <span className="font-medium">SOC 2 Type II Compliance</span>
            </div>
            <div className="flex items-center gap-3 text-base text-muted-foreground md:text-lg">
              <span className="text-purple-500 text-xl">🧠</span>
              <span className="font-medium">Custom AI Model Training</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="relative overflow-hidden">
      {/* Flowing gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[350px] h-[350px] bg-gradient-to-b from-purple-500/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-blue-500/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-cyan-500/2 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter text-center">
            Development
            <span className="gradient-text"> Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-center mb-4">
            Track our journey building the most advanced AI marketing platform.
          </p>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed text-center">
            From our initial launch to becoming the industry leader in
            AI-powered marketing, discover how we've continuously evolved our
            platform to deliver unprecedented results for businesses worldwide.
            Each milestone represents our commitment to innovation and
            excellence in marketing technology.
          </p>
        </div>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default BonusFeatures;
