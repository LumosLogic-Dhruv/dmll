import ServicePageTemplate, { ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  Search,
  FileText,
  Settings,
  MapPin,
  Link,
  BarChart3,
  Shield,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react";

const seoStrategyData: ServicePageData = {
  // Hero
  heroTag: "SEO Strategy",
  heroTitle: "Dominate organic search",
  heroTitleAccent: "with sustainable growth.",
  heroDescription:
    "Strategic SEO that builds sustainable organic traffic, establishes market authority, and delivers compounding returns month over month.",
  heroMetrics: [
    { value: "+540%", label: "Avg. Traffic Growth" },
    { value: "200+", label: "Page 1 Rankings" },
    { value: "3.2X", label: "Organic Leads" },
    { value: "$12M+", label: "Pipeline Generated" },
  ],

  // What We Do
  whatWeDoTitle: "Comprehensive SEO services",
  whatWeDoDescription:
    "From technical foundations to content strategy, we build SEO programs that establish your brand as the authority in your market.",
  whatWeDoBlocks: [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description:
        "Deep market analysis to identify high-intent keywords with optimal search volume and competition balance. Map keywords to buyer journey stages.",
    },
    {
      icon: FileText,
      title: "Content Strategy & Creation",
      description:
        "Data-driven content planning and production. Pillar pages, cluster content, and strategic blog posts designed to capture search demand.",
    },
    {
      icon: Settings,
      title: "Technical SEO",
      description:
        "Site architecture optimization, Core Web Vitals improvement, schema markup implementation, and crawlability enhancements.",
    },
    {
      icon: Link,
      title: "Link Building & Digital PR",
      description:
        "White-hat link acquisition through digital PR, content partnerships, and strategic outreach to build domain authority.",
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description:
        "Google Business Profile optimization, local citation building, and location-specific content strategies for local market dominance.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Comprehensive rank tracking, traffic analysis, and conversion attribution to measure true SEO impact on business outcomes.",
    },
  ],

  // Process
  processTitle: "Our SEO methodology",
  processDescription:
    "A systematic approach to building sustainable organic growth that compounds over time.",
  processSteps: [
    {
      number: "01",
      title: "Audit",
      description: "Comprehensive technical audit, competitor analysis, and opportunity assessment.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Keyword mapping, content roadmap, and technical prioritization framework.",
    },
    {
      number: "03",
      title: "Foundation",
      description: "Technical fixes, on-page optimization, and content infrastructure setup.",
    },
    {
      number: "04",
      title: "Build",
      description: "Content production, link acquisition, and ongoing optimization.",
    },
    {
      number: "05",
      title: "Scale",
      description: "Expand keyword targeting and content production based on performance data.",
    },
  ],

  // Case Studies
  caseStudies: [
    {
      client: "HealthPlus Medical",
      industry: "Healthcare",
      challenge: "No organic visibility in competitive healthcare market. Relying 100% on paid channels.",
      strategy: "Built comprehensive content hub around patient education with technical SEO overhaul.",
      results: [
        { value: "+540%", label: "Organic Traffic" },
        { value: "120+", label: "Leads/Month" },
        { value: "#1", label: "50+ Keywords" },
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    },
    {
      client: "LegalEdge Partners",
      industry: "Professional Services",
      challenge: "Low domain authority and minimal content. Competitors dominated local search results.",
      strategy: "Aggressive content strategy targeting high-intent legal queries with local SEO focus.",
      results: [
        { value: "+380%", label: "Traffic" },
        { value: "85%", label: "Market Share" },
        { value: "3.2X", label: "Consultations" },
      ],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    },
    {
      client: "TechStack SaaS",
      industry: "B2B Software",
      challenge: "Product-focused website with no educational content. Missing bottom-of-funnel searches.",
      strategy: "Created comparison pages, feature guides, and integration documentation targeting buyer keywords.",
      results: [
        { value: "+420%", label: "Organic Signups" },
        { value: "-62%", label: "CAC" },
        { value: "$4.2M", label: "Pipeline" },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
  ],

  // Tools
  tools: [
    { name: "Ahrefs" },
    { name: "SEMrush" },
    { name: "Screaming Frog" },
    { name: "Google Search Console" },
    { name: "Surfer SEO" },
    { name: "Clearscope" },
    { name: "BrightLocal" },
    { name: "Schema Pro" },
  ],

  // Differentiators
  differentiators: [
    {
      icon: TrendingUp,
      title: "Revenue-Focused SEO",
      description: "We optimize for business outcomes, not just rankings or traffic.",
    },
    {
      icon: Shield,
      title: "White-Hat Only",
      description: "Sustainable strategies that build long-term value, never black-hat shortcuts.",
    },
    {
      icon: Users,
      title: "Content Excellence",
      description: "Expert writers who understand your industry and can create authority content.",
    },
    {
      icon: Clock,
      title: "Transparent Timelines",
      description: "Realistic expectations with monthly milestone tracking and reporting.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Keyword-level conversion tracking to understand true SEO ROI.",
    },
    {
      icon: Settings,
      title: "Technical Expertise",
      description: "Deep technical SEO knowledge for complex sites and migrations.",
    },
  ],

  // CTA
  ctaTitle: "Ready to dominate organic search?",
  ctaDescription:
    "Book a free SEO audit to discover your untapped organic growth opportunities.",
};

const SEOStrategy = () => {
  return <ServicePageTemplate data={seoStrategyData} />;
};

export default SEOStrategy;
