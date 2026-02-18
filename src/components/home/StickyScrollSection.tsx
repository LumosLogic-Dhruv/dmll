import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const content = [
  {
    title: "Performance Marketing",
    description: "Drive measurable results with data-driven campaigns across Google, Meta, and LinkedIn. Lower your CPA while scaling revenue.",
    image: "/hero.webp",
  },
  {
    title: "SEO Strategy",
    description: "Rank higher and generate qualified organic traffic. Our technical SEO and content strategies deliver sustainable growth.",
    image: "/hero.webp",
  },
  {
    title: "Conversion Optimization",
    description: "Turn more visitors into customers. We optimize every touchpoint in your funnel to maximize ROI and revenue.",
    image: "/hero.webp",
  },
];

const StickyScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * content.length),
        content.length - 1
      );
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative bg-background" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="relative">
              {content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={`${activeIndex === index ? "relative" : "absolute inset-0"}`}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  <Button variant="cta" size="lg">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Image/Video Portal */}
            <div className="relative h-[500px] lg:h-[600px]">
              {content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={`${activeIndex === index ? "relative" : "absolute inset-0"} h-full`}
                >
                  <div className="relative h-full overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[500px] object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {content.map((_, index) => (
            <div
              key={index}
              className="h-1 w-16 bg-border rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{
                  width: activeIndex === index ? "100%" : "0%",
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyScrollSection;
