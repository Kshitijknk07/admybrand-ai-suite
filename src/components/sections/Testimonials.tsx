import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "ADmyBRAND AI transformed our marketing completely. We've seen a 347% increase in ROI and our campaigns now practically run themselves. The AI copywriting alone has saved us 20+ hours per week.",
      name: "Sarah Chen",
      designation: "CMO at TechFlow Solutions",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The conversion forecasting is incredibly accurate. We've been able to allocate budget more effectively and our conversion rates have improved by 156%. This platform pays for itself many times over.",
      name: "Michael Rodriguez",
      designation: "Founder & CEO at GrowthLabs",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "What used to take our team days now takes minutes. The multi-channel publishing feature ensures our brand voice is consistent everywhere. Our engagement rates have never been higher.",
      name: "Emily Watson",
      designation: "Digital Marketing Director at ScaleUp Inc",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The smart budget optimizer is a game-changer. It automatically shifts spend to our best-performing campaigns in real-time. We've reduced wasted ad spend by 78% while increasing overall performance.",
      name: "David Kim",
      designation: "Performance Marketing Lead at Digital Dynamics",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The AI-powered analytics dashboard gives us insights we never had before. We can now predict campaign performance with 94% accuracy and optimize in real-time. It's like having a crystal ball for marketing.",
      name: "Lisa Thompson",
      designation: "VP of Marketing at FutureNet",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
            Loved by
            <span className="gradient-text"> Marketing Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of marketers who've transformed their campaigns with
            our AI-powered platform.
          </p>
        </motion.div>

        {/* Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                10,000+
              </div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">347%</div>
              <div className="text-muted-foreground">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">94%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">20+</div>
              <div className="text-muted-foreground">Hours Saved Weekly</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
