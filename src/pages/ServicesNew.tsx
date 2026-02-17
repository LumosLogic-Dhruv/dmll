import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import {
  Target, Search, Users, Globe, TrendingUp, Megaphone, Linkedin,
  Settings, MapPin, FileText, Palette, Video, Sparkles, GitBranch,
  Mail, Zap, ShoppingCart, Package, ArrowRight, Play, ChevronDown, BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    id: "performance",
    title: "Performance Marketing",
    icon: Target,
    description: "Lower CPA, increase ROAS through systematic campaign management",
    services: [
      {
        name: "Google Ads Management",
        icon: Target,
        shortDesc: "Search, Display, Shopping & YouTube campaigns",
        details: "Complete Google Ads management including keyword research, ad copy testing, bid optimization, and Quality Score improvement. Typical results: 30-50% CPA reduction in 60 days.",
        features: ["Search campaigns", "Shopping ads", "Display remarketing", "YouTube ads", "Performance Max"],
        pricing: "From $2,500/mo + ad spend"
      },
      {
        name: "Meta Ads (Facebook & Instagram)",
        icon: Megaphone,
        shortDesc: "Audience targeting, creative testing, and scaling",
        details: "Facebook and Instagram advertising with systematic creative testing, audience layering, and funnel optimization. Average ROAS: 280-350%.",
        features: ["Feed & Stories ads", "Carousel campaigns", "Lookalike audiences", "Retargeting", "Catalog ads"],
        pricing: "From $2,000/mo + ad spend"
      },
      {
        name: "LinkedIn Ads for B2B",
        icon: Linkedin,
        shortDesc: "Account-based targeting and lead generation",
        details: "LinkedIn advertising for B2B companies. Sponsored content, InMail, and lead gen forms with account-based targeting.",
        features: ["Sponsored content", "Lead gen forms", "InMail campaigns", "Account targeting", "Retargeting"],
        pricing: "From $3,000/mo + ad spend"
      },
      {
        name: "Conversion Rate Optimization",
        icon: TrendingUp,
        shortDesc: "A/B testing and funnel optimization",
        details: "Systematic CRO program with heatmap analysis, A/B testing, and landing page optimization. Average lift: 35-65% in conversion rate.",
        features: ["Heatmap analysis", "A/B testing", "Funnel optimization", "Landing page design", "User testing"],
        pricing: "From $3,500/mo"
      }
    ]
  },
  {
    id: "seo",
    title: "SEO & Content Marketing",
    icon: Search,
    description: "Rank higher, drive organic traffic, generate inbound leads",
    services: [
      {
        name: "SEO Strategy & Execution",
        icon: Search,
        shortDesc: "Comprehensive search optimization program",
        details: "Full-service SEO including keyword research, on-page optimization, content strategy, and link building. Results in 3-6 months.",
        features: ["Keyword research", "On-page SEO", "Content strategy", "Link building", "Technical SEO"],
        pricing: "From $3,000/mo"
      },
      {
        name: "Technical SEO",
        icon: Settings,
        shortDesc: "Site structure, speed, and crawlability",
        details: "Technical SEO audits and implementation. Core Web Vitals optimization, site structure, schema markup, and indexation.",
        features: ["Site audits", "Core Web Vitals", "Schema markup", "Crawl optimization", "Mobile optimization"],
        pricing: "From $2,500/mo"
      },
      {
        name: "Local SEO",
        icon: MapPin,
        shortDesc: "Dominate local search results",
        details: "Local SEO for businesses with physical locations. Google Business Profile optimization, local citations, and review management.",
        features: ["GBP optimization", "Local citations", "Review generation", "Local content", "Map pack ranking"],
        pricing: "From $1,500/mo"
      },
      {
        name: "Content Marketing",
        icon: FileText,
        shortDesc: "Strategic content creation and distribution",
        details: "Content strategy, creation, and distribution. Blog management, lead magnets, and content promotion for organic growth.",
        features: ["Content strategy", "Blog writing", "Lead magnets", "Content distribution", "Topic clusters"],
        pricing: "From $2,000/mo"
      }
    ]
  },
  {
    id: "social",
    title: "Social Media Marketing",
    icon: Users,
    description: "Build demand, generate engagement, grow community",
    services: [
      {
        name: "Social Media Management",
        icon: Users,
        shortDesc: "Content creation and community engagement",
        details: "Full social media management across platforms. Content calendar, posting, engagement, and community management.",
        features: ["Content calendar", "Post creation", "Community management", "Engagement", "Analytics"],
        pricing: "From $2,000/mo"
      },
      {
        name: "Video Marketing",
        icon: Video,
        shortDesc: "Video content strategy and production",
        details: "Video marketing strategy, production, and distribution. YouTube optimization, video ads, and social video content.",
        features: ["Video strategy", "Production", "YouTube SEO", "Video ads", "Distribution"],
        pricing: "From $3,500/mo"
      },
      {
        name: "Influencer Marketing",
        icon: Sparkles,
        shortDesc: "Influencer partnerships and campaigns",
        details: "Influencer identification, outreach, campaign management, and performance tracking for brand awareness and conversions.",
        features: ["Influencer research", "Outreach", "Campaign management", "Content approval", "Performance tracking"],
        pricing: "From $2,500/mo"
      }
    ]
  },
  {
    id: "branding",
    title: "Branding & Creative",
    icon: Palette,
    description: "Position your brand, create demand, stand out",
    services: [
      {
        name: "Brand Strategy",
        icon: Palette,
        shortDesc: "Positioning, messaging, and identity",
        details: "Brand positioning, messaging framework, and visual identity development for market differentiation.",
        features: ["Brand audit", "Positioning", "Messaging", "Visual identity", "Brand guidelines"],
        pricing: "From $5,000 (project)"
      },
      {
        name: "Creative Campaigns",
        icon: Sparkles,
        shortDesc: "Innovative campaigns that convert",
        details: "Creative campaign ideation, design, and execution across channels with performance tracking.",
        features: ["Campaign ideation", "Creative design", "Multi-channel execution", "A/B testing", "Performance tracking"],
        pricing: "From $4,000/mo"
      }
    ]
  },
  {
    id: "web",
    title: "Website Development",
    icon: Globe,
    description: "Convert more visitors with high-performing websites",
    services: [
      {
        name: "Website Design & Development",
        icon: Globe,
        shortDesc: "High-converting, fast-loading websites",
        details: "Custom website design and development focused on conversion optimization, performance, and user experience.",
        features: ["Custom design", "Responsive development", "CMS integration", "Performance optimization", "Analytics setup"],
        pricing: "From $8,000 (project)"
      },
      {
        name: "Landing Page Systems",
        icon: GitBranch,
        shortDesc: "Conversion-focused landing pages",
        details: "Landing page design, development, and optimization for paid campaigns. Template systems for rapid deployment.",
        features: ["Landing page design", "A/B testing", "Template systems", "Form optimization", "Speed optimization"],
        pricing: "From $2,500 (project)"
      }
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce Marketing",
    icon: ShoppingCart,
    description: "Scale online store revenue profitably",
    services: [
      {
        name: "E-commerce SEO",
        icon: Search,
        shortDesc: "Product and category page optimization",
        details: "E-commerce SEO strategy for product pages, category pages, and shopping content. Technical optimization for large catalogs.",
        features: ["Product optimization", "Category pages", "Technical SEO", "Schema markup", "Content strategy"],
        pricing: "From $3,500/mo"
      },
      {
        name: "Shopping Ads Management",
        icon: ShoppingCart,
        shortDesc: "Google Shopping and Meta Catalog ads",
        details: "Shopping campaign management across Google and Meta. Feed optimization, bid management, and product segmentation.",
        features: ["Feed optimization", "Shopping campaigns", "Smart Shopping", "Catalog ads", "Performance tracking"],
        pricing: "From $2,500/mo + ad spend"
      }
    ]
  },
  {
    id: "marketplace",
    title: "Marketplace Optimization",
    icon: Package,
    description: "Dominate Amazon, eBay, and other marketplaces",
    services: [
      {
        name: "Amazon Marketing",
        icon: Package,
        shortDesc: "PPC, SEO, and listing optimization",
        details: "Amazon advertising management, listing optimization, and marketplace SEO for increased visibility and sales.",
        features: ["Sponsored Products", "Listing optimization", "Amazon SEO", "Review management", "Analytics"],
        pricing: "From $2,000/mo + ad spend"
      }
    ]
  },
  {
    id: "automation",
    title: "Marketing Automation",
    icon: Zap,
    description: "Automate workflows, nurture leads, scale efficiently",
    services: [
      {
        name: "Email Marketing",
        icon: Mail,
        shortDesc: "Automated email sequences and campaigns",
        details: "Email marketing strategy, automation setup, and campaign management. Drip sequences, segmentation, and A/B testing.",
        features: ["Email strategy", "Automation flows", "Segmentation", "A/B testing", "Analytics"],
        pricing: "From $1,500/mo"
      },
      {
        name: "Marketing Automation",
        icon: Zap,
        shortDesc: "CRM integration and workflow automation",
        details: "Marketing automation setup and management. CRM integration, lead scoring, workflow automation, and attribution.",
        features: ["CRM integration", "Lead scoring", "Workflow automation", "Attribution", "Reporting"],
        pricing: "From $3,000/mo"
      }
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Strategy",
    description: "Audit current performance, identify opportunities, define KPI targets"
  },
  {
    number: "02",
    title: "Execution",
    description: "Launch campaigns, implement tracking, begin systematic testing"
  },
  {
    number: "03",
    title: "Optimization",
    description: "Weekly optimization cycles, creative testing, bid adjustments, reporting"
  }
];

const stats = [
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "312%", label: "Avg. ROAS" },
  { value: "500+", label: "Campaigns" },
  { value: "41%", label: "Avg. CPA Reduction" }
];

