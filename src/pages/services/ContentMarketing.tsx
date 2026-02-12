import ServicePageTemplate, { ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  FileText,
  Edit,
  Video,
  BookOpen,
  TrendingUp,
  BarChart3,
  Shield,
  Clock,
  Users,
  Target,
} from "lucide-react";

const contentMarketingData: ServicePageData = {
  // Hero
  heroTag: "Content Marketing",
  heroTitle: "Content that captures",
  heroTitleAccent: "attention and converts.",
  heroDescription:
    "Strategic content creation that establishes thought leadership, drives organic traffic, and nurtures leads through every stage of the buyer journey.",
  heroMetrics: [
    { value: "+420%", label: "Organic Traffic" },
    { value: "10K+", label: "Articles Published" },
    { value: "3.5X", label: "Lead Generation" },
    { value: "$8M+", label: "Pipeline Influenced" },
  ],

  // What We Do
  whatWeDoTitle: "Full-service content solutions",
  whatWeDoDescription:
    "From strategy to distribution, we create content that resonates with your audience and drives measurable business results.",
  whatWeDoBlocks: [
    {
      icon: Target,
      title: "Content Strategy",
      description:
        "Data-driven content planning aligned with business goals. Keyword research, content gap analysis, and editorial calendar development.",
    },
    {
      icon: Edit,
      title: "Blog & Article Writing",
      description:
        "Expert-level content creation by writers who understand your industry. SEO-optimized articles that rank and convert.",
    },
    {
      icon: BookOpen,
      title: "Long-Form Content",
      description:
        "Comprehensive guides, ebooks, and whitepapers that establish authority and generate qualified leads.",
    },
    {
      icon: Video,
      title: "Video Content",
      description:
        "Video script writing, production oversight, and YouTube optimization for video-first content strategies.",
    },
    {
      icon: FileText,
      title: "Case Studies & Sales Content",
      description:
        "Compelling case studies, one-pagers, and sales enablement content that closes deals.",
    },
    {
      icon: BarChart3,
      title: "Content Analytics",
      description:
        "Performance tracking, content attribution, and ROI measurement to optimize your content investment.",
    },
  ],

  // Process
  processTitle: "Our content process",
  processDescription:
    "A systematic approach to creating content that drives organic growth and nurtures leads.",
  processSteps: [
    {
      number: "01",
      title: "Research",
      description: "Audience research, keyword analysis, and competitive content audit.",
    },
    {
      number: "02",
      title: "Plan",
      description: "Content strategy development with editorial calendar and topic clusters.",
    },
    {
      number: "03",
      title: "Create",
      description: "Expert content creation with thorough research and SEO optimization.",
    },
    {
      number: "04",
      title: "Distribute",
      description: "Multi-channel distribution to maximize content reach and engagement.",
    },
    {
      number: "05",
      title: "Optimize",
      description: "Performance analysis and content updates to maintain rankings.",
    },
  ],

  // Case Studies
  caseStudies: [
    {
      client: "CloudOps Platform",
      industry: "B2B SaaS",
      challenge: "No content marketing program. Relying entirely on paid channels for lead generation.",
      strategy: "Built comprehensive content hub with pillar pages, blog content, and gated resources targeting buyer keywords.",
      results: [
        { value: "+420%", label: "Organic Traffic" },
        { value: "3.5X", label: "Lead Volume" },
        { value: "$4.2M", label: "Pipeline" },
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    },
    {
      client: "FinTech Advisors",
      industry: "Financial Services",
      challenge: "Generic content that failed to differentiate from competitors or demonstrate expertise.",
      strategy: "Developed thought leadership program with original research, expert interviews, and data-driven content.",
      results: [
        { value: "+280%", label: "Engagement" },
        { value: "15", label: "Media Features" },
        { value: "2.8X", label: "Qualified Leads" },
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
    {
      client: "EduTech Academy",
      industry: "Education",
      challenge: "High competition in education space with declining organic visibility.",
      strategy: "Created comprehensive course comparison content and student success stories with aggressive SEO optimization.",
      results: [
        { value: "+350%", label: "Organic Traffic" },
        { value: "+180%", label: "Enrollments" },
        { value: "-45%", label: "CAC" },
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
  ],

  // Tools
  tools: [
    { name: "Clearscope" },
    { name: "Surfer SEO" },
    { name: "Ahrefs" },
    { name: "Google Docs" },
    { name: "Grammarly" },
    { name: "Hemingway" },
    { name: "Notion" },
    { name: "WordPress" },
  ],

  // Differentiators
  differentiators: [
    {
      icon: Users,
      title: "Expert Writers",
      description: "Industry-specialized writers who understand your market and audience.",
    },
    {
      icon: TrendingUp,
      title: "SEO-First Approach",
      description: "Every piece optimized for search without sacrificing quality or readability.",
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Content mapped to buyer journey stages to support the full funnel.",
    },
    {
      icon: Shield,
      title: "Brand Consistency",
      description: "Rigorous brand voice and style guide adherence across all content.",
    },
    {
      icon: Clock,
      title: "Consistent Cadence",
      description: "Reliable content delivery to maintain momentum and search rankings.",
    },
    {
      icon: BarChart3,
      title: "Measurable Results",
      description: "Clear attribution showing content's impact on pipeline and revenue.",
    },
  ],

  // CTA
  ctaTitle: "Ready to scale your content engine?",
  ctaDescription:
    "Book a free content audit to identify your biggest opportunities for organic growth.",
};

const ContentMarketing = () => {
  return <ServicePageTemplate data={contentMarketingData} />;
};

export default ContentMarketing;
