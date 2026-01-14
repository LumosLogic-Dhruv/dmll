import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "DigitalEdge transformed our online presence completely. Within 6 months, our organic traffic increased by 200% and leads tripled. Their strategic approach and attention to detail is unmatched.",
    author: "Sarah Mitchell",
    role: "CEO, TechFlow Solutions",
    avatar: "S",
  },
  {
    quote: "The team's expertise in PPC advertising saved us thousands while dramatically improving our conversion rates. They don't just run campaigns—they optimize for real business results.",
    author: "Michael Chen",
    role: "Marketing Director, Innovate Corp",
    avatar: "M",
  },
  {
    quote: "Working with DigitalEdge has been a game-changer for our e-commerce business. Their comprehensive approach to digital marketing helped us achieve 400% growth in just one year.",
    author: "Emily Rodriguez",
    role: "Founder, StyleHouse",
    avatar: "E",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient-blue">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-3xl bg-card p-8 sm:p-12 shadow-lg">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-foreground leading-relaxed mb-8 text-center">
                  "{testimonials[current].quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full gradient-blue flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-heading font-bold text-xl">
                      {testimonials[current].avatar}
                    </span>
                  </div>
                  <p className="font-heading font-semibold text-lg text-foreground">
                    {testimonials[current].author}
                  </p>
                  <p className="text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
