import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, Mail } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "10 AI Marketing Strategies That Increased ROI by 400%",
    excerpt:
      "Discover the proven AI-powered marketing tactics that leading companies use to dramatically improve their return on investment and scale their growth.",
    category: "Strategy",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Customer Journey Mapping with AI",
    excerpt:
      "Learn how artificial intelligence is revolutionizing customer journey mapping and helping marketers create more personalized experiences at scale.",
    category: "Technology",
    readTime: "6 min read",
    date: "Dec 12, 2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Case Study: How StartupXYZ Achieved 300% Growth",
    excerpt:
      "A deep dive into how a fast-growing startup leveraged AI marketing automation to triple their revenue in just 6 months using our platform.",
    category: "Case Study",
    readTime: "12 min read",
    date: "Dec 10, 2024",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    featured: false,
  },
];

export const Blog = () => {
  return (
    <section className="py-24">
      <div className="container-lg">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Latest Resources</span>
          </div>
          <h2 className="text-section">
            Marketing{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Insights
            </span>{" "}
            & Best Practices
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, case studies, and
            actionable strategies from our marketing intelligence team.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 bg-card/50 glass hover:shadow-glow transition-all duration-500 animate-fade-up">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-primary text-white">
                  Featured
                </Badge>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">{blogPosts[0].category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <Button variant="gradient" className="group w-fit">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-0 bg-card/50 glass hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {post.category}
                </Badge>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="group p-0 h-auto font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Card className="p-8 border-0 bg-gradient-primary text-white max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Want More Marketing Insights?
              </h3>
              <p className="text-white/90">
                Subscribe to our newsletter and get weekly insights, case
                studies, and actionable marketing strategies delivered to your
                inbox.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Button variant="secondary" size="default">
                  Subscribe
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
