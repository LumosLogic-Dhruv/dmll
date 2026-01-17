import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Check } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface TimelineStep {
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
}

interface AnimatedTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

const AnimatedTimeline = ({ steps, className = "" }: AnimatedTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Vertical line */}
      <motion.div
        className="absolute left-6 top-0 bottom-0 w-0.5 bg-border origin-top"
        initial={{ scaleY: 0 }}
        animate={isInView || prefersReducedMotion ? { scaleY: 1 } : {}}
        transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: "easeOut" }}
      />

      <div className="space-y-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isExpanded = expandedStep === index;

          return (
            <motion.div
              key={index}
              className="relative pl-16"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView || prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.2,
              }}
            >
              {/* Step circle with icon */}
              <motion.div
                className="absolute left-0 w-12 h-12 rounded-full bg-card border-2 border-electric flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExpandedStep(isExpanded ? null : index)}
                initial={{ scale: 0 }}
                animate={isInView || prefersReducedMotion ? { scale: 1 } : {}}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  delay: prefersReducedMotion ? 0 : index * 0.2 + 0.3,
                  type: "spring",
                }}
              >
                <Icon className="w-5 h-5 text-electric" />
              </motion.div>

              {/* Content */}
              <div
                className="bg-card rounded-xl p-6 shadow-sm border border-border cursor-pointer transition-all hover:shadow-md hover:border-electric/30"
                onClick={() => setExpandedStep(isExpanded ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <p className="text-muted-foreground mt-2">{step.description}</p>

                {/* Expandable details */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {step.details && (
                    <ul className="mt-4 space-y-2 border-t pt-4">
                      {step.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Check className="w-4 h-4 text-electric flex-shrink-0" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTimeline;
