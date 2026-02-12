import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Performance",
  "SEO",
  "Brand",
  "Web",
];

const projects = [
  {
    id: 1,
    title: "SaaS Revenue Scaling",
    category: "Performance",
    client: "TechFlow Solutions",
    metrics: [
      { value: "+312%", label: "ROAS" },
      { value: "4.8X", label: "MRR Growth" },
    ],
    description:
      "Scaled a B2B SaaS company from $50K to $240K MRR through strategic paid acquisition and funnel optimization.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    link: "/portfolio/techflow",
  },
  {
    id: 2,
    title: "E-Commerce Domination",
    category: "Performance",
    client: "StyleHouse",
    metrics: [
      { value: "$2.4M", label: "Revenue" },
      { value: "280%", label: "ROAS" },
    ],
    description:
      "Transformed a local boutique into a national e-commerce brand with $2.4M annual revenue.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    link: "/portfolio/stylehouse",
  },
  {
    id: 3,
    title: "Organic Traffic Growth",
    category: "SEO",
    client: "HealthPlus",
    metrics: [
      { value: "+540%", label: "Traffic" },
      { value: "120+", label: "Leads/Mo" },
    ],
    description:
      "Built a content engine and SEO strategy that drives 120+ qualified leads monthly.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    link: "/portfolio/healthplus",
  },
  {
    id: 4,
    title: "Local Market Leadership",
    category: "SEO",
    client: "City Dental",
    metrics: [
      { value: "#1", label: "Local Ranking" },
      { value: "+180%", label: "Appointments" },
    ],
    description:
      "Dominated local search results in a competitive market, driving 180% increase in appointments.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    link: "/portfolio/citydental",
  },
  {
    id: 5,
    title: "Brand Repositioning",
    category: "Brand",
    client: "Innovate Corp",
    metrics: [
      { value: "4.8X", label: "Engagement" },
      { value: "+200%", label: "Brand Recall" },
    ],
    description:
      "Complete brand overhaul that repositioned a legacy company for the modern market.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    link: "/portfolio/innovate",
  },
  {
    id: 6,
    title: "Website Conversion Lift",
    category: "Web",
    client: "GrowthLabs",
    metrics: [
      { value: "+65%", label: "Conversion" },
      { value: "2.1X", label: "Pipeline" },
    ],
    description:
      "Redesigned website and funnel resulting in 65% conversion lift and doubled pipeline.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "/portfolio/growthlabs",
  },
];

const clientLogos = [
  "TechFlow",
  "StyleHouse",
  "HealthPlus",
  "Innovate Corp",
  "GrowthLabs",
  "City Dental",
  "DataPrime",
  "ScaleUp",
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              Case Studies
            </span>
            <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
              Results that speak
              <br />
              <span className="text-muted-foreground">for themselves</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore how we've helped businesses across industries achieve
              remarkable growth through strategic digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-background sticky top-[72px] z-30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm font-medium rounded transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={project.link}
                    className="group block bg-card border border-border rounded overflow-hidden hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />

                      {/* Category Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground rounded">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Metrics */}
                      <div className="flex gap-6 mb-4">
                        {project.metrics.map((metric) => (
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

                      {/* Title & Description */}
                      <h3 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.client}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-lg font-semibold text-foreground">
              Trusted by leading brands
            </h3>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="text-lg font-semibold text-muted-foreground/50 hover:text-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-display-sm md:text-display-md text-background mb-6">
              Ready to be our
              <br />
              next success story?
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Button
              variant="secondary"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/contact">
                Start Your Growth Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
