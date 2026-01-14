import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Award, Globe } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 150, suffix: "%", label: "Average ROI Increase" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 50, suffix: "+", label: "Industry Awards" },
  { icon: Globe, value: 30, suffix: "+", label: "Countries Served" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground">
      {count}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-electric/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Numbers That <span className="text-gradient-orange">Speak</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Our track record of success drives everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-electric" />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/70 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
