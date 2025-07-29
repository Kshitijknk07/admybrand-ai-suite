import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechFlow Inc.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    content:
      "ADmyBRAND AI transformed our marketing ROI by 340% in just 3 months. The AI-powered insights are incredibly accurate and actionable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CEO",
    company: "Growth Dynamics",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "The automation features saved us 20+ hours per week while improving our campaign performance. Best marketing investment we've made.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Head of Digital Marketing",
    company: "InnovateCorp",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "The customer journey mapping feature helped us identify conversion bottlenecks we never knew existed. Revenue increased by 250%.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    title: "Marketing Manager",
    company: "StartupXYZ",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "As a startup, we needed efficient marketing tools that scale. ADmyBRAND AI delivered beyond our expectations with incredible results.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "CMO",
    company: "Enterprise Solutions",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content:
      "The enterprise features and dedicated support team make this the perfect solution for large-scale marketing operations.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container-lg">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-up">
          <h2 className="text-section">
            Loved by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              10,000+
            </span>{" "}
            Marketers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading companies are transforming their marketing results
            with ADmyBRAND AI Suite.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="p-12 border-0 bg-card/50 glass shadow-glow animate-scale-in">
            <div className="text-center space-y-8">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary/20 mx-auto" />

              {/* Testimonial Content */}
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-medium">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].title}
                    </div>
                    <div className="text-primary font-medium">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="glass"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="glass"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-3xl font-bold text-foreground">10,000+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-3xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">
              Satisfaction Rate
            </div>
          </div>
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-3xl font-bold text-foreground">300%</div>
            <div className="text-sm text-muted-foreground">
              Average ROI Increase
            </div>
          </div>
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-3xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">
              Support Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
