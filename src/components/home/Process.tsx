import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Deep dive into your business, market, and competitors to identify growth opportunities.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategize",
    description:
      "Craft a data-driven roadmap with clear milestones and measurable objectives.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execute",
    description:
      "Launch optimized campaigns with precision targeting and continuous iteration.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    description:
      "Amplify what works, expand reach, and systematically grow your market share.",
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
            A proven framework for growth
          </h2>
          <p className="text-lg text-muted-foreground">
            Our systematic approach ensures consistent results across every
            engagement.
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className="hidden md:block relative">
          {/* Connection Line */}
          <div className="absolute top-16 left-0 right-0 h-px bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-16 left-0 right-0 h-px bg-foreground origin-left"
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                    className="w-12 h-12 bg-background border-2 border-foreground rounded-full flex items-center justify-center mx-auto"
                  >
                    <span className="text-sm font-bold text-foreground">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="text-center group">
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border border-border rounded group-hover:border-foreground/30 group-hover:bg-background transition-all">
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-6"
            >
              {/* Left - Number & Line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-background">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-4" />
                )}
              </div>

              {/* Right - Content */}
              <div className="pb-8">
                <div className="w-12 h-12 flex items-center justify-center border border-border rounded mb-4">
                  <step.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
