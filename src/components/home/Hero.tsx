import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FloatingIcons,
  MorphingBlobs,
  AnimatedHeadline,
  MagneticButton,
  ParticleBackground,
} from "@/components/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground 
        particleCount={40} 
        speed={0.3}
        connectDistance={120}
      />

      {/* Morphing Gradient Blobs */}
      <MorphingBlobs variant="hero" />

      {/* Floating Marketing Icons */}
      <FloatingIcons />

      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full"
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/5 rounded-full"
          animate={prefersReducedMotion ? {} : { rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Award Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-orange"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Award-Winning Digital Agency
              </span>
            </motion.div>

            {/* Animated Headline */}
            <AnimatedHeadline
              lines={["Transform Your", "Digital Presence"]}
              className="mb-6"
              lineClassName="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight"
              staggerDelay={0.3}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg sm:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We craft data-driven marketing strategies that amplify your brand, 
              engage your audience, and deliver measurable growth.
            </motion.p>

            {/* CTA Buttons with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton variant="hero" size="xl" asChild magneticStrength={0.2}>
                <Link to="/pricing">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </MagneticButton>
              <MagneticButton variant="heroOutline" size="xl" magneticStrength={0.15} glowOnHover={false}>
                <Play className="w-5 h-5" />
                Watch Demo
              </MagneticButton>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-electric-light border-2 border-navy flex items-center justify-center"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  >
                    <span className="text-primary-foreground text-xs font-medium">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-primary-foreground font-semibold">500+ Clients</p>
                <p className="text-primary-foreground/60 text-sm">Trusted by leading brands</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative grid grid-cols-2 gap-4 max-w-md mx-auto">
              {[
                { value: "150%", label: "Avg. ROI Increase", delay: 0.4 },
                { value: "10M+", label: "Leads Generated", delay: 0.5 },
                { value: "98%", label: "Client Retention", delay: 0.6 },
                { value: "24/7", label: "Expert Support", delay: 0.7 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: stat.delay, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px -10px rgba(0, 102, 255, 0.3)"
                  }}
                  className={`bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 cursor-pointer transition-colors hover:border-electric/50 ${
                    index === 1 ? "mt-8" : index === 2 ? "-mt-8" : ""
                  }`}
                >
                  <motion.p 
                    className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: stat.delay + 0.3 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <motion.path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
