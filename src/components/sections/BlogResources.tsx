import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import React from 'react';

import { Badge } from '@/components/ui/badge';

import { LayoutGrid } from '../ui/layout-grid';

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        AI Marketing Strategy Guide
      </p>
      <p className="font-normal text-base text-white" />
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Comprehensive guide to implementing AI-powered marketing strategies that
        drive real results. Learn from industry experts and real case studies.
      </p>
      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">
        Strategy Guide
      </Badge>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Campaign Setup Tutorial
      </p>
      <p className="font-normal text-base text-white" />
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Step-by-step tutorial on setting up your first AI-powered campaign in
        under 5 minutes. Perfect for beginners.
      </p>
      <div className="flex items-center space-x-2 mt-4">
        <Clock className="w-4 h-4 text-neutral-300" />
        <span className="text-sm text-neutral-300">5 min read</span>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        ROI Success Stories
      </p>
      <p className="font-normal text-base text-white" />
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Real case studies showing how companies achieved 340%+ ROI increases
        using our AI marketing suite. Get inspired by their success.
      </p>
      <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
        Case Study
      </Badge>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Advanced Analytics Dashboard
      </p>
      <p className="font-normal text-base text-white" />
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Deep dive into our analytics capabilities. Learn how to interpret data,
        optimize campaigns, and predict performance with 94% accuracy.
      </p>
      <div className="flex items-center space-x-2 mt-4">
        <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">
          Analytics
        </Badge>
        <span className="text-sm text-neutral-300">• 12 min read</span>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail:
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const BlogResources = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
            Learn & Grow with
            <span className="gradient-text"> Expert Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead with insights, tutorials, and case studies from AI
            marketing experts.
          </p>
        </motion.div>

        {/* Layout Grid with Marketing Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="min-h-[800px]"
        >
          <div className="w-full">
            <LayoutGrid cards={cards} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogResources;
