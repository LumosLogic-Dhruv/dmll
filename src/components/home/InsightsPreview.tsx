import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    id: 1,
    title: "The Future of Performance Marketing in 2026",
    excerpt:
      "AI-driven attribution, privacy-first targeting, and the metrics that actually matter.",
    category: "Strategy",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    date: "Feb 8, 2026",
    link: "/insights/future-performance-marketing",
  },
  {
    id: 2,
    title: "How We Achieved 540% Organic Growth for a SaaS Startup",
    excerpt:
      "A detailed breakdown of our SEO strategy that generated $1.2M in pipeline.",
    category: "Case Study",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    date: "Feb 4, 2026",
    link: "/insights/saas-organic-growth",
  },
  {
    id: 3,
    title: "The Death of Third-Party Cookies: What It Means for Your Strategy",
    excerpt:
      "Adapting your marketing stack for a privacy-first digital landscape.",
    category: "Industry",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    date: "Jan 28, 2026",
    link: "/insights/cookie-deprecation",
  },
];

const InsightsPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              Insights
            </span>
            <h2 className="text-display-sm md:text-display-md text-foreground">
              Latest thinking
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/insights">
              All Articles
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={article.link}
                className="group block h-full bg-card border border-border rounded overflow-hidden hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground rounded">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-foreground line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Read More
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsPreview;
