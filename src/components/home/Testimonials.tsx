import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { ScrollReveal, LogoMarquee } from "@/components/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const testimonials = [
  {
    quote: "DigitalEdge transformed our online presence completely. Within 6 months, our organic traffic increased by 200% and leads tripled. Their strategic approach and attention to detail is unmatched.",
    author: "Sarah Mitchell",
    role: "CEO, TechFlow Solutions",
    avatar: "S",
    rating: 5,
  },
  {
    quote: "The team's expertise in PPC advertising saved us thousands while dramatically improving our conversion rates. They don't just run campaigns—they optimize for real business results.",
    author: "Michael Chen",
    role: "Marketing Director, Innovate Corp",
    avatar: "M",
    rating: 5,
  },
  {
    quote: "Working with DigitalEdge has been a game-changer for our e-commerce business. Their comprehensive approach to digital marketing helped us achieve 400% growth in just one year.",
    author: "Emily Rodriguez",
    role: "Founder, StyleHouse",
    avatar: "E",
    rating: 5,
  },
];

const clientLogos = [
  { name: "TechFlow" },
  { name: "Innovate Corp" },
  { name: "StyleHouse" },
  { name: "GrowthLabs" },
  { name: "DataPrime" },
  { name: "CloudSync" },
  { name: "BrandForge" },
  { name: "ScaleUp" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-rotate
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Testimonials
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient-blue">Clients Say</span>
          </h2>
        </ScrollReveal>

        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="relative overflow-hidden rounded-3xl bg-card p-8 sm:p-12 shadow-lg"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
          >
            <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10"
                style={{ perspective: "1000px" }}
              >
                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-orange text-orange" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg sm:text-xl lg:text-2xl text-foreground leading-relaxed mb-8 text-center">
                  "{testimonials[current].quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full gradient-blue flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-primary-foreground font-heading font-bold text-xl">
                      {testimonials[current].avatar}
                    </span>
                  </motion.div>
                  <p className="font-heading font-semibold text-lg text-foreground">
                    {testimonials[current].author}
                  </p>
                  <p className="text-muted-foreground">{testimonials[current].role}</p>
                  
                  {/* Verified badge */}
                  <motion.div
                    className="mt-2 flex items-center gap-1 text-xs text-electric"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✓
                    </motion.div>
                    Verified Client
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary w-8" : "bg-border w-3 hover:bg-primary/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Client Logo Marquee */}
        <div className="mt-16">
          <p className="text-center text-muted-foreground mb-8">Trusted by leading brands worldwide</p>
          <LogoMarquee 
            logos={clientLogos} 
            speed={25}
            direction="left"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
