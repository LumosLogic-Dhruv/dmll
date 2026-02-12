import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Growth",
    description: "For startups ready to scale",
    price: "$3,500",
    period: "/month",
    features: [
      "Performance marketing (1 platform)",
      "Basic SEO optimization",
      "Monthly reporting",
      "Email support",
      "Dedicated account manager",
    ],
    cta: "Start Growing",
    popular: false,
  },
  {
    name: "Scale",
    description: "For businesses ready to dominate",
    price: "$7,500",
    period: "/month",
    features: [
      "Multi-platform advertising",
      "Full SEO strategy",
      "Content marketing",
      "Weekly reporting & calls",
      "Conversion optimization",
      "Marketing automation",
    ],
    cta: "Scale Now",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For market leaders",
    price: "Custom",
    period: "",
    features: [
      "All Scale features",
      "Custom integrations",
      "Dedicated team",
      "24/7 priority support",
      "Strategic consulting",
      "Multi-market expansion",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
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
            Pricing
          </span>
          <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
            Investment built for ROI
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing with no hidden fees. Every plan includes
            dedicated support and measurable results.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded ${
                plan.popular
                  ? "bg-foreground text-background border-2 border-foreground"
                  : "bg-background border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-background text-foreground text-xs font-semibold rounded">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 ${
                        plan.popular ? "text-background" : "text-foreground"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-background/90" : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "secondary" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <Link to="/pricing">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          All plans include a 30-day satisfaction guarantee. No long-term
          contracts required.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingPreview;
