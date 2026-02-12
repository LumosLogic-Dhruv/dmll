import ServicePageTemplate, { ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  Globe,
  Palette,
  Zap,
  Smartphone,
  ShoppingCart,
  Code,
  Shield,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react";

const webDesignData: ServicePageData = {
  // Hero
  heroTag: "Web Design & Development",
  heroTitle: "High-converting websites",
  heroTitleAccent: "built for performance.",
  heroDescription:
    "Premium web design and development that combines stunning aesthetics with conversion optimization to turn visitors into customers.",
  heroMetrics: [
    { value: "+65%", label: "Avg. Conversion Lift" },
    { value: "99%", label: "Performance Score" },
    { value: "300+", label: "Sites Launched" },
    { value: "2.1X", label: "Lead Generation" },
  ],

  // What We Do
  whatWeDoTitle: "End-to-end web solutions",
  whatWeDoDescription:
    "From strategy to launch, we build websites that look exceptional and perform even better. Every design decision is made with conversion in mind.",
  whatWeDoBlocks: [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that balances visual appeal with intuitive navigation. Wireframes, prototypes, and high-fidelity designs.",
    },
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Modern tech stack development with React, Next.js, or WordPress. Clean code, fast load times, and scalable architecture.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Core Web Vitals optimization, image compression, and code splitting for lightning-fast page loads that improve SEO and conversions.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first approach ensuring perfect experiences across all devices. From 320px mobile to 4K displays.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Shopify, WooCommerce, and custom e-commerce builds with optimized checkout flows and inventory management.",
    },
    {
      icon: Globe,
      title: "CMS Integration",
      description:
        "Headless CMS and traditional CMS solutions that give your team full control over content without touching code.",
    },
  ],

  // Process
  processTitle: "Our development process",
  processDescription:
    "A proven methodology that delivers exceptional websites on time and on budget.",
  processSteps: [
    {
      number: "01",
      title: "Discovery",
      description: "Requirements gathering, competitor analysis, and user research to define project scope.",
    },
    {
      number: "02",
      title: "Design",
      description: "Wireframes, UI design, and interactive prototypes for stakeholder approval.",
    },
    {
      number: "03",
      title: "Develop",
      description: "Clean code development with regular progress updates and staging reviews.",
    },
    {
      number: "04",
      title: "Test",
      description: "Cross-browser testing, performance optimization, and quality assurance.",
    },
    {
      number: "05",
      title: "Launch",
      description: "Deployment, monitoring, and post-launch optimization support.",
    },
  ],

  // Case Studies
  caseStudies: [
    {
      client: "GrowthLabs SaaS",
      industry: "B2B Software",
      challenge: "Outdated website with poor mobile experience and 1.2% conversion rate.",
      strategy: "Complete redesign with conversion-optimized landing pages, improved UX, and Core Web Vitals optimization.",
      results: [
        { value: "+65%", label: "Conversion Rate" },
        { value: "2.1X", label: "Demo Requests" },
        { value: "99", label: "Performance Score" },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      client: "Artisan Goods Co.",
      industry: "E-Commerce",
      challenge: "Slow Shopify site with high cart abandonment and poor mobile checkout experience.",
      strategy: "Custom Shopify 2.0 theme with optimized checkout, improved product pages, and mobile-first design.",
      results: [
        { value: "+48%", label: "Conversion Rate" },
        { value: "-35%", label: "Cart Abandonment" },
        { value: "+82%", label: "Mobile Revenue" },
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    },
    {
      client: "Premier Law Group",
      industry: "Professional Services",
      challenge: "Generic template site that failed to differentiate from competitors.",
      strategy: "Premium custom design showcasing expertise with strategic CTAs and lead capture optimization.",
      results: [
        { value: "+120%", label: "Lead Volume" },
        { value: "3.4X", label: "Time on Site" },
        { value: "+85%", label: "Contact Rate" },
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
  ],

  // Tools
  tools: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Shopify" },
    { name: "WordPress" },
    { name: "Figma" },
    { name: "Webflow" },
  ],

  // Differentiators
  differentiators: [
    {
      icon: TrendingUp,
      title: "Conversion-Focused",
      description: "Every design decision made to improve conversion rates, not just aesthetics.",
    },
    {
      icon: Zap,
      title: "Performance-First",
      description: "Sub-2-second load times and 90+ Lighthouse scores guaranteed.",
    },
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Designs informed by user research and validated through testing.",
    },
    {
      icon: Shield,
      title: "Future-Proof Tech",
      description: "Modern tech stack that scales with your business needs.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Clear timelines and milestones with consistent delivery track record.",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable, documented code that your team can build upon.",
    },
  ],

  // CTA
  ctaTitle: "Ready for a website that converts?",
  ctaDescription:
    "Book a free consultation to discuss your web project and get a detailed proposal.",
};

const WebDesign = () => {
  return <ServicePageTemplate data={webDesignData} />;
};

export default WebDesign;
