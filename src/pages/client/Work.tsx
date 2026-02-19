import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, DollarSign, BarChart2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ClientHero from "@/components/Client/ClientHero";
import ProjectCard from "@/components/Client/ProjectCard";

const allProjects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    title: "SaaS Revenue Scaling – TechFlow",
    category: "Google Ads · SaaS",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    title: "E-commerce Growth – StyleHouse",
    category: "Meta Ads · E-commerce",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    title: "Local SEO Domination – City Dental",
    category: "Local SEO · Healthcare",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    title: "B2B Lead Gen – DataPrime",
    category: "LinkedIn Ads · B2B",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    title: "Brand Relaunch – Innovate Corp",
    category: "Branding · Strategy",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    title: "CRO Audit & Optimisation – ScaleUp",
    category: "CRO · Conversion",
  },
];

const achievements = [
  {
    icon: Trophy,
    value: "500+",
    label: "Campaigns Delivered",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    icon: DollarSign,
    value: "$50M+",
    label: "Ad Spend Managed",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    icon: BarChart2,
    value: "312%",
    label: "Avg. ROAS Delivered",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
];

const INITIAL_COUNT = 4;

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  return (
    <Layout>
      {/* Hero */}
      <ClientHero
        label="Work"
        heading="Our Successful Projects"
        subheading="Real campaigns. Measurable results. See how we've helped brands scale revenue and dominate their markets."
        ctaText="View Case Studies"
        ctaLink="/portfolio"
        stats={[
          { value: "500+", label: "Campaigns" },
          { value: "$50M+", label: "Ad Spend" },
          { value: "312%", label: "Avg. ROAS" },
          { value: "40+", label: "Industries" },
        ]}
      />

      {/* Projects Heading */}
      <section className="bg-background pt-14 pb-2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 inline-block">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projects showcase
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase Grid */}
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
                Load More <ArrowRight className="w-4 h-4" />
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
              Want results like these?
            </h3>
            <p className="text-primary-foreground/90">
              Book a free strategy call and let&rsquo;s map out your growth plan.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-secondary font-semibold px-7 py-3.5 rounded-full shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            Book Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
