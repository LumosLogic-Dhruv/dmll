import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import {
  Target,
  Search,
  Megaphone,
  Linkedin,
  TrendingUp,
  Settings,
  MapPin,
  FileText,
  Users,
  Palette,
  Video,
  Sparkles,
  Globe,
  GitBranch,
  Mail,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns that maximize ROI",
    icon: Target,
    services: [
      {
        icon: Target,
        name: "Google Ads",
        description: "Search, Display, Shopping, and YouTube campaigns optimized for conversions.",
        features: ["Keyword research", "Ad copy optimization", "Bid management", "Landing page optimization"],
      },
      {
        icon: Megaphone,
        name: "Meta Ads",
        description: "Facebook and Instagram advertising with advanced audience targeting.",
        features: ["Audience building", "Creative testing", "Retargeting", "Catalog sales"],
      },
      {
        icon: Linkedin,
        name: "LinkedIn Ads",
        description: "B2B lead generation through professional network advertising.",
        features: ["Account targeting", "Lead gen forms", "Sponsored content", "InMail campaigns"],
      },
      {
        icon: TrendingUp,
        name: "Conversion Optimization",
        description: "A/B testing and CRO to maximize conversion rates.",
        features: ["Heatmap analysis", "User testing", "Funnel optimization", "Multivariate testing"],
      },
    ],
  },
  {
    title: "Organic Growth",
    description: "Sustainable traffic and authority building",
    icon: Search,
    services: [
      {
        icon: Search,
        name: "SEO Strategy",
        description: "Comprehensive search optimization for long-term organic growth.",
        features: ["Keyword strategy", "Content optimization", "Link building", "Technical audits"],
      },
      {
        icon: Settings,
        name: "Technical SEO",
        description: "Site structure, speed, and crawlability optimization.",
        features: ["Core Web Vitals", "Schema markup", "Site architecture", "Mobile optimization"],
      },
      {
        icon: MapPin,
        name: "Local SEO",
        description: "Dominate local search results and drive foot traffic.",
        features: ["Google Business Profile", "Local citations", "Review management", "Local content"],
      },
      {
        icon: FileText,
        name: "Content Marketing",
        description: "Strategic content creation that attracts and converts.",
        features: ["Content strategy", "Blog management", "Thought leadership", "Content distribution"],
      },
    ],
  },
  {
    title: "Brand & Creative",
    description: "Build memorable brands that resonate",
    icon: Palette,
    services: [
      {
        icon: Users,
        name: "Social Media Management",
        description: "Community building and engagement across platforms.",
        features: ["Content calendar", "Community management", "Influencer outreach", "Social listening"],
      },
      {
        icon: Palette,
        name: "Branding Strategy",
        description: "Brand identity and positioning that differentiates.",
        features: ["Brand audit", "Visual identity", "Messaging framework", "Brand guidelines"],
      },
      {
        icon: Video,
        name: "Video Marketing",
        description: "Compelling video content that drives engagement.",
        features: ["Video strategy", "Production", "YouTube optimization", "Video ads"],
      },
      {
        icon: Sparkles,
        name: "Creative Campaigns",
        description: "Innovative campaigns that capture attention and convert.",
        features: ["Campaign ideation", "Creative direction", "Multi-channel execution", "Performance tracking"],
      },
    ],
  },
  {
    title: "Web & Automation",
    description: "Technology-driven marketing solutions",
    icon: Globe,
    services: [
      {
        icon: Globe,
        name: "Web Design",
        description: "High-converting websites built for performance.",
        features: ["UX design", "Responsive development", "Speed optimization", "Conversion focus"],
      },
      {
        icon: GitBranch,
        name: "Funnel Development",
        description: "Sales and marketing funnels that drive revenue.",
        features: ["Funnel strategy", "Landing pages", "Lead magnets", "Upsell sequences"],
      },
      {
        icon: Mail,
        name: "Email Marketing",
        description: "Automated email sequences that nurture and convert.",
        features: ["Email strategy", "Automation flows", "Segmentation", "A/B testing"],
      },
      {
        icon: Zap,
        name: "Marketing Automation",
        description: "Streamlined workflows that scale your marketing.",
        features: ["CRM integration", "Lead scoring", "Workflow automation", "Analytics"],
      },
    ],
  },
];

const Services = () => {
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
              Full-spectrum digital
              <br />
              <span className="text-muted-foreground">marketing expertise</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              From strategy to execution, we provide comprehensive digital marketing
              services that drive measurable results and sustainable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`section-padding ${categoryIndex % 2 === 0 ? "bg-background" : "bg-secondary/30"}`}
        >
          <div className="container mx-auto px-4">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-6 mb-12"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-border rounded shrink-0">
                <category.icon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h2 className="text-display-xs md:text-display-sm text-foreground mb-2">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: serviceIndex * 0.1, duration: 0.5 }}
                  className="group p-8 bg-card border border-border rounded hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-border rounded group-hover:border-foreground/30 group-hover:bg-secondary transition-all">
                      <service.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-foreground shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-display-sm md:text-display-md text-background mb-6">
              Ready to accelerate
              <br />
              your growth?
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/contact">
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-background/30 text-background hover:bg-background/10"
                asChild
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
