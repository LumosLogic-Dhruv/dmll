import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Star, Play, ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const clientLogos = [
  "TechFlow", "StyleHouse", "HealthPlus", "Innovate Corp", 
  "GrowthLabs", "City Dental", "DataPrime", "ScaleUp",
  "CloudNine", "MarketPro", "BrandWorks", "DigitalEdge"
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CMO",
    company: "TechFlow Solutions",
    logo: "TF",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    text: "Orvix transformed our paid acquisition. CPA dropped 58% while lead volume increased 3x. Their systematic testing approach and weekly optimization calls keep us ahead of targets.",
    results: [
      { icon: TrendingUp, value: "+312%", label: "ROAS" },
      { icon: DollarSign, value: "-58%", label: "CPA" },
      { icon: Users, value: "3X", label: "Leads" }
    ]
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Founder & CEO",
    company: "StyleHouse",
    logo: "SH",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    text: "We went from $40K to $240K monthly revenue in 6 months. Their Meta Ads strategy, creative testing, and funnel optimization delivered consistent 280% ROAS.",
    results: [
      { icon: DollarSign, value: "$2.4M", label: "Revenue" },
      { icon: TrendingUp, value: "280%", label: "ROAS" },
      { icon: Users, value: "6X", label: "Growth" }
    ]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Practice Owner",
    company: "City Dental",
    logo: "CD",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    text: "Local SEO was a game-changer. We now rank #1 for all target keywords and appointment volume increased 180%. Their GBP optimization and review strategy works.",
    results: [
      { icon: TrendingUp, value: "#1", label: "Local Rank" },
      { icon: Users, value: "+180%", label: "Appointments" },
      { icon: Star, value: "4.9", label: "Rating" }
    ]
  },
  {
    id: 4,
    name: "James Wilson",
    role: "VP Marketing",
    company: "HealthPlus",
    logo: "HP",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 5,
    text: "SEO program delivered 540% organic traffic growth and 120+ qualified leads monthly. Their content strategy and technical SEO expertise positioned us as category leaders.",
    results: [
      { icon: TrendingUp, value: "+540%", label: "Traffic" },
      { icon: Users, value: "120+", label: "Leads/Mo" },
      { icon: DollarSign, value: "$0", label: "CPA" }
    ]
  }
];

const videoTestimonials = [
  {
    id: 1,
    name: "Alexandra Thompson",
    company: "GrowthLabs",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    duration: "2:34",
    result: "+65% Conversion Rate"
  },
  {
    id: 2,
    name: "David Park",
    company: "Innovate Corp",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    duration: "3:12",
    result: "4.8X Engagement"
  },
  {
    id: 3,
    name: "Lisa Martinez",
    company: "DataPrime",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    duration: "2:48",
    result: "$1.2M Revenue"
  }
];

const beforeAfter = [
  {
    id: 1,
    company: "TechFlow Solutions",
    before: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    metric: "+312% ROAS"
  },
  {
    id: 2,
    company: "StyleHouse",
    before: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    metric: "$2.4M Revenue"
  }
];

const Clients = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              Client Success Stories
            </span>
            <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
              Real results from
              <br />
              <span className="text-primary">real campaigns.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses improve ROAS, lower CPA, increase organic traffic, 
              and scale revenue through systematic campaign management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Logos Slider */}
      <section className="py-16 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-lg font-semibold text-foreground">Trusted by leading brands</h3>
          </motion.div>
          
          <div className="relative">
            <div className="flex gap-12 animate-[scroll_30s_linear_infinite]">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 text-2xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              Client Testimonials
            </span>
            <h2 className="text-display-sm md:text-display-md text-foreground mb-4">
              What our clients say
            </h2>
            <p className="text-muted-foreground">
              Campaign results and client feedback from businesses we've helped scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary/30 rounded">
                  {testimonial.results.map((result, i) => (
                    <div key={i} className="text-center">
                      <result.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-xl font-bold text-foreground">{result.value}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-display-sm md:text-display-md text-foreground mb-4">
              Video testimonials
            </h2>
            <p className="text-muted-foreground">
              Hear directly from clients about their experience and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.company}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-background/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-foreground ml-1" />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <div className="text-background font-semibold">{video.name}</div>
                  <div className="text-background/80 text-sm">{video.company}</div>
                  <div className="text-background/90 text-sm font-semibold mt-1">{video.result}</div>
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-foreground/80 text-background text-xs rounded">
                  {video.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-display-sm md:text-display-md text-foreground mb-4">
              Website transformations
            </h2>
            <p className="text-muted-foreground">
              Before and after website redesigns that improved conversion rates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {beforeAfter.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                  {/* Before/After Images */}
                  <div className="absolute inset-0">
                    <img src={item.after} alt="After" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                  </div>

                  {/* Slider */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-background cursor-ew-resize"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-background rounded-full border-2 border-primary flex items-center justify-center">
                      <div className="w-1 h-4 bg-primary" />
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-foreground/80 text-background text-xs font-semibold rounded">
                    BEFORE
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
                    AFTER
                  </div>
                </div>

                {/* Info */}
                <div className="mt-4 text-center">
                  <div className="font-semibold text-foreground">{item.company}</div>
                  <div className="text-primary font-bold text-lg">{item.metric}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-display-sm md:text-display-md text-primary-foreground mb-6">
              Ready to join our
              <br />
              success stories?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Book a free strategy session and see how we can improve your marketing performance.
            </p>
            <Button
              variant="secondary"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/contact">
                Get Your Free Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
