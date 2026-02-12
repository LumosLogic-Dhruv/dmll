import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const testimonials = [
  {
    quote:
      "LumosLogic transformed our digital strategy completely. Within 6 months, our organic traffic increased by 340% and qualified leads tripled. Their data-driven approach is unmatched.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    metric: { value: "+340%", label: "Traffic Growth" },
  },
  {
    quote:
      "The team's expertise in paid acquisition saved us $50K in ad spend while dramatically improving our ROAS. They don't just run campaigns—they optimize for real business outcomes.",
    author: "Michael Chen",
    role: "VP Marketing",
    company: "Innovate Corp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    metric: { value: "4.2X", label: "ROAS Achieved" },
  },
  {
    quote:
      "Working with LumosLogic has been transformative for our e-commerce business. Their comprehensive approach helped us achieve $2M in additional revenue within our first year.",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "StyleHouse",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    metric: { value: "+$2M", label: "Revenue Added" },
  },
  {
    quote:
      "Finally, an agency that delivers on their promises. LumosLogic's systematic approach to SEO put us on page one for our top 20 keywords in just 4 months.",
    author: "David Park",
    role: "CMO",
    company: "GrowthLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    metric: { value: "Page 1", label: "20+ Keywords" },
  },
];

const clientLogos = [
  "TechFlow",
  "Innovate Corp",
  "StyleHouse",
  "GrowthLabs",
  "DataPrime",
  "CloudSync",
  "BrandForge",
  "ScaleUp",
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <section className="section-padding bg-background overflow-hidden">
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
            Client Success
          </span>
          <h2 className="text-display-sm md:text-display-md text-foreground">
            Trusted by industry leaders
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-card border border-border rounded p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center border border-border rounded">
              <Quote className="w-4 h-4 text-muted-foreground" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="pt-8"
              >
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-center">
                  "{testimonials[current].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].author}
                      className="w-14 h-14 rounded-full object-cover border border-border"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-foreground">
                        {testimonials[current].author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-12 bg-border" />

                  <div className="text-center md:text-left">
                    <p className="text-2xl font-bold text-foreground">
                      {testimonials[current].metric.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].metric.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-border rounded hover:bg-secondary hover:border-foreground/20 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-foreground w-8"
                      : "bg-border w-2 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-border rounded hover:bg-secondary hover:border-foreground/20 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by innovative brands worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="text-lg font-semibold text-muted-foreground/50 hover:text-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
