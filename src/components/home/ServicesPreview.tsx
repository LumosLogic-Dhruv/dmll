import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Target, Search, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description:
      "Data-driven paid media strategies across Google, Meta, and LinkedIn that maximize ROI and scale revenue.",
    link: "/services/performance",
    stats: "Avg. 312% ROAS",
  },
  {
    icon: Search,
    title: "Organic Growth",
    description:
      "Strategic SEO and content marketing that builds sustainable traffic and establishes market authority.",
    link: "/services/seo",
    stats: "+540% organic traffic",
  },
  {
    icon: Palette,
    title: "Brand & Creative",
    description:
      "Compelling brand identities and creative campaigns that resonate with audiences and drive engagement.",
    link: "/services/branding",
    stats: "4.8X engagement lift",
  },
  {
    icon: Globe,
    title: "Web & Automation",
    description:
      "High-converting websites and marketing automation systems that turn visitors into customers.",
    link: "/services/web",
    stats: "65% conversion increase",
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
            Full-spectrum digital marketing expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            From acquisition to retention, we architect growth strategies that
            deliver measurable results across every touchpoint.
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
