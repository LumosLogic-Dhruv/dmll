import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const testimonials = [
  {
    quote:
      "Orvix restructured our entire SEO strategy with keyword clustering and technical fixes. Within 6 months, organic traffic grew 340% and qualified leads tripled. Every move was data-backed.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote:
      "Their paid media team rebuilt our Google Ads account structure and cut $50K in wasted spend while improving ROAS from 1.8X to 4.2X. They optimize for revenue, not vanity metrics.",
    author: "Michael Chen",
    role: "VP Marketing",
    company: "Innovate Corp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote:
      "Orvix manages our Meta Ads, Google Shopping, and retargeting. Their funnel optimization and campaign restructuring added $2M in revenue within year one. Real operators.",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "StyleHouse",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % testimonials.length);
          return 0;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background py-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
            Client Success
          </span>
          <h2 className="text-display-sm md:text-display-md text-foreground mb-4">
            Marketing results our clients measured
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Side Progress Bars */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden xl:flex flex-col gap-4 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="group relative w-1 h-20 bg-border rounded-full overflow-hidden"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-primary"
                  initial={{ height: "0%" }}
                  animate={{
                    height: index === activeIndex ? `${progress}%` : index < activeIndex ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.1 }}
                />
              </button>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="relative min-h-[400px]">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.95,
                    zIndex: isActive ? 10 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className={`${
                    isActive ? "relative" : "absolute inset-0"
                  } pointer-events-${isActive ? "auto" : "none"}`}
                >
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 flex items-center justify-center border border-border rounded-lg mb-6">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>

                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover border-2 border-border"
                      />
                      <div>
                        <p className="font-semibold text-foreground text-lg">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Progress Bars - Mobile/Tablet */}
          <div className="flex xl:hidden justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="relative w-20 h-1 bg-border rounded-full overflow-hidden"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-primary"
                  initial={{ width: "0%" }}
                  animate={{
                    width: index === activeIndex ? `${progress}%` : index < activeIndex ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.1 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
