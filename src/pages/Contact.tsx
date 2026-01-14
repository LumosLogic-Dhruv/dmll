import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
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
    icon: Phone,
    title: "Phone",
    value: "(555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@digitaledge.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "123 Digital Avenue",
    description: "Tech City, TC 10001",
  },
];

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Results vary depending on the service and your starting point. SEO typically shows significant improvements within 3-6 months, while PPC can generate leads immediately. During our initial consultation, we'll set realistic expectations based on your specific situation.",
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. Our tiered pricing plans are designed to accommodate different budgets and needs.",
  },
  {
    question: "Can I customize my service package?",
    answer: "Yes! While our standard plans cover most needs, we understand that every business is unique. Contact us to discuss a custom package tailored to your specific requirements.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience across many industries including e-commerce, healthcare, technology, finance, real estate, and more. Our strategies are always customized to your specific industry and target audience.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Let's Start Your
              <br />
              <span className="text-gradient-orange">Growth Journey</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Ready to transform your digital presence? Get in touch and 
              let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background -mt-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl gradient-blue flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {info.title}
                </h3>
                <p className="text-primary font-medium mb-1">{info.value}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="h-12"
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
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project and goals..."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Map Placeholder & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="aspect-video rounded-2xl gradient-hero flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-primary-foreground/70">Interactive Map</p>
                  <p className="text-sm text-primary-foreground/50">123 Digital Avenue, Tech City</p>
                </div>
              </div>

              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-heading font-semibold text-foreground">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Quick answers to common questions
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

export default Contact;
