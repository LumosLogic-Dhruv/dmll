import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    client: "TechFlow SaaS",
    industry: "B2B Software",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    metrics: [
      { value: "+312%", label: "ROAS" },
      { value: "4.8X", label: "Revenue" },
    ],
    description: "Scaled MRR from $50K to $240K through strategic paid acquisition and funnel optimization.",
    link: "/portfolio/techflow",
  },
  {
    id: 2,
    client: "Urban Fitness Co.",
    industry: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    metrics: [
      { value: "+540%", label: "Organic Traffic" },
      { value: "120+", label: "Leads/Month" },
    ],
    description: "Dominated local SEO and built a content engine driving 120+ qualified leads monthly.",
    link: "/portfolio/urban-fitness",
  },
  {
    id: 3,
    client: "Luxe Interiors",
    industry: "E-Commerce",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
    metrics: [
      { value: "$2.4M", label: "Revenue" },
      { value: "280%", label: "ROAS" },
    ],
    description: "Transformed a local business into a national e-commerce brand with $2.4M annual revenue.",
    link: "/portfolio/luxe-interiors",
  },
];

const CaseStudies = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              Case Studies
            </span>
            <h2 className="text-display-sm md:text-display-md lg:text-display-lg text-foreground">
              Results that speak for themselves
            </h2>
          </div>
          <Button variant="outline" asChild className="w-fit">
            <Link to="/portfolio">
              View All Work
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={study.link}
                className="group block bg-card border border-border rounded overflow-hidden hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />

                  {/* Industry Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground rounded">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Metrics */}
                  <div className="flex gap-6 mb-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-foreground">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Client & Description */}
                  <h3 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                    {study.client}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 bg-foreground rounded"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$50M+", label: "Revenue Generated" },
              { value: "500+", label: "Campaigns Launched" },
              { value: "312%", label: "Average ROAS" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-background mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-background/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
