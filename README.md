# ADmyBRAND AI Suite - Modern SaaS Landing Page

A stunning, modern SaaS landing page for a fictional AI marketing platform built with Next.js 14, TypeScript, Tailwind CSS, and ShadCN UI.

## 🚀 Features

### Design & UI/UX
- **Modern Glassmorphism Design**: Beautiful glass-like cards with backdrop blur effects
- **Premium Color Palette**: Neon blues, deep purples, jet black, and soft white
- **Responsive Design**: Fully mobile-first responsive layout
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: GSAP-powered scroll animations and micro-interactions
- **Modern Typography**: Space Grotesk for headings, Inter for body text

### Sections
- **Hero Section**: Bold headline with animated gradient orbs and CTA buttons
- **Features Grid**: 8+ feature cards with icons and descriptions
- **Pricing Section**: 3-tier pricing with annual/monthly toggle
- **Testimonials Carousel**: Customer testimonials with real faces
- **FAQ Section**: Collapsible accordions with smooth animations
- **Contact Form**: Interactive form with validation
- **Footer**: Comprehensive links and social media

### Technical Features
- **Next.js 14**: App Router with TypeScript
- **Tailwind CSS**: Utility-first styling
- **ShadCN UI**: Modern component library
- **GSAP Animations**: Scroll-triggered animations
- **Framer Motion**: Smooth transitions
- **Next Themes**: Dark/light mode support
- **Lucide Icons**: Beautiful icon set

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Animations**: GSAP + Framer Motion
- **Icons**: Lucide React
- **Theme**: Next Themes
- **Notifications**: Sonner

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd admybrand-ai-suite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The color palette is defined in `src/app/globals.css` with CSS custom properties:
- Primary: Blue gradients (`oklch(0.6 0.25 250)`)
- Secondary: Purple accents
- Background: Light slate to dark slate
- Text: High contrast for accessibility

### Typography
- **Headings**: Space Grotesk (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
All components are located in `src/components/`:
- `Navbar.tsx` - Navigation with dark mode toggle
- `HeroSection.tsx` - Main hero with animations
- `FeaturesSection.tsx` - Feature cards grid
- `PricingSection.tsx` - Pricing plans with toggle
- `TestimonialsSection.tsx` - Customer testimonials carousel
- `FAQSection.tsx` - FAQ accordion
- `ContactForm.tsx` - Contact form with validation
- `Footer.tsx` - Footer with links and social

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 compliant

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### File Structure
```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with providers
│   └── page.tsx         # Main landing page
├── components/
│   ├── ui/              # ShadCN UI components
│   ├── Navbar.tsx       # Navigation component
│   ├── HeroSection.tsx  # Hero section
│   ├── FeaturesSection.tsx
│   ├── PricingSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
└── lib/
    └── utils.ts         # Utility functions
```

## 🎨 Design System

### Glassmorphism Effects
```css
.glassmorphism {
  @apply backdrop-blur-xl bg-white/10 border border-white/20;
}
```

### Gradient Text
```css
.gradient-text {
  @apply bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent;
}
```

### Animations
- **Float Animation**: Subtle floating effect for background elements
- **Glow Effect**: Pulsing glow on interactive elements
- **Scroll Animations**: GSAP-powered scroll-triggered animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **ShadCN UI** for the component library
- **Tailwind CSS** for the utility-first styling
- **GSAP** for smooth animations
- **Lucide** for beautiful icons
- **Next.js** for the amazing framework

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
