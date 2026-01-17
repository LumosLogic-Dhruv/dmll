import { motion } from "framer-motion";
import { Mail, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal, MorphingBlobs, MagneticButton } from "@/components/animations";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="scale">
          <motion.div
            className="relative rounded-3xl gradient-hero overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background */}
            <MorphingBlobs variant="section" />

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-8 h-8 text-electric" />
              </motion.div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Stay Ahead of the Curve
              </h2>
              <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
                Get weekly insights, tips, and strategies delivered straight to your inbox. 
                Join 10,000+ marketers who stay informed with our newsletter.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <motion.div
                  className="relative flex-1"
                  animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
                >
                  {/* Floating label animation */}
                  <motion.label
                    className={`absolute left-4 transition-all pointer-events-none ${
                      isFocused || email
                        ? "top-0 -translate-y-1/2 text-xs bg-navy px-2 text-electric"
                        : "top-1/2 -translate-y-1/2 text-primary-foreground/40"
                    }`}
                    animate={isFocused ? { scale: 0.9 } : { scale: 1 }}
                  >
                    Enter your email
                  </motion.label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="h-14 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-transparent rounded-xl focus:border-electric transition-all"
                  />
                </motion.div>

                <MagneticButton 
                  variant="hero" 
                  size="lg" 
                  className="h-14"
                  type="submit"
                  magneticStrength={0.15}
                >
                  {isSubmitted ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Subscribed!
                    </motion.span>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </MagneticButton>
              </form>

              {/* Trust badges */}
              <motion.div
                className="flex items-center justify-center gap-6 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {["No spam", "Weekly updates", "Unsubscribe anytime"].map((text, i) => (
                  <motion.span
                    key={i}
                    className="flex items-center gap-1 text-primary-foreground/50 text-sm"
                    whileHover={{ scale: 1.05, color: "rgba(255,255,255,0.7)" }}
                  >
                    <Check className="w-3 h-3" />
                    {text}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Newsletter;
