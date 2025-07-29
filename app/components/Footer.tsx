import {
  Sparkles,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  Mail,
} from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integrations", href: "#" },
      { name: "API Documentation", href: "#" },
      { name: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Community", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@admybrand.ai", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container-lg">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  ADmyBRAND AI
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Transform your marketing with AI-powered intelligence. Automate
                campaigns, analyze performance, and scale your brand with our
                comprehensive marketing suite.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map(section => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-foreground mb-2">
                Stay updated with our latest features
              </h3>
              <p className="text-muted-foreground">
                Get marketing tips, product updates, and exclusive insights
                delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-gradient-primary text-white rounded-lg font-medium hover:scale-105 transition-transform whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 ADmyBRAND AI Suite. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Made with ❤️ for marketers worldwide</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
