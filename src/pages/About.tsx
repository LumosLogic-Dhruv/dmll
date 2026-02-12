import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import {
  Target,
  Lightbulb,
  Users,
  Shield,
  Award,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Alexandra Chen",
    role: "CEO & Founder",
    bio: "15+ years in performance marketing. Former VP of Growth managing $20M+ annual ad budgets.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Performance",
    bio: "Google & Meta certified. Managed $100M+ in ad spend with consistent 300%+ ROAS.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sofia Rodriguez",
    role: "Head of CRO & Analytics",
    bio: "Conversion optimization specialist. Managed 200+ A/B tests with average 35% lift in conversion rate.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "Head of SEO",
    bio: "10+ years in search. Ranked 200+ websites page one through keyword clustering and technical SEO.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

const values = [
  {
    icon: Target,
    title: "KPI Accountability",
    description:
      "Every campaign has defined targets: CPA, ROAS, conversion rate, or organic traffic. We report against them weekly.",
  },
  {
    icon: Lightbulb,
    title: "Testing Methodology",
    description:
      "Systematic A/B testing across ad creatives, audiences, landing pages, and bidding strategies to find what converts.",
  },
  {
    icon: Users,
    title: "Channel Expertise",
    description:
      "Google & Meta certified team. Deep specialization in paid search, paid social, SEO, and conversion optimization.",
  },
  {
    icon: Shield,
    title: "Attribution Transparency",
    description:
      "Real-time dashboards, multi-touch attribution, and weekly reporting so you see exactly where revenue comes from.",
  },
];

const stats = [
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "500+", label: "Campaigns Optimized" },
  { value: "312%", label: "Avg. ROAS Delivered" },
  { value: "8+", label: "Years Operating" },
];

const awards = [
  "Google Premier Partner 2025",
  "Meta Business Partner",
  "Excellence in Performance Marketing",
  "SEO Agency of the Year",
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
              Campaign operators.
              <br />
              <span className="text-muted-foreground">Not a creative studio.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Orvix was built to manage and optimize marketing performance. We run
              campaigns, analyze data, and improve KPIs. Every decision is tied to a metric.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Belief — Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              What We Believe
            </span>
            <h2 className="text-display-sm md:text-display-md text-foreground">
              Principles that drive every campaign
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 bg-background border border-border rounded hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-border rounded mb-4">
                  <value.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Method — Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
                How We Operate
              </span>
              <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
                From campaign operators
                <br />
                to your growth team
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Orvix started when our founder Alexandra Chen saw too many agencies
                  selling strategy decks with no campaign execution. She built a team
                  of certified media buyers, SEO specialists, and CRO analysts.
                </p>
                <p>
                  Our core competency is campaign management: running Google Ads, Meta Ads,
                  LinkedIn campaigns, and SEO programs with weekly optimization cycles,
                  bid adjustments, and performance reporting.
                </p>
                <p>
                  We've managed over $50M in ad spend across 500+ campaigns, delivering
                  an average 312% ROAS and 41% reduction in cost per acquisition.
                  Every engagement is measured by marketing KPIs, not deliverables.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] bg-secondary rounded overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Orvix team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof — Stats + Awards */}
      <section className="py-12 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-background mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-background/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Awards & Recognition
            </h3>
            <p className="text-sm text-muted-foreground">
              Industry acknowledgment of our excellence
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 px-5 py-3 bg-background border border-border rounded"
              >
                <Award className="w-5 h-5 text-foreground" />
                <span className="text-sm font-medium text-foreground">{award}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              Leadership
            </span>
            <h2 className="text-display-sm md:text-display-md text-foreground mb-4">
              Meet the team
            </h2>
            <p className="text-muted-foreground">
              Certified media buyers, SEO specialists, and CRO analysts
              who manage campaigns daily.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group text-center"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center border border-border rounded hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center border border-border rounded hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
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
              Want us to manage
              your campaigns?
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Book a free strategy session. We'll audit your current marketing
              and show you where to improve ROAS, lower CPA, or increase leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/contact">
                  Request Growth Strategy Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background/10"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
