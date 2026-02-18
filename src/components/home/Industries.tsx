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
    <section className="py-20 md:py-28 bg-[#0F0F12] relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Industries We Empower
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#22D3EE] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[#B5B5C3]">
            Driving growth across diverse sectors.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Auto-Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#0F0F12] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#0F0F12] to-transparent z-10 pointer-events-none" />
        
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
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="group relative flex-shrink-0 w-[340px] md:w-[380px] h-[280px] p-8 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] backdrop-blur-xl hover:border-[#4F46E5]/50 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.3)] cursor-pointer"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#4F46E5]/0 to-[#22D3EE]/0 group-hover:from-[#4F46E5]/10 group-hover:to-[#22D3EE]/5 transition-all duration-400" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#22D3EE] flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-400 group-hover:scale-110">
                    <industry.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {industry.name}
                    </h3>
                    <p className="text-[#B5B5C3] leading-relaxed text-[15px]">
                      {industry.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex items-center justify-end mt-4">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#4F46E5] group-hover:bg-[#4F46E5]/10 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#4F46E5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
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
