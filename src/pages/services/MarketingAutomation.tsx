import ServicePageTemplate, { ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  Zap,
  Mail,
  GitBranch,
  RefreshCw,
  Users,
  BarChart3,
  Shield,
  Clock,
  TrendingUp,
  Settings,
} from "lucide-react";

const marketingAutomationData: ServicePageData = {
  // Hero
  heroTag: "Marketing Automation",
  heroTitle: "Automate growth with",
  heroTitleAccent: "intelligent workflows.",
  heroDescription:
    "Strategic marketing automation that nurtures leads, accelerates sales cycles, and scales your marketing efforts without scaling your team.",
  heroMetrics: [
    { value: "+180%", label: "Lead Nurture Rate" },
    { value: "-40%", label: "Sales Cycle" },
    { value: "3.2X", label: "Marketing ROI" },
    { value: "500+", label: "Workflows Built" },
  ],

  // What We Do
  whatWeDoTitle: "End-to-end automation solutions",
  whatWeDoDescription:
    "From strategy to implementation, we build automated marketing systems that deliver the right message to the right person at the right time.",
  whatWeDoBlocks: [
    {
      icon: GitBranch,
      title: "Workflow Strategy",
      description:
        "Customer journey mapping and workflow design that aligns marketing automation with your sales process and business objectives.",
    },
    {
      icon: Mail,
      title: "Email Automation",
      description:
        "Sophisticated email sequences for lead nurturing, onboarding, re-engagement, and customer retention programs.",
    },
    {
      icon: Users,
      title: "Lead Scoring & Routing",
      description:
        "Intelligent lead scoring models and automated routing to ensure sales teams focus on the highest-intent prospects.",
    },
    {
      icon: RefreshCw,
      title: "CRM Integration",
      description:
        "Seamless integration between marketing automation and CRM systems for complete visibility across the customer lifecycle.",
    },
    {
      icon: Settings,
      title: "Platform Implementation",
      description:
        "Full platform setup and configuration for HubSpot, Marketo, Pardot, ActiveCampaign, and other marketing automation tools.",
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description:
        "Ongoing workflow optimization, A/B testing, and performance reporting to continuously improve automation results.",
    },
  ],

  // Process
  processTitle: "Our automation process",
  processDescription:
    "A methodical approach to building automation systems that scale with your business.",
  processSteps: [
    {
      number: "01",
      title: "Audit",
      description: "Current state assessment, tech stack evaluation, and opportunity identification.",
    },
    {
      number: "02",
      title: "Map",
      description: "Customer journey mapping and workflow architecture design.",
    },
    {
      number: "03",
      title: "Build",
      description: "Platform configuration, workflow development, and integration setup.",
    },
    {
      number: "04",
      title: "Test",
      description: "Comprehensive testing, QA, and team training on new systems.",
    },
    {
      number: "05",
      title: "Optimize",
      description: "Performance monitoring, A/B testing, and continuous improvement.",
    },
  ],

  // Case Studies
  caseStudies: [
    {
      client: "DataScale Platform",
      industry: "B2B SaaS",
      challenge: "Manual lead follow-up with inconsistent nurturing. Long sales cycles and high drop-off.",
      strategy: "Implemented multi-track nurture sequences with behavioral triggers and progressive profiling.",
      results: [
        { value: "+180%", label: "MQL to SQL" },
        { value: "-40%", label: "Sales Cycle" },
        { value: "3.2X", label: "Pipeline Velocity" },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      client: "InsureRight",
      industry: "Insurance",
      challenge: "Disconnected systems with no visibility into customer journey or lead status.",
      strategy: "Unified MarTech stack with HubSpot, integrated lead scoring, and automated quote follow-up.",
      results: [
        { value: "+220%", label: "Lead Response" },
        { value: "+85%", label: "Quote Completion" },
        { value: "2.4X", label: "Revenue" },
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
    {
      client: "EduPro Academy",
      industry: "Education",
      challenge: "High lead volume but low conversion rate. No personalization or nurturing.",
      strategy: "Built enrollment journey automation with dynamic content and behavior-based sequencing.",
      results: [
        { value: "+150%", label: "Enrollments" },
        { value: "-35%", label: "CAC" },
        { value: "+280%", label: "Email Revenue" },
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
  ],

  // Tools
  tools: [
    { name: "HubSpot" },
    { name: "Marketo" },
    { name: "Pardot" },
    { name: "ActiveCampaign" },
    { name: "Klaviyo" },
    { name: "Salesforce" },
    { name: "Zapier" },
    { name: "Segment" },
  ],

  // Differentiators
  differentiators: [
    {
      icon: GitBranch,
      title: "Strategic Approach",
      description: "Workflows designed around business outcomes, not just automation for automation's sake.",
    },
    {
      icon: TrendingUp,
      title: "Revenue Focus",
      description: "Every automation built to impact pipeline and accelerate revenue.",
    },
    {
      icon: Shield,
      title: "Platform Agnostic",
      description: "Deep expertise across all major marketing automation platforms.",
    },
    {
      icon: Users,
      title: "Sales Alignment",
      description: "Automation that integrates seamlessly with your sales process and CRM.",
    },
    {
      icon: Clock,
      title: "Rapid Implementation",
      description: "Proven frameworks for fast deployment without sacrificing quality.",
    },
    {
      icon: BarChart3,
      title: "Measurable Impact",
      description: "Clear reporting on automation performance and business impact.",
    },
  ],

  // CTA
  ctaTitle: "Ready to automate your growth?",
  ctaDescription:
    "Book a free automation audit to identify opportunities to scale your marketing efficiency.",
};

const MarketingAutomation = () => {
  return <ServicePageTemplate data={marketingAutomationData} />;
};

export default MarketingAutomation;
