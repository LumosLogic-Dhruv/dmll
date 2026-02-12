import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Target,
  Rocket,
  RefreshCw,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Audit",
    duration: "Week 1",
    description:
      "We analyze your ad accounts, analytics, SEO, and funnels. You get a report showing wasted spend, conversion gaps, and quick wins.",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy",
    duration: "Week 2",
    description:
      "We build a channel plan with target KPIs: CPA goals, ROAS targets, keyword clusters, and conversion milestones.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution",
    duration: "Weeks 3-4",
    description:
      "Campaigns go live across Google, Meta, LinkedIn, and organic channels with tracking and attribution in place.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Weekly Optimization",
    duration: "Ongoing",
    description:
      "Bid adjustments, A/B tests, audience refinements, and budget reallocation. Every week, every campaign.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Monthly Reporting",
    duration: "Monthly",
    description:
      "Performance review against KPIs. Revenue attribution, channel ROI, next month priorities. No vanity metrics.",
  },
];

const EngagementModel = () => {
  return (
    <section className="section-padding bg-background">
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
            How We Work
          </span>
          <h2 className="text-display-sm md:text-display-md text-foreground mb-4">
            Your engagement model
          </h2>
          <p className="text-muted-foreground">
            No retainers with vague deliverables. Every engagement follows this
            structure so you know exactly what happens and when.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="max-w-3xl mx-auto space-y-4">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex gap-6 p-6 bg-card border border-border rounded hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Number */}
              <div className="w-12 h-12 flex items-center justify-center border-2 border-foreground rounded-full shrink-0">
                <span className="text-sm font-bold text-foreground">
                  {phase.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-foreground">{phase.title}</h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                    {phase.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">
              Start With a Free Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementModel;
