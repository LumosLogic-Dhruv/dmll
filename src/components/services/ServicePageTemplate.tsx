import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Types
export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceBlock {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  strategy: string;
  results: ServiceMetric[];
  image: string;
}

export interface Tool {
  name: string;
  logo?: string;
}

export interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServicePageData {
  // Hero
  heroTag: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroDescription: string;
  heroMetrics: ServiceMetric[];

  // What We Do
  whatWeDoTitle: string;
  whatWeDoDescription: string;
  whatWeDoBlocks: ServiceBlock[];

  // Process
  processTitle: string;
  processDescription: string;
  processSteps: ProcessStep[];

  // Case Studies
  caseStudies: CaseStudy[];

  // Tools
  tools: Tool[];

  // Differentiators
  differentiators: Differentiator[];

  // CTA
  ctaTitle: string;
  ctaDescription: string;
}

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const counterVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Hero Section Component
const ServiceHero = ({
  tag,
  title,
  titleAccent,
  description,
  metrics
}: {
  tag: string;
  title: string;
  titleAccent: string;
  description: string;
  metrics: ServiceMetric[];
}) => (
  <section className="relative pt-32 pb-24 bg-background overflow-hidden">
    {/* Animated Grid Background */}
    <div className="absolute inset-0 grid-pattern opacity-40" />

    {/* Animated Light Sweep */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-foreground/[0.02] to-transparent skew-x-12"
        animate={{ x: ["0%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Tag */}
          <motion.div variants={fadeUpVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded text-sm font-medium text-muted-foreground">
              <span className="w-2 h-2 bg-foreground rounded-full" />
              {tag}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-display-lg md:text-display-xl lg:text-display-2xl text-foreground mb-6"
          >
            {title}
            <br />
            <span className="text-muted-foreground">{titleAccent}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Book Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/portfolio">View Case Studies</Link>
            </Button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={fadeUpVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={counterVariants}
                className="p-4 bg-secondary/50 border border-border rounded"
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

// What We Do Section
const WhatWeDo = ({
  title,
  description,
  blocks
}: {
  title: string;
  description: string;
  blocks: ServiceBlock[];
}) => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
          What We Do
        </span>
        <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blocks.map((block) => (
          <motion.div
            key={block.title}
            variants={fadeUpVariants}
            className="group p-8 bg-background border border-border rounded hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center border border-border rounded mb-6 group-hover:border-foreground/30 group-hover:bg-secondary transition-all">
              <block.icon className="w-5 h-5 text-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">{block.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{block.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// Process Section
const ProcessSection = ({
  title,
  description,
  steps
}: {
  title: string;
  description: string;
  steps: ProcessStep[];
}) => (
  <section className="section-padding bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-20"
      >
        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
          Our Process
        </span>
        <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </motion.div>

      {/* Desktop Process */}
      <div className="hidden md:block relative">
        {/* Connection Line */}
        <div className="absolute top-16 left-0 right-0 h-px bg-border" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-16 left-0 right-0 h-px bg-foreground origin-left"
        />

        <div className={`grid gap-8`} style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Step Number */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                className="relative z-10 mx-auto mb-8 w-12 h-12 bg-background border-2 border-foreground rounded-full flex items-center justify-center"
              >
                <span className="text-sm font-bold text-foreground">{step.number}</span>
              </motion.div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Process */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-background">{step.number}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-px flex-1 bg-border mt-4" />
              )}
            </div>
            <div className="pb-8">
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Case Studies Section
const CaseStudiesSection = ({ caseStudies }: { caseStudies: CaseStudy[] }) => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
      >
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
            Case Studies
          </span>
          <h2 className="text-display-sm md:text-display-md text-foreground">
            Proven results for real clients
          </h2>
        </div>
        <Button variant="outline" asChild>
          <Link to="/portfolio">
            View All Case Studies
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.client}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group bg-background border border-border rounded overflow-hidden hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={study.image}
                alt={study.client}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground rounded">
                  {study.industry}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Results */}
              <div className="flex gap-4 mb-4">
                {study.results.slice(0, 2).map((result) => (
                  <div key={result.label}>
                    <div className="text-xl font-bold text-foreground">{result.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-foreground mb-2">{study.client}</h3>
              <p className="text-sm text-muted-foreground mb-3">{study.challenge}</p>
              <p className="text-sm text-muted-foreground/80 italic">"{study.strategy}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Tools Section
const ToolsSection = ({ tools }: { tools: Tool[] }) => (
  <section className="section-padding bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
          Technology Stack
        </span>
        <h2 className="text-display-xs md:text-display-sm text-foreground">
          Tools we use to drive results
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={fadeUpVariants}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-4 bg-secondary border border-border rounded hover:border-foreground/20 transition-all duration-300"
          >
            <span className="text-sm font-medium text-foreground">{tool.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// Why ORVIX Section
const WhyOrvixSection = ({ differentiators }: { differentiators: Differentiator[] }) => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
          Why ORVIX
        </span>
        <h2 className="text-display-sm md:text-display-md text-foreground">
          What sets us apart
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {differentiators.map((diff, index) => (
          <motion.div
            key={diff.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex gap-4 p-6 bg-background border border-border rounded hover:border-foreground/20 transition-all"
          >
            <motion.div
              className="w-10 h-10 flex items-center justify-center bg-foreground rounded shrink-0"
              whileHover={{ scale: 1.1 }}
            >
              <Check className="w-5 h-5 text-background" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">{diff.title}</h3>
              <p className="text-sm text-muted-foreground">{diff.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// CTA Section
const CTASection = ({ title, description }: { title: string; description: string }) => (
  <section className="section-padding bg-foreground relative overflow-hidden">
    {/* Animated gradient glow - dark mode only */}
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-background/20 to-transparent blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-display-sm md:text-display-md lg:text-display-lg text-background mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-background/70 mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="xl"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link to="/contact">
              Book Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="border-background/30 text-background hover:bg-background/10 hover:border-background/50"
            asChild
          >
            <Link to="/contact">Request Proposal</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

// Main Template Component
const ServicePageTemplate = ({ data }: { data: ServicePageData }) => {
  return (
    <Layout>
      <ServiceHero
        tag={data.heroTag}
        title={data.heroTitle}
        titleAccent={data.heroTitleAccent}
        description={data.heroDescription}
        metrics={data.heroMetrics}
      />
      <WhatWeDo
        title={data.whatWeDoTitle}
        description={data.whatWeDoDescription}
        blocks={data.whatWeDoBlocks}
      />
      <ProcessSection
        title={data.processTitle}
        description={data.processDescription}
        steps={data.processSteps}
      />
      <CaseStudiesSection caseStudies={data.caseStudies} />
      <ToolsSection tools={data.tools} />
      <WhyOrvixSection differentiators={data.differentiators} />
      <CTASection title={data.ctaTitle} description={data.ctaDescription} />
    </Layout>
  );
};

export default ServicePageTemplate;
