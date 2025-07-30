import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    setShowVideo(true);
  };

  return (
    <section id="demo-video" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
            See ADmyBRAND
            <span className="gradient-text"> In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch how our AI-powered suite transforms marketing campaigns from
            concept to conversion in minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="glass border-card-border overflow-hidden shadow-elegant">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {!showVideo ? (
                  // Video Preview/Thumbnail
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />

                    {/* Play Button */}
                    <motion.button
                      onClick={handlePlayClick}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group"
                    >
                      <Play className="w-10 h-10 text-white ml-1 group-hover:text-primary transition-colors" />
                    </motion.button>

                    {/* Video Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        ADmyBRAND AI Suite Demo
                      </h3>
                      <p className="text-white/80 text-lg">
                        3 minutes • See how AI transforms your marketing
                        workflow
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                  </div>
                ) : (
                  // Video Player Interface (Placeholder)
                  <div className="relative w-full h-full bg-black flex items-center justify-center">
                    <div className="text-center text-white">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
                        style={{ borderTopColor: 'transparent' }}
                      />
                      <p className="text-lg">Demo video would load here</p>
                      <p className="text-sm text-white/60 mt-2">
                        Connect with a real video URL to display content
                      </p>
                    </div>

                    {/* Video Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-white hover:bg-white/20"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5" />
                        )}
                      </Button>

                      <div className="flex-1 h-1 bg-white/30 rounded-full">
                        <div className="w-1/3 h-full bg-primary rounded-full" />
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20"
                      >
                        <Volume2 className="w-5 h-5" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20"
                      >
                        <Maximize className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Video Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: '3-Minute Overview',
                description: 'Complete platform walkthrough in under 3 minutes',
              },
              {
                title: 'Real Campaigns',
                description:
                  'See actual results from successful AI-generated campaigns',
              },
              {
                title: 'Live Dashboard',
                description:
                  'Watch real-time analytics and optimization in action',
              },
            ].map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="premium" size="lg">
            Schedule Live Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;
