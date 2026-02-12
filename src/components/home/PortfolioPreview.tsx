import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce ROAS Scaling",
    category: "Google Ads & Meta Ads",
    result: "+340% Revenue",
    description: "Campaign restructuring + shopping feed optimization for a DTC brand",
    color: "from-electric to-electric-light",
    metrics: { before: "50K", after: "220K", label: "Monthly Revenue" },
  },
  {
    title: "Paid Social Pipeline Generation",
    category: "Meta Ads & LinkedIn",
    result: "2M+ Impressions",
    description: "Retargeting layers + lookalike audiences to generate qualified pipeline",
    color: "from-orange to-orange-light",
    metrics: { before: "10K", after: "2M", label: "Monthly Reach" },
  },
  {
    title: "SEO Lead Generation Engine",
    category: "SEO & Content",
    result: "500+ Qualified Leads",
    description: "Keyword clustering + funnel optimization driving inbound leads monthly",
    color: "from-navy to-navy-light",
    metrics: { before: "20", after: "500+", label: "Monthly Leads" },
  },
];

const PortfolioPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Work
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient-blue">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Before and after campaign metrics. See the performance improvements we delivered.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <TiltCard
                className="relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
                maxTilt={12}
                glareEnabled={true}
                liftOnHover={true}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                  animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div 
                  className="absolute inset-0 p-8 flex flex-col justify-between text-primary-foreground"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div>
                    <motion.span 
                      className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-sm font-medium mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>
                    <h3 className="font-heading text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    
                    {/* Description - always visible */}
                    <p className="text-primary-foreground/80 text-sm mt-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-primary-foreground/70 text-sm mb-1">Result</p>
                      <motion.p 
                        className="font-heading text-3xl font-bold"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.result}
                      </motion.p>

                      {/* Before/After metrics - always visible */}
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <span className="text-primary-foreground/70 text-xs">{project.metrics.before}</span>
                        <ArrowRight className="w-3 h-3 text-primary-foreground/70" />
                        <span className="text-primary-foreground text-xs font-bold">{project.metrics.after}</span>
                        <span className="text-primary-foreground/70 text-xs">• {project.metrics.label}</span>
                      </div>
                    </div>

                    <motion.div 
                      className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(255,255,255,1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-5 h-5 group-hover:text-navy" />
                    </motion.div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal animation="fadeUp" delay={0.3} className="text-center mt-12">
          <Button variant="default" size="lg" asChild className="group">
            <Link to="/portfolio">
              View All Projects
              <motion.span
                className="inline-block ml-2"
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PortfolioPreview;
