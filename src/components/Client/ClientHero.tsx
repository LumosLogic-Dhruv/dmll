import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ClientHeroProps {
  label: string;
  heading: string;
  subheading: string;
  ctaText?: string;
  ctaLink?: string;
  stats?: { value: string; label: string }[];
}

const defaultStats = [
  { value: "700+", label: "Projects" },
  { value: "312%", label: "Avg. ROAS" },
  { value: "98%", label: "Retention" },
  { value: "8+", label: "Years" },
];

const ClientHero = ({
  label,
  heading,
  subheading,
  ctaText = "Get a Proposal",
  ctaLink = "/contact",
  stats = defaultStats,
}: ClientHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center bg-background overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-28 -left-28 w-[520px] h-[520px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-primary/18 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none"
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div ref={ref} className="container mx-auto px-4 relative z-10 pt-32 pb-12">
        <div className="max-w-4xl mx-auto text-center">

          {/* Pulsing badge */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 bg-secondary/10 border border-border rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[11px] font-bold tracking-[0.15em] text-primary uppercase">
              {label}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-5"
          >
            {heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {subheading}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.34 }}
          >
            <Link
              to={ctaLink}
              className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-300"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.48 }}
            className="grid grid-cols-2 md:grid-cols-4 mt-14 rounded-2xl overflow-hidden border border-border bg-secondary/10 gap-px"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-background px-6 py-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] text-muted-foreground font-semibold tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientHero;
