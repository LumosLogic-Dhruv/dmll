import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TiltCard, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const plans = [
  {
    name: "Silver",
    monthlyPrice: 499,
    annualPrice: 399,
    description: "Perfect for small businesses starting their digital journey",
    popular: false,
    features: [
      { text: "Up to 5 keywords optimization", included: true },
      { text: "Monthly SEO report", included: true },
      { text: "Basic social media management (3 platforms)", included: true },
      { text: "Email support", included: true },
      { text: "2 content pieces/month", included: true },
      { text: "PPC campaign management", included: false },
      { text: "24/7 priority support", included: false },
      { text: "Competitor analysis", included: false },
    ],
  },
  {
    name: "Gold",
    monthlyPrice: 899,
    annualPrice: 719,
    description: "Ideal for growing companies ready to scale their presence",
    popular: true,
    features: [
      { text: "Up to 15 keywords optimization", included: true },
      { text: "Weekly SEO report", included: true },
      { text: "Advanced social media (5 platforms + ads)", included: true },
      { text: "Priority email & phone support", included: true },
      { text: "5 content pieces/month", included: true },
      { text: "Basic PPC campaign management", included: true },
      { text: "24/7 priority support", included: false },
      { text: "Competitor analysis", included: false },
    ],
  },
  {
    name: "Platinum",
    monthlyPrice: 1499,
    annualPrice: 1199,
    description: "Enterprise solution for maximum digital dominance",
    popular: false,
    features: [
      { text: "Unlimited keywords optimization", included: true },
      { text: "Daily SEO monitoring", included: true },
      { text: "Complete social media + influencer outreach", included: true },
      { text: "24/7 priority support", included: true },
      { text: "10+ content pieces/month", included: true },
      { text: "Comprehensive PPC campaigns", included: true },
      { text: "Monthly strategy consultation", included: true },
      { text: "Competitor analysis & custom dashboard", included: true },
    ],
  },
];

const PricingCards = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-12">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Pricing Plans
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-gradient-blue">Growth Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Scale your marketing with plans designed for every stage of growth.
          </p>

          {/* Animated Billing Toggle */}
          <motion.div 
            className="inline-flex items-center gap-4 p-2 rounded-xl bg-muted"
            whileHover={{ scale: 1.02 }}
          >
            <motion.button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                !isAnnual
                  ? "bg-card text-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isAnnual
                  ? "bg-card text-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              Annual
              <motion.span 
                className="ml-2 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Save 20%
              </motion.span>
            </motion.button>
          </motion.div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={0.15}>
          {plans.map((plan, index) => (
            <StaggerItem key={plan.name}>
              <TiltCard
                className={`relative rounded-3xl p-8 h-full ${
                  plan.popular
                    ? "gradient-hero text-primary-foreground lg:scale-105"
                    : "bg-card border border-border"
                }`}
                maxTilt={plan.popular ? 5 : 8}
                liftOnHover={true}
                glareEnabled={plan.popular}
              >
                {/* Popular badge with glow effect */}
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                    animate={prefersReducedMotion ? {} : { 
                      boxShadow: [
                        "0 0 20px rgba(255, 107, 53, 0.3)",
                        "0 0 40px rgba(255, 107, 53, 0.5)",
                        "0 0 20px rgba(255, 107, 53, 0.3)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="px-4 py-2 rounded-full gradient-orange text-accent-foreground text-sm font-semibold shadow-lg flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </motion.div>
                )}

                <div className="mb-8">
                  <h3 className={`font-heading text-2xl font-bold mb-2 ${
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Animated price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isAnnual ? "annual" : "monthly"}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className={`font-heading text-5xl font-bold ${
                          plan.popular ? "text-primary-foreground" : "text-foreground"
                        }`}
                      >
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </motion.span>
                    </AnimatePresence>
                    <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                      /month
                    </span>
                  </div>
                  <AnimatePresence>
                    {isAnnual && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`text-sm mt-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                      >
                        Billed annually (${plan.annualPrice * 12}/year)
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant={plan.popular ? "hero" : "default"}
                    size="lg"
                    className="w-full mb-8"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </motion.div>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {feature.included ? (
                        <motion.div 
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.popular ? "bg-primary-foreground/20" : "bg-primary/10"
                          }`}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Check className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                        </motion.div>
                      ) : (
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? "bg-primary-foreground/10" : "bg-muted"
                        }`}>
                          <X className={`w-3 h-3 ${plan.popular ? "text-primary-foreground/40" : "text-muted-foreground"}`} />
                        </div>
                      )}
                      <span className={`text-sm ${
                        feature.included
                          ? plan.popular
                            ? "text-primary-foreground"
                            : "text-foreground"
                          : plan.popular
                            ? "text-primary-foreground/40"
                            : "text-muted-foreground"
                      }`}>
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PricingCards;
