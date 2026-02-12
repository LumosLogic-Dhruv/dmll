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
    title: "Acquire Customers",
    description: "Drive qualified traffic and generate leads through paid and organic channels",
    icon: Target,
    services: [
      {
        icon: Target,
        name: "Google Ads",
        description: "Search, Display, Shopping, and YouTube campaigns. Improves CPA and ROAS. Results visible in 2-4 weeks.",
        features: ["Keyword research & negatives", "Ad copy A/B testing", "Bid strategy optimization", "Quality Score improvement"],
      },
      {
        icon: Megaphone,
        name: "Meta Ads",
        description: "Facebook & Instagram ads. Solves high acquisition cost and low pipeline. Results in 2-3 weeks.",
        features: ["Lookalike audiences", "Creative A/B testing", "Retargeting layers", "Catalog & dynamic ads"],
      },
      {
        icon: Linkedin,
        name: "LinkedIn Ads",
        description: "B2B pipeline generation. Solves low qualified lead volume. Results in 3-4 weeks.",
        features: ["Account-based targeting", "Lead gen forms", "Sponsored content", "InMail sequences"],
      },
      {
        icon: Search,
        name: "SEO & Organic Growth",
        description: "Improves organic traffic and inbound lead volume. Solves low search visibility. Results in 3-6 months.",
        features: ["Keyword clustering", "Technical SEO audits", "Content strategy", "Link building"],
      },
    ],
  },
  {
    title: "Convert Visitors",
    description: "Turn traffic into leads and leads into customers with optimized funnels",
    icon: TrendingUp,
    services: [
      {
        icon: TrendingUp,
        name: "Conversion Optimization",
        description: "Improves conversion rate and revenue per visitor. Solves high traffic but low conversions. Results in 4-8 weeks.",
        features: ["Heatmap analysis", "A/B & multivariate testing", "Funnel drop-off analysis", "Landing page optimization"],
      },
      {
        icon: Globe,
        name: "Landing Page Systems",
        description: "Improves conversion rate and page speed. Solves low-converting traffic. Results in 4-8 weeks.",
        features: ["Conversion-focused UX", "Responsive development", "Core Web Vitals", "Template systems"],
      },
      {
        icon: GitBranch,
        name: "Funnel Development",
        description: "Improves lead-to-customer conversion. Solves leaky funnels. Results in 3-6 weeks.",
        features: ["Funnel architecture", "Landing page optimization", "Lead magnets", "Upsell sequences"],
      },
      {
        icon: FileText,
        name: "Content Marketing",
        description: "Drives organic traffic and positions your brand for target keywords. Solves low authority. Results in 3-6 months.",
        features: ["Topic cluster strategy", "SEO blog management", "Lead magnet creation", "Content distribution"],
      },
    ],
  },
  {
    title: "Retain Customers",
    description: "Increase lifetime value, repeat purchases, and customer engagement",
    icon: Mail,
    services: [
      {
        icon: Mail,
        name: "Email Marketing",
        description: "Improves lead nurturing and repeat purchase rate. Solves low email ROI. Results in 3-4 weeks.",
        features: ["Drip sequence design", "Automation flows", "Behavioral segmentation", "Subject line A/B testing"],
      },
      {
        icon: Zap,
        name: "Marketing Automation",
        description: "Improves lead velocity and marketing efficiency. Solves manual processes slowing growth. Results in 4-6 weeks.",
        features: ["CRM integration", "Lead scoring models", "Workflow automation", "Attribution analytics"],
      },
      {
        icon: Users,
        name: "Social & Community",
        description: "Improves engagement rate and brand demand. Solves low social ROI. Results in 4-8 weeks.",
        features: ["Content calendar", "Community management", "Influencer partnerships", "Social listening"],
      },
      {
        icon: MapPin,
        name: "Local SEO & Reviews",
        description: "Improves local pack rankings and appointment volume. Solves low local visibility. Results in 2-4 months.",
        features: ["Google Business Profile", "Local citations", "Review generation", "Local keyword targeting"],
      },
    ],
  },
  {
    title: "Scale Revenue",
    description: "Expand into new channels, markets, and campaign types profitably",
    icon: Sparkles,
    services: [
      {
        icon: Video,
        name: "Video & Creative",
        description: "Improves ad performance and engagement rate. Solves creative fatigue. Results in 3-5 weeks.",
        features: ["Video ad strategy", "Production", "YouTube SEO", "Video retargeting"],
      },
      {
        icon: Sparkles,
        name: "Multi-Channel Campaigns",
        description: "Coordinated campaigns across all channels to maximize total revenue. Solves siloed marketing. Results in 4-8 weeks.",
        features: ["Campaign ideation", "Creative A/B testing", "Multi-channel execution", "Attribution tracking"],
      },
      {
        icon: Palette,
        name: "Brand & Positioning",
        description: "Improves brand recall and market positioning. Solves weak differentiation. Results in 6-8 weeks.",
        features: ["Brand audit", "Positioning strategy", "Messaging framework", "Brand guidelines"],
      },
      {
        icon: Settings,
        name: "Analytics & Attribution",
        description: "Multi-touch attribution and real-time dashboards. Solves unclear marketing ROI. Results in 2-4 weeks.",
        features: ["GA4 setup", "Multi-touch attribution", "Custom dashboards", "Revenue tracking"],
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
              Acquire. Convert.
              <br />
              <span className="text-muted-foreground">Retain. Scale.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Every service maps to a stage of your growth. We don't sell channels —
              we solve business problems with the right marketing mix for each stage.
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
              Ready to improve your
              <br />
              marketing performance?
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Book a free audit. We'll identify which channels to prioritize and what KPIs to target first.
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
