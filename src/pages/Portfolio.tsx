import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { ExternalLink } from "lucide-react";

const categories = ["All", "SEO", "Social Media", "PPC", "Content", "Web Design"];

const projects = [
  {
    title: "E-Commerce Revenue Growth",
    category: "SEO",
    client: "StyleHouse",
    result: "+340% Revenue",
    description: "Complete SEO overhaul resulting in massive organic traffic growth.",
    color: "from-electric to-electric-light",
  },
  {
    title: "Viral Social Campaign",
    category: "Social Media",
    client: "FitLife Brand",
    result: "5M+ Reach",
    description: "Strategic social media campaign that went viral across platforms.",
    color: "from-orange to-orange-light",
  },
  {
    title: "B2B Lead Generation",
    category: "PPC",
    client: "TechFlow Solutions",
    result: "800+ Leads",
    description: "Targeted PPC campaigns driving qualified B2B leads.",
    color: "from-navy to-navy-light",
  },
  {
    title: "Content Marketing Strategy",
    category: "Content",
    client: "HealthPlus",
    result: "+200% Traffic",
    description: "Comprehensive content strategy doubling organic traffic.",
    color: "from-electric to-electric-light",
  },
  {
    title: "Website Redesign",
    category: "Web Design",
    client: "Innovate Corp",
    result: "+150% Conversions",
    description: "Complete website redesign focused on conversion optimization.",
    color: "from-orange to-orange-light",
  },
  {
    title: "Local SEO Dominance",
    category: "SEO",
    client: "City Dental",
    result: "#1 Local Ranking",
    description: "Local SEO strategy achieving top rankings in competitive market.",
    color: "from-navy to-navy-light",
  },
];

const clientLogos = [
  "TechFlow", "StyleHouse", "FitLife", "HealthPlus", "Innovate", "City Dental"
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
              Our Portfolio
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Success Stories That
              <br />
              <span className="text-gradient-orange">Speak for Themselves</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Explore how we've helped businesses across industries achieve 
              remarkable growth through strategic digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-background sticky top-16 z-30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer card-hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-primary-foreground">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-sm font-medium mb-4">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-primary-foreground/70 text-sm mb-1">{project.client}</p>
                      <p className="font-heading text-3xl font-bold">{project.result}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-navy transition-all duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Trusted by Leading Brands
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl font-heading font-bold text-muted-foreground/50 hover:text-primary transition-colors duration-300"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
