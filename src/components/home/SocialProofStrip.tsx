import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

const SocialProofStrip = () => {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Rating + Logos */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 shrink-0"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-foreground text-foreground"
                />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.9/5</span> from
              200+ client reviews
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-border" />

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider shrink-0">
              Trusted by
            </span>
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="text-sm font-semibold text-muted-foreground/40 hover:text-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
