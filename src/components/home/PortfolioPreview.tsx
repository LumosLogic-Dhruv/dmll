import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Growth Strategy",
    category: "SEO & PPC",
    result: "+340% Revenue",
    color: "from-electric to-electric-light",
  },
  {
    title: "Brand Awareness Campaign",
    category: "Social Media",
    result: "2M+ Impressions",
    color: "from-orange to-orange-light",
  },
  {
    title: "Lead Generation System",
    category: "Content Marketing",
    result: "500+ Qualified Leads",
    color: "from-navy to-navy-light",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient-blue">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results for real businesses. Explore how we've helped our clients achieve their goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
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
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-primary-foreground/70 text-sm mb-1">Result</p>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
