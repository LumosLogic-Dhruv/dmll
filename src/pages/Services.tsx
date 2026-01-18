import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { 
  Search, 
  Share2, 
  FileText, 
  Target, 
  Globe, 
  Mail, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnalyticsCube } from "@/components/3d";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Dominate search results and drive organic traffic with our comprehensive SEO strategies.",
    features: [
      "Keyword research & strategy",
      "On-page & technical SEO",
      "Link building & outreach",
      "Local SEO optimization",
      "SEO audits & reporting",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a powerful social presence that engages your audience and amplifies your brand.",
    features: [
      "Platform strategy & management",
      "Content creation & curation",
      "Community management",
      "Paid social advertising",
      "Influencer partnerships",
    ],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Create compelling content that tells your story and drives meaningful engagement.",
    features: [
      "Content strategy development",
      "Blog & article writing",
      "Video production",
      "Infographic design",
      "Content distribution",
    ],
  },
  {
    icon: Target,
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Maximize ROI with precisely targeted paid campaigns across all major platforms.",
    features: [
      "Google Ads management",
      "Facebook & Instagram ads",
      "LinkedIn advertising",
      "Retargeting campaigns",
      "A/B testing & optimization",
    ],
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Create stunning, conversion-optimized websites that elevate your digital presence.",
    features: [
      "Custom website design",
      "Responsive development",
      "E-commerce solutions",
      "Landing page creation",
      "Website maintenance",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns.",
    features: [
      "Email strategy & automation",
      "Template design",
      "List segmentation",
      "A/B testing",
      "Performance analytics",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and actionable insights.",
    features: [
      "Google Analytics setup",
      "Custom dashboards",
      "Conversion tracking",
      "ROI analysis",
      "Monthly reporting",
    ],
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Full-Service Digital
              <br />
              <span className="text-gradient-orange">Marketing Solutions</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-8">
              From strategy to execution, we provide comprehensive digital marketing services 
              that drive real results and sustainable growth for your business.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/pricing">
                View Pricing Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl gradient-blue flex items-center justify-center mb-6 shadow-glow-blue">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <div className={`aspect-square max-w-md mx-auto rounded-3xl ${
                    index % 3 === 0 
                      ? "gradient-blue" 
                      : index % 3 === 1 
                        ? "gradient-orange" 
                        : "gradient-hero"
                  } opacity-90 flex items-center justify-center relative overflow-hidden`}>
                    {/* Show 3D model for Analytics service */}
                    {service.title.includes("Analytics") ? (
                      <div className="absolute inset-0">
                        <AnalyticsCube />
                      </div>
                    ) : (
                      <service.icon className="w-32 h-32 text-primary-foreground/30" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
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
