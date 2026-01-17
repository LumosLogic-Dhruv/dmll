import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Globe } from "lucide-react";
import { 
  AnimatedCounter, 
  AnimatedCircularProgress,
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem,
  MorphingBlobs 
} from "@/components/animations";

const stats = [
  { icon: TrendingUp, value: 150, suffix: "%", label: "Average ROI Increase", color: "stroke-electric" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients", color: "stroke-orange" },
  { icon: Award, value: 50, suffix: "+", label: "Industry Awards", color: "stroke-electric" },
  { icon: Globe, value: 30, suffix: "+", label: "Countries Served", color: "stroke-orange" },
];

const StatsCounter = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <MorphingBlobs variant="section" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Numbers That <span className="text-gradient-orange">Speak</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Our track record of success drives everything we do
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" staggerDelay={0.15}>
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="text-center group"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated circular background */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <AnimatedCircularProgress
                    value={100}
                    size={96}
                    strokeWidth={4}
                    color={stat.color}
                  />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                      <stat.icon className="w-8 h-8 text-electric" />
                    </div>
                  </motion.div>
                </div>

                {/* Animated Counter */}
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground block"
                  duration={2.5}
                />
                <p className="text-primary-foreground/70 mt-2 font-medium">{stat.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Animated connecting lines (visual only) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
            <motion.line
              x1="25%"
              y1="60%"
              x2="75%"
              y2="60%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
