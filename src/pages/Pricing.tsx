import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PricingCards from "@/components/pricing/PricingCards";
import { Check, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the new rate takes effect at your next billing date.",
  },
  {
    question: "Is there a contract or commitment?",
    answer: "No long-term contracts required. All plans are month-to-month with annual options available for additional savings. You can cancel anytime with 30 days notice.",
  },
  {
    question: "What's included in the onboarding process?",
    answer: "Every new client receives a comprehensive onboarding including: strategy call with our team, account setup and integration, competitor analysis, and a customized 90-day action plan.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Absolutely! For businesses with unique needs or larger scale requirements, we offer custom enterprise packages. Contact our sales team for a personalized consultation.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. Enterprise clients can also request invoicing.",
  },
];

const guarantees = [
  "30-day money-back guarantee",
  "No hidden fees or charges",
  "Cancel anytime",
  "Free strategy consultation",
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Simple, Transparent <span className="text-gradient-orange">Pricing</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features 
              with no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      <PricingCards />

      {/* Guarantees */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium text-foreground">{guarantee}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
