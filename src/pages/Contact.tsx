import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@orvix.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "San Francisco, CA",
    description: "By appointment only",
  },
];

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary depending on the service and your starting point. SEO typically shows significant improvements within 3-6 months, while paid advertising can generate leads immediately. During our initial consultation, we'll set realistic expectations based on your specific situation.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "We work with businesses of all sizes, from ambitious startups to enterprise companies. Our tiered pricing plans are designed to accommodate different budgets and scale with your growth.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have deep experience across B2B SaaS, e-commerce, professional services, healthcare, and technology sectors. Our strategies are always customized to your specific industry, competitive landscape, and target audience.",
  },
  {
    question: "What's included in the free strategy session?",
    answer:
      "A 30-minute session with a marketing specialist. We review your current campaigns, identify wasted ad spend, analyze conversion bottlenecks, and recommend which channels and KPIs to prioritize. No obligation.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No long-term contracts required. We work on a month-to-month basis because we believe in earning your business through results, not locking you into agreements. Our clients stay because they see ROI.",
  },
];

const challenges = [
  "High CPA / cost per acquisition",
  "Low ROAS on paid campaigns",
  "Not enough qualified leads",
  "Traffic but no conversions",
  "SEO not generating pipeline",
  "No attribution / unclear ROI",
  "Creative fatigue on ads",
  "Scaling campaigns profitably",
];

const Contact = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    challenges: [] as string[],
    message: "",
    budget: "",
    timeline: "",
  });

  const handleChallengeToggle = (challenge: string) => {
    setFormData((prev) => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter((c) => c !== challenge)
        : [...prev.challenges, challenge],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application received",
      description: "We'll review your information and respond within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      challenges: [],
      message: "",
      budget: "",
      timeline: "",
    });
    setStep(1);
  };

  const canProceedStep1 = formData.name && formData.email;
  const canProceedStep2 = formData.challenges.length > 0;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Intro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
                Growth Strategy Session
              </span>
              <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
                Request a free
                <br />
                <span className="text-muted-foreground">campaign audit.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10 max-w-md">
                Speak with a marketing performance specialist. We'll review your
                campaigns, identify wasted spend, and map a plan to improve ROAS.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-border rounded shrink-0">
                      <info.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-10 p-6 bg-secondary rounded">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-foreground" />
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weekend</span>
                    <span className="text-foreground">By appointment</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Multi-Step Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-card border border-border rounded"
            >
              {/* Step Indicator */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold transition-all ${
                        s < step
                          ? "bg-foreground text-background"
                          : s === step
                          ? "border-2 border-foreground text-foreground"
                          : "border border-border text-muted-foreground"
                      }`}
                    >
                      {s < step ? <Check className="w-4 h-4" /> : s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`w-8 h-px transition-all ${
                          s < step ? "bg-foreground" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                ))}
                <span className="ml-3 text-xs text-muted-foreground">
                  Step {step} of 3
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Business Info */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-bold text-foreground mb-2">
                        Tell us about your business
                      </h2>
                      <p className="text-sm text-muted-foreground mb-6">
                        So we can match you with the right specialist.
                      </p>

                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Full Name *
                            </label>
                            <Input
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              placeholder="John Doe"
                              className="rounded"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Work Email *
                            </label>
                            <Input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="john@company.com"
                              className="rounded"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Company
                            </label>
                            <Input
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({ ...formData, company: e.target.value })
                              }
                              placeholder="Your Company"
                              className="rounded"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Phone
                            </label>
                            <Input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              placeholder="(555) 123-4567"
                              className="rounded"
                            />
                          </div>
                        </div>

                        <Button
                          type="button"
                          variant="cta"
                          size="lg"
                          className="w-full"
                          disabled={!canProceedStep1}
                          onClick={() => setStep(2)}
                        >
                          Continue
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Marketing Challenges */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-bold text-foreground mb-2">
                        What marketing challenges do you face?
                      </h2>
                      <p className="text-sm text-muted-foreground mb-6">
                        Select all that apply. This helps us prepare for your session.
                      </p>

                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {challenges.map((challenge) => (
                            <button
                              key={challenge}
                              type="button"
                              onClick={() => handleChallengeToggle(challenge)}
                              className={`p-3 text-sm text-left border rounded transition-all ${
                                formData.challenges.includes(challenge)
                                  ? "border-foreground bg-foreground/5 text-foreground font-medium"
                                  : "border-border text-muted-foreground hover:border-foreground/30"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                    formData.challenges.includes(challenge)
                                      ? "bg-foreground border-foreground"
                                      : "border-border"
                                  }`}
                                >
                                  {formData.challenges.includes(challenge) && (
                                    <Check className="w-3 h-3 text-background" />
                                  )}
                                </div>
                                {challenge}
                              </div>
                            </button>
                          ))}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Anything else we should know?
                          </label>
                          <Textarea
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            placeholder="Current monthly ad spend, specific goals, timeline..."
                            rows={3}
                            className="resize-none rounded"
                          />
                        </div>

                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            onClick={() => setStep(1)}
                          >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                          </Button>
                          <Button
                            type="button"
                            variant="cta"
                            size="lg"
                            className="flex-1"
                            disabled={!canProceedStep2}
                            onClick={() => setStep(3)}
                          >
                            Continue
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Budget & Goals */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-bold text-foreground mb-2">
                        Budget & timeline
                      </h2>
                      <p className="text-sm text-muted-foreground mb-6">
                        This helps us recommend the right engagement model.
                      </p>

                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Monthly Marketing Budget
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
                            className="w-full h-10 px-3 rounded border border-input bg-background text-foreground text-sm"
                          >
                            <option value="">Select a range</option>
                            <option value="3000-5000">$3,000 - $5,000</option>
                            <option value="5000-10000">$5,000 - $10,000</option>
                            <option value="10000-25000">$10,000 - $25,000</option>
                            <option value="25000+">$25,000+</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            When do you want to start?
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) =>
                              setFormData({ ...formData, timeline: e.target.value })
                            }
                            className="w-full h-10 px-3 rounded border border-input bg-background text-foreground text-sm"
                          >
                            <option value="">Select timeline</option>
                            <option value="immediately">Immediately</option>
                            <option value="1-2-weeks">Within 1-2 weeks</option>
                            <option value="1-month">Within a month</option>
                            <option value="exploring">Just exploring</option>
                          </select>
                        </div>

                        {/* Summary */}
                        <div className="p-4 bg-secondary rounded">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            Your session summary
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Name</span>
                              <span className="text-foreground font-medium">{formData.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Email</span>
                              <span className="text-foreground font-medium">{formData.email}</span>
                            </div>
                            {formData.company && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Company</span>
                                <span className="text-foreground font-medium">{formData.company}</span>
                              </div>
                            )}
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Challenges</span>
                              <span className="text-foreground font-medium">{formData.challenges.length} selected</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            onClick={() => setStep(2)}
                          >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                          </Button>
                          <Button
                            type="submit"
                            variant="cta"
                            size="lg"
                            className="flex-1"
                          >
                            Request Growth Strategy Session
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>

                        <p className="text-xs text-muted-foreground text-center">
                          By submitting, you agree to our Privacy Policy. We'll respond
                          within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
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
    </Layout>
  );
};

export default Contact;
