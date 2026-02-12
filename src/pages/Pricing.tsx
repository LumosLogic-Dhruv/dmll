import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Growth",
    description: "For startups ready to scale",
    monthlyPrice: 3500,
    annualPrice: 2800,
    popular: false,
    features: [
      "Performance marketing (1 platform)",
      "Basic SEO optimization",
      "Monthly analytics & reporting",
      "Email support",
      "Dedicated account manager",
      "Bi-weekly strategy calls",
    ],
  },
  {
    name: "Scale",
    description: "For businesses ready to dominate",
    monthlyPrice: 7500,
    annualPrice: 6000,
    popular: true,
    features: [
      "Multi-platform advertising",
      "Full SEO & content strategy",
      "Content marketing (4 pieces/mo)",
      "Weekly reporting & calls",
      "Conversion optimization",
      "Marketing automation",
      "Social media management",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For market leaders",
    monthlyPrice: null,
    annualPrice: null,
    popular: false,
    features: [
      "All Scale features",
      "Custom integrations",
      "Dedicated team (3+ members)",
      "24/7 priority support",
      "Strategic consulting",
      "Multi-market expansion",
      "Executive reporting",
      "Custom SLAs",
    ],
  },
];

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary depending on the service and your starting point. SEO typically shows significant improvements within 3-6 months, while paid advertising can generate leads immediately. During our initial consultation, we'll set realistic expectations based on your specific situation.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No long-term contracts required. We work on a month-to-month basis because we believe in earning your business through results, not locking you into agreements. Annual plans are available at a discount.",
  },
  {
    question: "What's included in the onboarding process?",
    answer:
      "Every new client receives comprehensive onboarding including: a strategy call with our team, account setup and integration, competitor analysis, and a customized 90-day action plan.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes! You can upgrade at any time and we'll prorate the difference. When downgrading, the new rate takes effect at your next billing date. We want you to have the flexibility to scale with your needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), ACH bank transfers, and wire transfers for annual plans. Enterprise clients can also request invoicing with net-30 terms.",
  },
];

const guarantees = [
  "30-day satisfaction guarantee",
  "No hidden fees or charges",
  "Cancel anytime",
  "Free strategy consultation",
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              Pricing
            </span>
            <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
              Investment built
              <br />
              <span className="text-muted-foreground">for ROI</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Every plan includes dedicated
              support and measurable results.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-1 p-1 bg-secondary rounded">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 text-sm font-medium rounded transition-all ${
                  !isAnnual
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 text-sm font-medium rounded transition-all flex items-center gap-2 ${
                  isAnnual
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <span className="px-2 py-0.5 bg-foreground text-background text-xs font-semibold rounded">
                  -20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative p-8 rounded ${
                  plan.popular
                    ? "bg-foreground text-background border-2 border-foreground"
                    : "bg-card border border-border"
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
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isAnnual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {plan.monthlyPrice ? (
                        <>
                          <span className="text-4xl font-bold">
                            ${isAnnual ? plan.annualPrice?.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                          </span>
                          <span
                            className={`text-sm ${
                              plan.popular ? "text-background/70" : "text-muted-foreground"
                            }`}
                          >
                            /month
                          </span>
                          {isAnnual && (
                            <p
                              className={`text-sm mt-1 ${
                                plan.popular ? "text-background/70" : "text-muted-foreground"
                              }`}
                            >
                              Billed annually
                            </p>
                          )}
                        </>
                      ) : (
                        <span className="text-4xl font-bold">Custom</span>
                      )}
                    </motion.div>
                  </AnimatePresence>
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
                  className={`w-full ${
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : ""
                  }`}
                  asChild
                >
                  <Link to="/contact">
                    {plan.monthlyPrice ? "Get Started" : "Contact Sales"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-12 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-background" />
                </div>
                <span className="text-sm font-medium text-background">
                  {guarantee}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              FAQ
            </span>
            <h2 className="text-display-xs md:text-display-sm text-foreground">
              Common questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-background border border-border rounded px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-display-xs md:text-display-sm text-foreground mb-6">
              Not sure which plan is right?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a free strategy call and we'll help you find the perfect solution
              for your business goals.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
