import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Search, 
  Share2, 
  FileText, 
  Target, 
  Globe, 
  BarChart3,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard, ScrollReveal, StaggerContainer, StaggerItem, MorphingBlobs } from "@/components/animations";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with our data-driven SEO strategies that drive organic traffic and visibility.",
    stats: { value: "150%", label: "Avg. Traffic Increase" },
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a loyal community and amplify your brand voice across all major social platforms.",
    stats: { value: "2M+", label: "Engagement Monthly" },
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Engage your audience with compelling content that tells your story and drives conversions.",
    stats: { value: "500+", label: "Content Pieces" },
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Maximize your ROI with precisely targeted paid campaigns that reach the right audience.",
    stats: { value: "340%", label: "ROAS Average" },
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Create stunning, conversion-optimized websites that elevate your digital presence.",
    stats: { value: "99%", label: "Performance Score" },
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make informed decisions with comprehensive analytics and actionable insights.",
    stats: { value: "Real-time", label: "Data Tracking" },
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <MorphingBlobs variant="section" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Services
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Digital Marketing
            <br />
            <span className="text-gradient-blue">Solutions for Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From strategy to execution, we provide comprehensive digital marketing services 
            tailored to your unique business goals.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <TiltCard 
                className="h-full card-elevated p-8 group"
                maxTilt={8}
                liftOnHover={true}
                borderHighlight={true}
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center mb-6"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Stats reveal on hover */}
                <motion.div
                  className="flex items-center gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <span className="text-2xl font-bold text-electric">{service.stats.value}</span>
                  <span className="text-sm text-muted-foreground">{service.stats.label}</span>
                </motion.div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <motion.span whileHover={{ x: 5 }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal animation="fadeUp" delay={0.4} className="text-center mt-12">
          <Button variant="default" size="lg" asChild className="group">
            <Link to="/services">
              View All Services
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

export default ServicesPreview;
