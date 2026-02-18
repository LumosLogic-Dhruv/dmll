import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import {
  Monitor,
  ShoppingCart,
  Building2,
  Stethoscope,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    name: "E-Commerce & Retail",
    description: "Conversion optimization, cart recovery, and omnichannel strategies for modern retail brands.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare & Medical",
    description: "Patient acquisition, HIPAA-compliant campaigns, and trust-building content strategies.",
  },
  {
    icon: Building2,
    name: "Real Estate & Construction",
    description: "Lead generation, virtual tours, and geo-targeted campaigns for property and development.",
  },
  {
    icon: GraduationCap,
    name: "Education & Training",
    description: "Enrollment funnels, course promotion, and student engagement across digital channels.",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Authority building, lead nurturing, and conversion optimization for B2B service providers.",
  },
  {
    icon: Monitor,
    name: "Tech & SaaS",
    description: "Trial conversion, product-led growth, and scalable acquisition for software companies.",
  },
];

const Industries = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const xPos = useRef(0);

  useAnimationFrame((t, delta) => {
    if (!scrollRef.current || isPaused) return;
    
    xPos.current -= delta * 0.03; // Smooth, slow scroll speed
    
    const scrollWidth = scrollRef.current.scrollWidth / 2;
    if (Math.abs(xPos.current) >= scrollWidth) {
      xPos.current = 0;
    }
    
    scrollRef.current.style.transform = `translateX(${xPos.current}px)`;
  });

  // Duplicate industries for infinite scroll
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <section className="py-20 md:py-28 bg-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
            Industries We Empower
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-background/70">
            Driving growth across diverse sectors.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Auto-Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 py-4"
            style={{ willChange: 'transform' }}
          >
            {duplicatedIndustries.map((industry, index) => (
              <motion.div
                key={`${industry.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % industries.length) * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -8 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="group relative flex-shrink-0 w-[320px] md:w-[360px] p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-2xl cursor-pointer"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <industry.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {industry.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="flex items-center justify-end mt-4">
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
