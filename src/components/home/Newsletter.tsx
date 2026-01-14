import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl gradient-hero overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-electric/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-orange/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
              <Mail className="w-8 h-8 text-electric" />
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
              Get weekly insights, tips, and strategies delivered straight to your inbox. 
              Join 10,000+ marketers who stay informed with our newsletter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-14 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl"
              />
              <Button variant="hero" size="lg" className="h-14">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-primary-foreground/50 text-sm mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
