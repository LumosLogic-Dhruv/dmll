import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ClientHero from "@/components/Client/ClientHero";
import TestimonialCard from "@/components/Client/TestimonialCard";

const allTestimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "CMO",
    company: "TechFlow Solutions",
    logo: "TF",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    text: "Orvix transformed our paid acquisition. CPA dropped 58% while lead volume increased 3x. Their systematic testing approach and weekly optimization calls keep us ahead of targets.",
  },
  {
    id: 2,
    name: "Marcus Chen",
    position: "Founder & CEO",
    company: "StyleHouse",
    logo: "SH",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 4.5,
    text: "We went from $40K to $240K monthly revenue in 6 months. Their Meta Ads strategy, creative testing, and funnel optimization delivered consistent 280% ROAS.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    position: "Practice Owner",
    company: "City Dental",
    logo: "CD",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    rating: 4,
    text: "Local SEO was a game-changer. We now rank #1 for all target keywords and appointment volume increased 180%. Their GBP optimization and review strategy works.",
  },
  {
    id: 4,
    name: "James Park",
    position: "CEO",
    company: "GrowthLabs",
    logo: "GL",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    text: "The LinkedIn Ads campaigns brought in a consistent flow of qualified B2B leads. Our sales team is fully booked and pipeline has never looked healthier.",
  },
  {
    id: 5,
    name: "Amanda Torres",
    position: "Marketing Director",
    company: "DataPrime",
    logo: "DP",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
    rating: 4.5,
    text: "Our content strategy overhaul tripled organic traffic in 4 months. The Orvix team understands both SEO and storytelling — a rare combination that truly delivers.",
  },
  {
    id: 6,
    name: "David Kim",
    position: "COO",
    company: "ScaleUp",
    logo: "SU",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 3.5,
    text: "From day one, Orvix felt like an extension of our team. The data-driven approach and transparency in reporting made all the difference. We scaled 4x in under a year.",
  },
];

const INITIAL_COUNT = 4;

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  return (
    <Layout>
      {/* Hero */}
      <ClientHero
        label="Testimonials"
        heading="Hear From Our Happy Clients"
        subheading="We measure success by the growth of our clients. Here's what they have to say about partnering with us."
        ctaText="Start Growing Today"
        ctaLink="/contact"
        stats={[
          { value: "100%", label: "5-Star" },
          { value: "500+", label: "Clients" },
          { value: "6+", label: "Industries" },
          { value: "4x", label: "Avg. Growth" },
        ]}
      />

      {/* Testimonials Grid */}
      <section className="bg-secondary/30 pt-14 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 inline-block">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What clients say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allTestimonials.slice(0, visibleCount).map((t, index) => (
              <TestimonialCard
                key={t.id}
                name={t.name}
                position={t.position}
                company={t.company}
                logo={t.logo}
                image={t.image}
                rating={t.rating}
                text={t.text}
                index={index}
              />
            ))}
          </div>

          {visibleCount < allTestimonials.length && (
            <div className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisibleCount((c) => c + 4)}
                className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Load More Testimonials <ArrowRight className="w-4 h-4" />
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
              Join hundreds of happy clients
            </h3>
            <p className="text-primary-foreground/90">
              Book your free strategy session today.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-secondary font-semibold px-7 py-3.5 rounded-full shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
