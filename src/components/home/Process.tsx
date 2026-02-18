import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Target, Rocket, RefreshCw, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit",
    label: "Week 1",
    description:
      "We analyze your ad accounts, analytics, SEO, and funnels. You get a report showing wasted spend, conversion gaps, and quick wins.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy",
    label: "Week 2",
    description:
      "We build a channel plan with target KPIs: CPA goals, ROAS targets, keyword clusters, and conversion milestones.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution",
    label: "Weeks 3-4",
    description:
      "Campaigns go live across Google, Meta, LinkedIn, and organic channels with tracking and attribution in place.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Weekly Optimization",
    label: "Ongoing",
    description:
      "Bid adjustments, A/B tests, audience refinements, and budget reallocation. Every week, every campaign.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Monthly Reporting",
    label: "Monthly",
    description:
      "Performance review against KPIs. Revenue attribution, channel ROI, next month priorities. No vanity metrics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % steps.length;
        setCompletedSteps((completed) => {
          if (next === 0 && prev === steps.length - 1) {
            return [];
          }
          if (!completed.includes(prev)) {
            return [...completed, prev];
          }
          return completed;
        });
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 md:py-28 bg-secondary/30 overflow-hidden">
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
          <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
            Our proven process for marketing success
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured workflow from audit to optimization that delivers measurable results.
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* Left - Options List */}
          <div className="lg:col-span-4 space-y-3">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={`w-full text-left p-6 border rounded-lg transition-all duration-400 ${
                  activeIndex === index
                    ? "bg-primary border-primary text-primary-foreground opacity-100"
                    : completedSteps.includes(index)
                    ? "bg-primary border-primary text-primary-foreground opacity-100"
                    : "bg-card border-border hover:border-primary/50 opacity-40 blur-[1px]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                      activeIndex === index || completedSteps.includes(index)
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <step.icon
                      className={`w-6 h-6 ${
                        activeIndex === index || completedSteps.includes(index) ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-semibold ${
                          activeIndex === index || completedSteps.includes(index)
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.number}
                      </span>
                      <span
                        className={`text-xs ${
                          activeIndex === index || completedSteps.includes(index)
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    <h3
                      className={`text-lg font-bold ${
                        activeIndex === index || completedSteps.includes(index) ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right - Preview */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="grid grid-cols-5 gap-6 items-start"
              >
                {/* Image */}
                <div className="col-span-2">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                    <motion.img
                      initial={{ scale: 1.04 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={steps[activeIndex].image}
                      alt={steps[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-3 bg-card border border-border rounded-lg p-8">
                  <span className="text-5xl font-bold text-primary block mb-3">
                    {steps[activeIndex].number}
                  </span>
                  <span className="text-sm text-muted-foreground block mb-2">
                    {steps[activeIndex].label}
                  </span>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {steps[activeIndex].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {steps[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Horizontal Scrollable Pills */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-full border transition-all ${
                  activeIndex === index
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-card border-border text-foreground"
                }`}
              >
                <span className="text-sm font-semibold whitespace-nowrap">
                  {step.number} {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                <img
                  src={steps[activeIndex].image}
                  alt={steps[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  {(() => {
                    const Icon = steps[activeIndex].icon;
                    return <Icon className="w-5 h-5 text-primary" />;
                  })()}
                  <span className="text-xs text-muted-foreground">
                    {steps[activeIndex].label}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {steps[activeIndex].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {steps[activeIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Process;
