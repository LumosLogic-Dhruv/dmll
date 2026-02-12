import ServicePageTemplate, { ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  BarChart3,
  LineChart,
  Target,
  FlaskConical,
  MousePointer,
  Eye,
  Shield,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react";

const analyticsCROData: ServicePageData = {
  // Hero
  heroTag: "Analytics & CRO",
  heroTitle: "Data-driven optimization",
  heroTitleAccent: "that maximizes conversions.",
  heroDescription:
    "Advanced analytics and conversion rate optimization that transforms data into actionable insights and turns more visitors into customers.",
  heroMetrics: [
    { value: "+65%", label: "Avg. Conversion Lift" },
    { value: "500+", label: "Tests Run" },
    { value: "98%", label: "Test Win Rate" },
    { value: "$25M+", label: "Revenue Impact" },
  ],

  // What We Do
  whatWeDoTitle: "Comprehensive optimization services",
  whatWeDoDescription:
    "From analytics setup to systematic testing, we build data-driven optimization programs that continuously improve your conversion rates.",
  whatWeDoBlocks: [
    {
      icon: LineChart,
      title: "Analytics Implementation",
      description:
        "Google Analytics 4 setup, event tracking, conversion configuration, and custom dashboard development for complete visibility.",
    },
    {
      icon: Eye,
      title: "User Research",
      description:
        "Heatmap analysis, session recordings, user surveys, and usability testing to understand how visitors interact with your site.",
    },
    {
      icon: FlaskConical,
      title: "A/B Testing",
      description:
        "Hypothesis-driven testing program with statistical rigor. Test everything from headlines to entire page layouts.",
    },
    {
      icon: MousePointer,
      title: "UX Optimization",
      description:
        "Friction analysis and UX improvements to reduce abandonment and improve user experience across the conversion path.",
    },
    {
      icon: Target,
      title: "Funnel Optimization",
      description:
        "Complete funnel analysis and optimization from landing page to thank you page to maximize conversion at every step.",
    },
    {
      icon: BarChart3,
      title: "Custom Reporting",
      description:
        "Executive dashboards and automated reporting that surface the metrics that matter for your business.",
    },
  ],

  // Process
  processTitle: "Our CRO methodology",
  processDescription:
    "A systematic, data-driven approach to continuous conversion optimization.",
  processSteps: [
    {
      number: "01",
      title: "Analyze",
      description: "Deep dive into analytics, user behavior, and conversion paths.",
    },
    {
      number: "02",
      title: "Hypothesize",
      description: "Data-backed hypothesis development prioritized by impact potential.",
    },
    {
      number: "03",
      title: "Test",
      description: "Statistically valid A/B tests with proper sample sizes and duration.",
    },
    {
      number: "04",
      title: "Implement",
      description: "Roll out winning variations and document learnings.",
    },
    {
      number: "05",
      title: "Iterate",
      description: "Continuous testing cycle to compound conversion gains over time.",
    },
  ],

  // Case Studies
  caseStudies: [
    {
      client: "ProServe Solutions",
      industry: "B2B Services",
      challenge: "High traffic but poor conversion rates. No visibility into user behavior or drop-off points.",
      strategy: "Implemented full analytics stack, identified friction points, and ran systematic testing program.",
      results: [
        { value: "+85%", label: "Conversion Rate" },
        { value: "2.1X", label: "Lead Quality" },
        { value: "+$2.4M", label: "Revenue Impact" },
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      client: "StyleMart",
      industry: "E-Commerce",
      challenge: "Cart abandonment at 78% and mobile conversion half of desktop.",
      strategy: "Mobile checkout redesign, urgency triggers, and trust signal optimization based on user research.",
      results: [
        { value: "+48%", label: "Checkout Rate" },
        { value: "-35%", label: "Abandonment" },
        { value: "+$1.8M", label: "Annual Revenue" },
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    },
    {
      client: "LearnPro Academy",
      industry: "Education",
      challenge: "Landing pages performing below industry benchmarks with high bounce rates.",
      strategy: "Complete landing page redesign with message-match optimization and social proof testing.",
      results: [
        { value: "+120%", label: "Conversion Rate" },
        { value: "-45%", label: "Bounce Rate" },
        { value: "3.2X", label: "Enrollments" },
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
  ],

  // Tools
  tools: [
    { name: "Google Analytics 4" },
    { name: "Hotjar" },
    { name: "VWO" },
    { name: "Optimizely" },
    { name: "Google Optimize" },
    { name: "FullStory" },
    { name: "Looker Studio" },
    { name: "Amplitude" },
  ],

  // Differentiators
  differentiators: [
    {
      icon: FlaskConical,
      title: "Scientific Approach",
      description: "Rigorous statistical methodology ensuring valid, reliable test results.",
    },
    {
      icon: TrendingUp,
      title: "Revenue Focus",
      description: "Optimization for revenue impact, not just conversion rate metrics.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Deep user research to understand the 'why' behind the data.",
    },
    {
      icon: Shield,
      title: "Full Transparency",
      description: "Access to all test data, results, and learnings documentation.",
    },
    {
      icon: Clock,
      title: "Rapid Testing Velocity",
      description: "Efficient testing program that maximizes learnings per quarter.",
    },
    {
      icon: BarChart3,
      title: "Clear Attribution",
      description: "Direct measurement of CRO program impact on business outcomes.",
    },
  ],

  // CTA
  ctaTitle: "Ready to optimize your conversions?",
  ctaDescription:
    "Book a free conversion audit to identify your biggest optimization opportunities.",
};

const AnalyticsCRO = () => {
  return <ServicePageTemplate data={analyticsCROData} />;
};

export default AnalyticsCRO;
