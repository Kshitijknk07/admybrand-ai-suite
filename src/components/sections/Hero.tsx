import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Zap, Target } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs - Increased intensity */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-600/18 via-purple-600/18 to-pink-600/18 rounded-full blur-3xl" />

        {/* Flow gradient orbs that extend beyond section - Enhanced */}
        <div
          className="absolute top-10 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        />
        <div
          className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-indigo-500/18 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '6s' }}
        />

        {/* Enhanced flowing elements that extend to next sections */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-t from-blue-500/15 via-purple-500/12 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/12 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/12 to-transparent rounded-full blur-3xl" />

        {/* Enhanced Floating particles */}
        <div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse shadow-lg shadow-blue-400/40"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-purple-400/70 rounded-full animate-pulse shadow-lg shadow-purple-400/40"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse shadow-lg shadow-cyan-400/40"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-pink-400/70 rounded-full animate-pulse shadow-lg shadow-pink-400/40"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute top-1/6 right-1/5 w-2 h-2 bg-indigo-400/50 rounded-full animate-pulse shadow-lg shadow-indigo-400/30"
          style={{ animationDelay: '4s' }}
        />
        <div
          className="absolute bottom-1/6 right-2/3 w-2.5 h-2.5 bg-violet-400/60 rounded-full animate-pulse shadow-lg shadow-violet-400/40"
          style={{ animationDelay: '5s' }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <div
          className="absolute top-1/4 right-1/4 w-16 h-16 border border-primary/20 rounded-lg rotate-45 animate-float"
          style={{ animationDelay: '1s', animationDuration: '6s' }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-accent/20 rounded-full animate-float"
          style={{ animationDelay: '3s', animationDuration: '8s' }}
        />

        {/* Enhanced Gradient mesh */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-pink-600/20" />
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-500/15 via-transparent to-indigo-600/15" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-violet-600/15 via-transparent to-blue-500/20" />
        </div>

        {/* Enhanced atmospheric layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-slate-800/8" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-500/8 to-purple-600/12" />
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-20 glass rounded-2xl p-4 hidden lg:block hover:scale-105 transition-transform cursor-pointer"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold">ROI Increase</p>
            <p className="text-xs text-muted-foreground">+247%</p>
            <div className="w-full bg-muted rounded-full h-1 mt-1">
              <div
                className="bg-gradient-primary h-1 rounded-full animate-pulse"
                style={{ width: '85%' }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-32 left-20 glass rounded-2xl p-4 hidden lg:block hover:scale-105 transition-transform cursor-pointer"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-glow">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold">Campaigns</p>
            <p className="text-xs text-muted-foreground">Auto-Generated</p>
            <div className="flex space-x-1 mt-1">
              <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
              <div
                className="w-1 h-1 bg-accent rounded-full animate-pulse"
                style={{ animationDelay: '0.2s' }}
              />
              <div
                className="w-1 h-1 bg-accent rounded-full animate-pulse"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Additional floating element */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 left-10 glass rounded-2xl p-3 hidden xl:block hover:scale-105 transition-transform cursor-pointer"
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-glow">
            <Target className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold">AI Accuracy</p>
            <p className="text-xs text-muted-foreground">94%</p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center space-x-2 glass rounded-full px-6 py-2 mb-8"
          >
            <Target className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              AI-Powered Marketing Revolution
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-hero mb-6 font-inter"
          >
            AI-Powered Marketing
            <br />
            <FlipWords
              words={[
                'That Converts.',
                'That Sells.',
                'That Inspires.',
                'That Grows.',
                'That Wins.',
                'That Engages.',
                'That Performs.',
                'That Delivers.',
              ]}
              duration={2200}
              className="text-5xl md:text-7xl font-bold text-purple-600"
            />
            <br />
            <span className="text-muted-foreground text-4xl md:text-6xl">
              Effortlessly.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-subtitle text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Supercharge your campaigns, automate intelligent decisions, and
            accelerate growth with the most advanced AI marketing suite ever
            built.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl" className="group">
              Get Started Free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm"
          >
            <motion.div
              className="flex items-center space-x-2 glass rounded-full px-4 py-2 hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
              <span className="font-medium">10,000+ Active Users</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 glass rounded-full px-4 py-2 hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              <span className="font-medium">247% Average ROI</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 glass rounded-full px-4 py-2 hover:scale-105 transition-transform cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
              <span className="font-medium">Enterprise Ready</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
