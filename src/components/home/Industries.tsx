import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingCart,
  Building2,
  Stethoscope,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    icon: Monitor,
    name: "B2B SaaS",
    description: "Pipeline generation, trial-to-paid conversion, MRR scaling through paid and organic channels.",
    stat: "Avg. 4.2X ROAS",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    description: "Google Shopping, Meta catalog ads, retargeting, and AOV optimization for DTC and marketplace brands.",
    stat: "Avg. 280% ROAS",
  },
  {
    icon: Building2,
    name: "Professional Services",
    description: "Lead generation for law firms, consulting, and financial services through search and LinkedIn.",
    stat: "Avg. -38% CPA",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Patient acquisition campaigns, local SEO, and HIPAA-compliant ad strategies for clinics and providers.",
    stat: "Avg. 3.1X ROAS",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Enrollment campaigns, content marketing, and conversion funnel optimization for schools and edtech.",
    stat: "Avg. +210% leads",
  },
  {
    icon: Briefcase,
    name: "Real Estate",
    description: "Listing promotion, lead capture funnels, and geo-targeted campaigns for agents and developers.",
    stat: "Avg. -45% CPL",
  },
];

const Industries = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
            Industries
          </span>
          <h2 className="text-display-sm md:text-display-md text-foreground mb-4">
            Campaigns built for your market
          </h2>
          <p className="text-muted-foreground">
            We manage campaigns across six core verticals. Each has different KPIs,
            buying cycles, and channel mix — we optimize for all of them.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group p-6 bg-background border border-border rounded hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border rounded group-hover:border-foreground/30 group-hover:bg-secondary transition-all">
                  <industry.icon className="w-5 h-5 text-foreground" />
                </div>
                <span className="text-xs font-semibold text-foreground bg-secondary px-2 py-1 rounded">
                  {industry.stat}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
