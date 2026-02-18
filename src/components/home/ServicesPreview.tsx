import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Public Relations & Strategic Communication",
    description:
      "Build trust and authority through strategic media relations, press releases, crisis management, and thought leadership positioning that amplifies your brand voice across traditional and digital channels.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    number: "02",
    title: "Content Creation & Copywriting",
    description:
      "Compelling narratives that convert. From blog posts and whitepapers to social media content and email campaigns, we craft messages that resonate with your audience and drive measurable engagement.",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&q=80",
  },
  {
    number: "03",
    title: "Marketing & Advertising",
    description:
      "Data-driven campaigns across paid search, social media, display, and programmatic channels. We optimize every dollar spent to maximize ROI and accelerate your growth trajectory.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    number: "04",
    title: "Design & Branding",
    description:
      "Create memorable brand identities that stand out. From logo design and brand guidelines to complete visual systems, we build cohesive brand experiences that leave lasting impressions.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    number: "05",
    title: "Event Management",
    description:
      "Flawless execution of corporate events, product launches, conferences, and experiential marketing activations. We handle every detail from concept to post-event analysis.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    number: "06",
    title: "Strategic Growth & Venture Partnerships",
    description:
      "Unlock new revenue streams through strategic partnerships, market expansion strategies, and venture collaboration. We connect you with opportunities that accelerate sustainable growth.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    number: "07",
    title: "Influencer & Social Media Strategy",
    description:
      "Leverage the power of authentic voices. We identify, engage, and manage influencer partnerships while crafting social strategies that build communities and drive conversions.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
];

const ServicesPreview = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0F0F12' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-wider mb-4 block" style={{ color: '#7A7A8C' }}>
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Comprehensive Solutions for Modern Brands
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#B5B5C3' }}>
            Premium services designed to elevate your brand and drive measurable results.
          </p>
        </motion.div>

        {/* Services Accordion */}
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-b cursor-pointer"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div
                className="py-8 md:py-10 transition-all duration-500"
                style={{
                  backgroundColor: activeIndex === index ? '#1A1A22' : 'transparent',
                  paddingLeft: activeIndex === index ? '2rem' : '0',
                  paddingRight: activeIndex === index ? '2rem' : '0',
                }}
              >
                {/* Service Header */}
                <div className="flex items-center gap-6 md:gap-8 mb-2">
                  <motion.span
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: '#7A7A8C' }}
                    animate={{
                      x: activeIndex === index ? 8 : 0,
                      color: activeIndex === index ? '#4F46E5' : '#7A7A8C',
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {service.number}
                  </motion.span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold relative inline-block" style={{ color: '#FFFFFF' }}>
                      {service.title}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5"
                        style={{ backgroundColor: '#4F46E5' }}
                        initial={{ width: 0 }}
                        animate={{ width: activeIndex === index ? '100%' : 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </h3>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 grid md:grid-cols-2 gap-8 items-center">
                        {/* Text Content */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <p className="text-lg leading-relaxed mb-8" style={{ color: '#B5B5C3' }}>
                            {service.description}
                          </p>
                          <motion.button
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all duration-400 relative overflow-hidden"
                            style={{
                              color: '#FFFFFF',
                              border: '1px solid #4F46E5',
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.span
                              className="absolute inset-0 rounded-full"
                              style={{ backgroundColor: '#4F46E5' }}
                              initial={{ scale: 0, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.4 }}
                            />
                            <span className="relative z-10">Explore More</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                          </motion.button>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="relative h-64 md:h-80 rounded-lg overflow-hidden"
                          style={{
                            boxShadow: '0 0 40px rgba(34, 211, 238, 0.1)',
                          }}
                        >
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%)',
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
