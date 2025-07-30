import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: 'Message sent successfully!',
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@admybrand.ai',
      description: 'Get in touch for any questions',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'San Francisco, CA',
      description: '123 Innovation Drive',
    },
  ];

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Enhanced flowing gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/4 via-indigo-500/3 to-transparent rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-1/3 w-[450px] h-[450px] bg-gradient-to-tl from-purple-500/4 via-pink-500/3 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-indigo-500/3 via-blue-500/2 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        />
        <div
          className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-gradient-to-r from-accent/3 via-primary/2 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-inter leading-tight">
            Get In
            <span className="gradient-text"> Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to transform your marketing with AI? Let's discuss how
            ADmyBRAND can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="glass border-card-border shadow-elegant overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-10 relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Send us a message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="name"
                        className="text-sm font-semibold text-foreground"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-14 glass border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold text-foreground"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-14 glass border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-base"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="company"
                      className="text-sm font-semibold text-foreground"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-14 glass border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-base"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-foreground"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="glass border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none text-base min-h-[160px]"
                      placeholder="Tell us about your marketing goals and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="premium"
                    size="lg"
                    className="w-full h-16 text-lg font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                    ) : isSubmitted ? (
                      <CheckCircle className="w-6 h-6 mr-3" />
                    ) : (
                      <Send className="w-6 h-6 mr-3" />
                    )}
                    {isSubmitting
                      ? 'Sending Message...'
                      : isSubmitted
                        ? 'Message Sent Successfully!'
                        : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Let's start a conversation</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking to get started with AI marketing, need
                help with implementation, or want to discuss enterprise
                solutions, our team is here to help.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.15,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-start space-x-6 p-6 glass rounded-2xl hover:border-primary/30 hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">{info.title}</h4>
                    <p className="text-lg text-primary font-semibold">
                      {info.value}
                    </p>
                    <p className="text-base text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border-l-4 border-l-accent relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse-glow" />
                  <span className="text-xl font-bold">Quick Response</span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We typically respond to all inquiries within 2 hours during
                  business hours. Your success is our priority.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