const ServicesNew = () => {
  const [activeCategory, setActiveCategory] = useState("performance");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const activeCategoryData = serviceCategories.find(cat => cat.id === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
              Full-service digital
              <br />
              <span className="text-primary">marketing agency.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              From paid acquisition to organic growth, we manage campaigns that improve your marketing KPIs. 
              Every service is measured by results, not deliverables.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/seo-audit">Free SEO Audit</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do - Process */}
      <section className="section-padding-xs bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-display-sm md:text-display-md text-foreground mb-4">
              What we do
            </h2>
            <p className="text-muted-foreground">
              Our three-step process for every engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with Sticky Nav */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sticky Category Navigation */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24 space-y-2">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  Service Categories
                </h3>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-secondary hover:bg-secondary/80 text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="w-5 h-5 shrink-0" />
                      <span className="font-medium text-sm">{category.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            {/* Dynamic Content Panel */}
            <div className="lg:col-span-9">
              {activeCategoryData && (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <activeCategoryData.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-display-xs md:text-display-sm text-foreground">
                          {activeCategoryData.title}
                        </h2>
                        <p className="text-muted-foreground">{activeCategoryData.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="space-y-4">
                    {activeCategoryData.services.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/30 transition-all"
                      >
                        <button
                          onClick={() => setExpandedService(expandedService === service.name ? null : service.name)}
                          className="w-full p-6 text-left flex items-start gap-4 hover:bg-secondary/30 transition-colors"
                        >
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                            <service.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${
                              expandedService === service.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expandedService === service.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6 border-t border-border"
                          >
                            <div className="pt-6 space-y-4">
                              <p className="text-muted-foreground">{service.details}</p>
                              
                              <div>
                                <h4 className="font-semibold text-foreground mb-2 text-sm">What's Included:</h4>
                                <ul className="grid grid-cols-2 gap-2">
                                  {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="flex items-center justify-between pt-4 border-t border-border">
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Starting at </span>
                                  <span className="font-semibold text-foreground">{service.pricing}</span>
                                </div>
                                <Button variant="cta" size="sm" asChild>
                                  <Link to="/contact">Get Started</Link>
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Video Explainer Placeholder */}
                  <div className="mt-8 p-6 bg-secondary/30 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="relative aspect-video w-full md:w-64 rounded-lg overflow-hidden bg-foreground/5 group cursor-pointer shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=225&fit=crop"
                          alt="Service explainer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 text-foreground ml-0.5" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          Watch: {activeCategoryData.title} Explained
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          See how we approach {activeCategoryData.title.toLowerCase()} and what results to expect.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
              Ready to improve your
              <br />
              marketing performance?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book a free audit. We'll identify which channels to prioritize and what KPIs to target first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesNew;
