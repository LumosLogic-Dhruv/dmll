import ServicePageTemplate, { ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  Target,
  BarChart3,
  Zap,
  RefreshCw,
  LineChart,
  Users,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react";

const performanceMarketingData: ServicePageData = {
  // Hero
  heroTag: "Performance Marketing",
  heroTitle: "Scale revenue with",
  heroTitleAccent: "precision-targeted ads.",
  heroDescription:
    "Data-driven paid media strategies across Google, Meta, and LinkedIn that maximize ROAS and deliver predictable, scalable growth for ambitious brands.",
  heroMetrics: [
    { value: "+312%", label: "Avg. ROAS" },
    { value: "$50M+", label: "Ad Spend Managed" },
    { value: "4.2X", label: "Revenue Multiplier" },
    { value: "98%", label: "Client Retention" },
  ],

  // What We Do
  whatWeDoTitle: "Full-funnel paid media management",
  whatWeDoDescription:
    "From awareness to conversion, we architect and optimize paid campaigns that drive measurable business outcomes across every stage of the customer journey.",
  whatWeDoBlocks: [
    {
      icon: Target,
      title: "Campaign Strategy",
      description:
        "Comprehensive audit of your market, competitors, and opportunities. We develop a custom strategy aligned with your business objectives and target audience.",
    },
    {
      icon: BarChart3,
      title: "Media Buying & Optimization",
      description:
        "Expert management of Google Ads, Meta Ads, LinkedIn, and programmatic campaigns. Continuous optimization based on real-time performance data.",
    },
    {
      icon: Zap,
      title: "Creative Production",
      description:
        "High-converting ad creative development including static images, video ads, and dynamic creative testing to maximize engagement and CTR.",
    },
    {
      icon: RefreshCw,
      title: "Conversion Optimization",
      description:
        "Landing page optimization, A/B testing, and funnel analysis to maximize conversion rates and reduce cost per acquisition.",
    },
    {
      icon: LineChart,
      title: "Attribution & Analytics",
      description:
        "Multi-touch attribution modeling, cross-platform tracking, and comprehensive reporting to understand true campaign impact on revenue.",
    },
    {
      icon: Users,
      title: "Audience Development",
      description:
        "Custom audience building, lookalike modeling, and retargeting strategies to reach high-intent prospects at the right moment.",
    },
  ],

  // Process
  processTitle: "Our performance marketing process",
  processDescription:
    "A systematic approach to building, launching, and scaling profitable paid media campaigns.",
  processSteps: [
    {
      number: "01",
      title: "Audit",
      description: "Deep analysis of current performance, competitive landscape, and growth opportunities.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Custom campaign architecture, audience segmentation, and budget allocation framework.",
    },
    {
      number: "03",
      title: "Launch",
      description: "Campaign build-out with optimized creative, targeting, and tracking implementation.",
    },
    {
      number: "04",
      title: "Optimize",
      description: "Daily monitoring, bid adjustments, and iterative testing to maximize performance.",
    },
    {
      number: "05",
      title: "Scale",
      description: "Controlled scaling of winning campaigns while maintaining ROAS targets.",
    },
  ],

  // Case Studies
  caseStudies: [
    {
      client: "TechFlow SaaS",
      industry: "B2B Software",
      challenge: "High CAC and inefficient ad spend across multiple platforms with no clear attribution.",
      strategy: "Implemented full-funnel strategy with LinkedIn for awareness, Google for intent, and Meta for retargeting.",
      results: [
        { value: "+312%", label: "ROAS" },
        { value: "-45%", label: "CAC" },
        { value: "4.8X", label: "Pipeline" },
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    },
    {
      client: "StyleHouse",
      industry: "E-Commerce",
      challenge: "Plateaued growth with declining ROAS on Meta Ads and no Google Shopping presence.",
      strategy: "Restructured Meta campaigns with dynamic creative testing and launched Google Shopping with Performance Max.",
      results: [
        { value: "+480%", label: "ROAS" },
        { value: "$2.4M", label: "Revenue" },
        { value: "+180%", label: "Orders" },
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    },
    {
      client: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Strict compliance requirements limiting ad creative and high competition in paid search.",
      strategy: "Developed compliant creative framework and implemented advanced audience exclusions and bidding strategies.",
      results: [
        { value: "+250%", label: "Leads" },
        { value: "-38%", label: "CPL" },
        { value: "5.2X", label: "ROI" },
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
  ],

  // Tools
  tools: [
    { name: "Google Ads" },
    { name: "Meta Ads Manager" },
    { name: "LinkedIn Campaign Manager" },
    { name: "Google Analytics 4" },
    { name: "Triple Whale" },
    { name: "Northbeam" },
    { name: "Supermetrics" },
    { name: "Looker Studio" },
  ],

  // Differentiators
  differentiators: [
    {
      icon: TrendingUp,
      title: "ROAS-Focused Approach",
      description: "Every decision optimized for return on ad spend, not vanity metrics.",
    },
    {
      icon: Shield,
      title: "Transparent Reporting",
      description: "Real-time dashboards and weekly calls with full visibility into performance.",
    },
    {
      icon: Users,
      title: "Dedicated Strategist",
      description: "Senior-level strategist assigned to your account, not junior account managers.",
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Same-day optimization for market changes and performance fluctuations.",
    },
    {
      icon: LineChart,
      title: "Cross-Platform Attribution",
      description: "True understanding of how each channel contributes to conversions.",
    },
    {
      icon: RefreshCw,
      title: "Continuous Testing",
      description: "Systematic creative and audience testing to find winning combinations.",
    },
  ],

  // CTA
  ctaTitle: "Ready to scale your paid media?",
  ctaDescription:
    "Book a free strategy call to discuss how we can improve your ROAS and scale your campaigns profitably.",
};

const PerformanceMarketing = () => {
  return <ServicePageTemplate data={performanceMarketingData} />;
};

export default PerformanceMarketing;
