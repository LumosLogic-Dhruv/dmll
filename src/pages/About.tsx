import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { 
  Target, 
  Lightbulb, 
  Users, 
  Heart,
  Award,
  Linkedin,
  Twitter
} from "lucide-react";
import { GrowthGraph } from "@/components/3d";

const team = [
  {
    name: "Alexandra Chen",
    role: "CEO & Founder",
    bio: "15+ years in digital marketing, former VP at a Fortune 500 company.",
    initials: "AC",
  },
  {
    name: "Marcus Johnson",
    role: "Head of SEO",
    bio: "Google-certified expert with a track record of ranking 500+ websites.",
    initials: "MJ",
  },
  {
    name: "Sofia Rodriguez",
    role: "Creative Director",
    bio: "Award-winning designer specializing in brand strategy and visual identity.",
    initials: "SR",
  },
  {
    name: "David Kim",
    role: "PPC Director",
    bio: "Managed $50M+ in ad spend with consistent 300%+ ROAS.",
    initials: "DK",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed with measurable outcomes in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of trends to keep your brand at the forefront.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, not just a vendor.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest, transparent communication is at our core.",
  },
];

const awards = [
  "Best Digital Agency 2023",
  "Top SEO Company",
  "Excellence in Social Media",
  "Best Workplace Award",
];

const About = () => {
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
              About Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              We're on a Mission to
              <br />
              <span className="text-gradient-orange">Transform Digital Marketing</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Founded in 2015, DigitalEdge has grown from a small startup to a 
              full-service digital marketing agency serving clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                From Startup to Industry Leader
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  What started as a passion project in a small garage has evolved into a 
                  powerhouse agency trusted by Fortune 500 companies and ambitious startups alike.
                </p>
                <p>
                  Our journey began when our founder, Alexandra Chen, saw a gap in the market 
                  for truly data-driven, results-focused digital marketing. She assembled a 
                  team of industry experts who shared her vision.
                </p>
                <p>
                  Today, we're proud to have helped over 500 clients achieve their growth 
                  goals, generating millions in revenue and building brands that stand out 
                  in crowded markets.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl gradient-blue opacity-90 flex items-center justify-center relative overflow-hidden">
                {/* 3D Growth Graph */}
                <div className="absolute inset-0">
                  <GrowthGraph />
                </div>
                
                {/* Overlay Text */}
                <div className="text-center text-primary-foreground relative z-10 bg-navy/40 backdrop-blur-sm rounded-2xl px-6 py-4">
                  <p className="font-heading text-6xl font-bold mb-2">9+</p>
                  <p className="text-primary-foreground/70">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              What Drives Us Forward
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated card-hover p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl gradient-blue flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Our Team
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet the Experts Behind Your Success
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate team of strategists, creatives, and data nerds dedicated to your growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group card-elevated card-hover p-8 text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full gradient-blue flex items-center justify-center mb-6 group-hover:shadow-glow-blue transition-all duration-300">
                  <span className="font-heading text-2xl font-bold text-primary-foreground">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
              Awards & Recognition
            </h2>
            <p className="text-muted-foreground">Industry acknowledgment of our excellence</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border"
              >
                <Award className="w-6 h-6 text-primary" />
                <span className="font-medium text-foreground">{award}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
