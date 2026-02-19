import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ClientHero from "@/components/Client/ClientHero";
import VideoCard from "@/components/Client/VideoCard";

const allVideos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop",
    companyName: "TechFlow Solutions",
    clientName: "Sarah Mitchell – CMO",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop",
    companyName: "StyleHouse",
    clientName: "Marcus Chen – Founder",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=450&fit=crop",
    companyName: "City Dental",
    clientName: "Dr. Emily Rodriguez – Owner",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop",
    companyName: "GrowthLabs",
    clientName: "James Park – CEO",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop",
    companyName: "DataPrime",
    clientName: "Amanda Torres – Marketing Director",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=450&fit=crop",
    companyName: "ScaleUp",
    clientName: "David Kim – COO",
  },
];

const INITIAL_COUNT = 4;

const VideoTestimonials = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  return (
    <Layout>
      {/* Hero */}
      <ClientHero
        label="Video Testimonials"
        heading="See Our Success Stories"
        subheading="Hear directly from the clients we've helped grow. Real results, real voices."
        ctaText="Get Your Free Audit"
        ctaLink="/contact"
        stats={[
          { value: "100%", label: "5-Star Rated" },
          { value: "6+", label: "Industries" },
          { value: "500+", label: "Campaigns" },
          { value: "3x", label: "Avg. Growth" },
        ]}
      />

      {/* Section Title */}
      <section className="bg-secondary/30 py-14 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            {/* Large quote icon */}
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Quote className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                What our customers are{" "}
                <span className="text-gradient">
                  talking about
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Don&rsquo;t just take our word for it — watch what our clients have to say about working with us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="bg-background pt-14 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allVideos.slice(0, visibleCount).map((video, index) => (
              <VideoCard
                key={video.id}
                thumbnail={video.thumbnail}
                companyName={video.companyName}
                clientName={video.clientName}
                index={index}
              />
            ))}
          </div>

          {visibleCount < allVideos.length && (
            <div className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisibleCount((c) => c + 4)}
                className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Load More Videos <ArrowRight className="w-4 h-4" />
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
              Ready to become our next success story?
            </h3>
            <p className="text-primary-foreground/90">
              Let&rsquo;s talk about what&rsquo;s possible for your business.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-secondary font-semibold px-7 py-3.5 rounded-full shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default VideoTestimonials;
