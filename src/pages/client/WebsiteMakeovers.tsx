import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, TrendingUp, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ClientHero from "@/components/Client/ClientHero";
import ProjectCard from "@/components/Client/ProjectCard";

const allProjects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    title: "StyleHouse E-commerce Redesign",
    category: "E-commerce",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    title: "TechFlow SaaS Dashboard",
    category: "SaaS",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    title: "City Dental Practice Website",
    category: "Healthcare",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    title: "GrowthLabs Marketing Site",
    category: "B2B SaaS",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    title: "CloudNine Enterprise Portal",
    category: "Enterprise",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop",
    title: "MarketPro Agency Website",
    category: "Agency",
  },
];

const highlights = [
  {
    icon: Globe,
    value: "700+",
    label: "Websites Redesigned",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    icon: TrendingUp,
    value: "312%",
    label: "Avg. Conversion Lift",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    icon: Zap,
    value: "2.1s",
    label: "Avg. Page Load Time",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
];

const INITIAL_COUNT = 4;

const WebsiteMakeovers = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  return (
    <Layout>
      {/* Hero */}
      <ClientHero
        label="Website Makeovers"
        heading="Websites That Convert Visitors Into Clients"
        subheading="We transform outdated websites into high-performing digital assets. 700+ successful redesigns and counting."
        ctaText="Get a Proposal"
        ctaLink="/contact"
        stats={[
          { value: "700+", label: "Redesigns" },
          { value: "98%", label: "Client Retention" },
          { value: "2.1s", label: "Avg Load Time" },
          { value: "312%", label: "Conv. Lift" },
        ]}
      />

      {/* Portfolio Heading */}
      <section className="bg-background pt-14 pb-2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 inline-block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Recent makeovers
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-background py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.slice(0, visibleCount).map((project, index) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
                index={index}
              />
            ))}
          </div>

          {visibleCount < allProjects.length && (
            <div className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisibleCount((c) => c + 4)}
                className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Load More Projects <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA Strip */}
      <section className="relative bg-primary py-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container mx-auto px-4 relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
              Ready to transform your website?
            </h3>
            <p className="text-primary-foreground/90">
              Let&rsquo;s build something that grows your business.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-secondary font-semibold px-7 py-3.5 rounded-full shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            Start Your Makeover
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WebsiteMakeovers;
