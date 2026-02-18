import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit",
    description:
      "Analyze your current campaigns, traffic sources, conversion funnels, and competitor positioning to find gaps.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Plan",
    description:
      "Build a channel strategy with target KPIs: CPA goals, ROAS targets, keyword clusters, and funnel milestones.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch",
    description:
      "Deploy campaigns across Google, Meta, LinkedIn, and organic channels with tracking and attribution in place.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimize",
    description:
      "Weekly bid adjustments, A/B tests, audience refinements, and budget reallocation to maximize ROAS.",
  },
];

const Process = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
            Campaign Workflow
          </span>
          <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
            How we improve your marketing performance
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured process from audit to optimization that delivers
            measurable improvements in traffic, leads, and revenue.
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className="hidden md:block relative">
          {/* Background Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-border rounded-full" />
          
          {/* Animated Progress Line - Single Smooth Fill */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 4, 
              delay: 0,
              ease: "linear"
            }}
            className="absolute top-16 left-0 right-0 h-1 bg-foreground origin-left rounded-full"
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const stepDelay = index * 1; // Each step appears 1 second apart, starting immediately
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stepDelay, duration: 0.4 }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: stepDelay, 
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="w-16 h-16 bg-background border-4 border-foreground rounded-full flex items-center justify-center mx-auto relative"
                    >
                      <span className="text-lg font-bold text-foreground relative z-10">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stepDelay + 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="text-center group"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border border-border rounded group-hover:border-foreground/30 group-hover:bg-background transition-all">
                      <step.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
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
