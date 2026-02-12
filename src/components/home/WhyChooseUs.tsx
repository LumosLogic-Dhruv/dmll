import { motion } from "framer-motion";
import { Check, Shield, Zap, LineChart, Users, Clock } from "lucide-react";

const differentiators = [
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    description:
      "Every strategy is backed by comprehensive analytics and real-time performance data.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "A focused team of specialists working exclusively on your brand's success.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description:
      "Swift implementation and iteration cycles that keep you ahead of the competition.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description:
      "Clear, honest communication with real-time dashboards and weekly strategic calls.",
  },
  {
    icon: Clock,
    title: "Long-term Partnership",
    description:
      "We're invested in your sustained growth, not just quick wins.",
  },
  {
    icon: Check,
    title: "Proven Results",
    description:
      "Track record of delivering measurable ROI across diverse industries.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
              Built different.
              <br />
              <span className="text-muted-foreground">Built for results.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not another generic agency. We're growth engineers who combine
              strategic thinking with flawless execution to deliver outcomes that
              matter.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "8+", label: "Years Experience" },
                { value: "150+", label: "Team Members" },
                { value: "25+", label: "Industries" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-6 bg-background border border-border rounded hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-border rounded mb-4 group-hover:border-foreground/30 group-hover:bg-secondary transition-all">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
