import ServicePageTemplate, { ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  Users,
  MessageCircle,
  TrendingUp,
  Heart,
  Share2,
  BarChart3,
  Shield,
  Clock,
  Sparkles,
  Camera,
} from "lucide-react";

const socialMediaData: ServicePageData = {
  // Hero
  heroTag: "Social Media Marketing",
  heroTitle: "Build communities that",
  heroTitleAccent: "drive brand loyalty.",
  heroDescription:
    "Strategic social media management that builds engaged communities, amplifies brand voice, and converts followers into customers.",
  heroMetrics: [
    { value: "5M+", label: "Reach Generated" },
    { value: "4.8X", label: "Engagement Lift" },
    { value: "+280%", label: "Social Revenue" },
    { value: "150+", label: "Brands Managed" },
  ],

  // What We Do
  whatWeDoTitle: "Full-service social management",
  whatWeDoDescription:
    "From strategy to execution, we manage every aspect of your social presence to build authentic connections with your audience.",
  whatWeDoBlocks: [
    {
      icon: TrendingUp,
      title: "Strategy Development",
      description:
        "Platform-specific strategies aligned with business objectives. Content pillars, posting cadence, and growth roadmap tailored to your brand.",
    },
    {
      icon: Camera,
      title: "Content Creation",
      description:
        "Scroll-stopping content including graphics, videos, reels, and stories. Professional production that reflects your premium brand identity.",
    },
    {
      icon: MessageCircle,
      title: "Community Management",
      description:
        "Active engagement with your audience. Comment moderation, DM management, and real-time response to build authentic relationships.",
    },
    {
      icon: Users,
      title: "Influencer Partnerships",
      description:
        "Strategic influencer identification, outreach, and campaign management. Authentic partnerships that drive measurable results.",
    },
    {
      icon: Share2,
      title: "Paid Social Amplification",
      description:
        "Boosted posts and paid social campaigns to extend organic reach and accelerate growth among target audiences.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Comprehensive performance tracking, competitor benchmarking, and monthly insights reports with actionable recommendations.",
    },
  ],

  // Process
  processTitle: "Our social media process",
  processDescription:
    "A structured approach to building and growing your social presence with measurable impact.",
  processSteps: [
    {
      number: "01",
      title: "Audit",
      description: "Deep dive into current presence, competitor analysis, and audience insights.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Custom strategy development with content pillars and growth objectives.",
    },
    {
      number: "03",
      title: "Create",
      description: "Content calendar development and production of platform-optimized assets.",
    },
    {
      number: "04",
      title: "Engage",
      description: "Active community management, trend monitoring, and real-time engagement.",
    },
    {
      number: "05",
      title: "Optimize",
      description: "Performance analysis and strategy refinement based on data insights.",
    },
  ],

  // Case Studies
  caseStudies: [
    {
      client: "Luxe Wellness",
      industry: "Health & Beauty",
      challenge: "Low engagement rates and stagnant follower growth despite consistent posting.",
      strategy: "Shifted to user-generated content strategy with micro-influencer partnerships and Reels-first approach.",
      results: [
        { value: "+480%", label: "Engagement" },
        { value: "2.5M", label: "Monthly Reach" },
        { value: "+180%", label: "Sales" },
      ],
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
    },
    {
      client: "Urban Eats",
      industry: "Restaurant Group",
      challenge: "Multiple locations with inconsistent social presence and no unified brand voice.",
      strategy: "Centralized content strategy with location-specific content and aggressive local engagement.",
      results: [
        { value: "+320%", label: "Reservations" },
        { value: "4.8X", label: "Engagement" },
        { value: "50K+", label: "New Followers" },
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    },
    {
      client: "TechGear Pro",
      industry: "E-Commerce",
      challenge: "Product-focused content with low engagement and minimal community interaction.",
      strategy: "Community-building content strategy with customer spotlights, tutorials, and interactive content.",
      results: [
        { value: "+250%", label: "Social Revenue" },
        { value: "3.2X", label: "UGC Volume" },
        { value: "-35%", label: "CAC" },
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    },
  ],

  // Tools
  tools: [
    { name: "Sprout Social" },
    { name: "Later" },
    { name: "Canva Pro" },
    { name: "Adobe Creative Suite" },
    { name: "Brandwatch" },
    { name: "Dash Hudson" },
    { name: "Creator Studio" },
    { name: "TikTok Business" },
  ],

  // Differentiators
  differentiators: [
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "In-house creative team producing scroll-stopping content daily.",
    },
    {
      icon: Heart,
      title: "Authentic Engagement",
      description: "Real community management, not automated responses or bots.",
    },
    {
      icon: TrendingUp,
      title: "Trend-Forward",
      description: "Early adoption of platform features and trends that drive visibility.",
    },
    {
      icon: Shield,
      title: "Brand-Safe Content",
      description: "Rigorous approval processes ensuring content aligns with brand guidelines.",
    },
    {
      icon: Clock,
      title: "Real-Time Response",
      description: "Active monitoring with rapid response to engagement opportunities.",
    },
    {
      icon: BarChart3,
      title: "Revenue Attribution",
      description: "Track social's impact on actual business outcomes, not just vanity metrics.",
    },
  ],

  // CTA
  ctaTitle: "Ready to build your social community?",
  ctaDescription:
    "Book a free social audit to discover how we can transform your social presence into a growth channel.",
};

const SocialMediaMarketing = () => {
  return <ServicePageTemplate data={socialMediaData} />;
};

export default SocialMediaMarketing;
