import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Pricing Plans
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-gradient-blue">Growth Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Scale your marketing with plans designed for every stage of growth.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 rounded-xl bg-muted">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                !isAnnual
                  ? "bg-card text-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isAnnual
                  ? "bg-card text-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "gradient-hero text-primary-foreground scale-105 shadow-2xl"
                  : "bg-card border border-border shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-2 rounded-full gradient-orange text-accent-foreground text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
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

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`font-heading text-5xl font-bold ${
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    /month
                  </span>
                </div>
                {isAnnual && (
                  <p className={`text-sm mt-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    Billed annually (${isAnnual ? plan.annualPrice * 12 : plan.monthlyPrice * 12}/year)
                  </p>
                )}
              </div>

              <Button
                variant={plan.popular ? "hero" : "default"}
                size="lg"
                className="w-full mb-8"
                asChild
              >
                <Link to="/contact">Get Started</Link>
              </Button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-primary-foreground/20" : "bg-primary/10"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
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
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
