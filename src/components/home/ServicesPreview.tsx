import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Target, Search, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description:
      "Google Ads, Meta Ads, and LinkedIn campaigns optimized daily to lower your CPA and increase ROAS across every channel.",
    link: "/services/performance",
    stats: "Avg. 312% ROAS | -41% CPA",
  },
  {
    icon: Search,
    title: "Organic Growth",
    description:
      "Keyword clustering, technical SEO, and content strategy that ranks you higher on Google and drives qualified inbound leads.",
    link: "/services/seo",
    stats: "+540% organic traffic | 120+ leads/mo",
  },
  {
    icon: Palette,
    title: "Brand & Creative",
    description:
      "Paid social, organic content, and engagement campaigns that build brand demand and generate pipeline from social channels.",
    link: "/services/branding",
    stats: "4.8X engagement | 3.2X pipeline lift",
  },
  {
    icon: Globe,
    title: "Web & Automation",
    description:
      "Landing pages, funnel optimization, and marketing automation that improve conversion rate and revenue per visitor.",
    link: "/services/web",
    stats: "+65% conversion rate | 2.1X revenue/visitor",
  },
];

const ServicesPreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section className="section-padding bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-display-sm md:text-display-md lg:text-display-lg text-foreground mb-6">
            Every channel. Every metric. Fully managed.
          </h2>
          <p className="text-lg text-muted-foreground">
            We operate your paid campaigns, SEO, social, and conversion funnels
            so every marketing dollar drives measurable pipeline and revenue.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link
                to={service.link}
                className="group block h-full p-8 bg-card border border-border rounded hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-border rounded group-hover:border-foreground/30 group-hover:bg-secondary transition-all">
                    <service.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-foreground">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  <span className="font-semibold text-foreground">
                    {service.stats}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
