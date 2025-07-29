import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@admybrand.ai",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "123 Innovation Drive",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container-lg">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-up">
          <h2 className="text-section">
            Get in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your marketing with AI? Let&apos;s discuss how
            ADmyBRAND AI can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 border-0 bg-card/50 glass animate-fade-up">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Send us a message
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your marketing goals and how we can help..."
                      rows={6}
                      className="bg-background/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </Card>

          {/* Contact Information */}
          <div
            className="space-y-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h3>
              <p className="text-muted-foreground mb-8">
                We&apos;re here to help you succeed. Reach out to us through any
                of these channels and let&apos;s start building something
                amazing together.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(item => (
                <Card
                  key={item.title}
                  className="p-6 border-0 bg-card/30 glass hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg p-3 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {item.content}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional CTA */}
            <Card className="p-6 border-0 bg-gradient-primary text-white">
              <h4 className="font-semibold mb-2">Need immediate assistance?</h4>
              <p className="text-white/90 mb-4 text-sm">
                Join our live chat or schedule a demo call with our team.
              </p>
              <div className="flex gap-3">
                <Button variant="secondary" size="sm">
                  Live Chat
                </Button>
                <Button
                  variant="glass"
                  size="sm"
                  className="text-white border-white/20 hover:bg-white/20"
                >
                  Schedule Demo
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
