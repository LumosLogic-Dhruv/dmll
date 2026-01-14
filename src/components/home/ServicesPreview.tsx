import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Search, 
  Share2, 
  FileText, 
  Target, 
  Globe, 
  Mail, 
  BarChart3,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with our data-driven SEO strategies that drive organic traffic and visibility.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a loyal community and amplify your brand voice across all major social platforms.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Engage your audience with compelling content that tells your story and drives conversions.",
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Maximize your ROI with precisely targeted paid campaigns that reach the right audience.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Create stunning, conversion-optimized websites that elevate your digital presence.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make informed decisions with comprehensive analytics and actionable insights.",
  },
];

const ServicesPreview = () => {
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
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Digital Marketing
            <br />
            <span className="text-gradient-blue">Solutions for Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From strategy to execution, we provide comprehensive digital marketing services 
            tailored to your unique business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-elevated card-hover p-8"
            >
              <div className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center mb-6 group-hover:shadow-glow-blue transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
