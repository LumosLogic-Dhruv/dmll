import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    id: 1,
    title: "How to Reduce CPA by 40% Without Cutting Ad Spend",
    excerpt:
      "Campaign restructuring, negative keyword expansion, and audience layering strategies that lower acquisition cost while maintaining volume.",
    category: "Paid Media",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    date: "Feb 8, 2026",
    featured: true,
  },
  {
    id: 2,
    title: "SEO Ranking Strategy: How We Generated $1.2M in Pipeline",
    excerpt:
      "Keyword clustering, topic mapping, and technical SEO fixes that drove 540% organic growth and $1.2M in qualified pipeline.",
    category: "SEO",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    date: "Feb 4, 2026",
    featured: true,
  },
  {
    id: 3,
    title: "How to Scale Google Ads Profitably Past $50K/Month",
    excerpt:
      "Budget allocation frameworks, campaign structure, and bidding strategies to scale paid search without destroying ROAS.",
    category: "Paid Media",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    date: "Jan 28, 2026",
    featured: false,
  },
  {
    id: 4,
    title: "Conversion Rate Experiments That Actually Move Revenue",
    excerpt:
      "15 high-impact CRO tests we've run across landing pages, checkout flows, and lead forms with before/after data.",
    category: "CRO",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    date: "Jan 21, 2026",
    featured: false,
  },
  {
    id: 5,
    title: "LinkedIn Ads for B2B: Lower CPL and Generate Qualified Pipeline",
    excerpt:
      "Account-based targeting, lead gen forms, and InMail sequences that reduce cost per lead and improve pipeline quality.",
    category: "Paid Media",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&h=400&fit=crop",
    date: "Jan 14, 2026",
    featured: false,
  },
  {
    id: 6,
    title: "Marketing Automation That Increases Revenue Per Lead by 2X",
    excerpt:
      "Lead scoring models, behavioral triggers, and drip sequences that doubled revenue per lead for our clients.",
    category: "Automation",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    date: "Jan 7, 2026",
    featured: false,
  },
];

const categories = ["All", "Paid Media", "SEO", "CRO", "Automation"];

const Insights = () => {
  const featuredInsights = insights.filter((i) => i.featured);
  const regularInsights = insights.filter((i) => !i.featured);

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
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
              Insights
            </span>
            <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
              Marketing playbooks
              <br />
              <span className="text-muted-foreground">that improve KPIs.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tactical guides on reducing CPA, improving ROAS, ranking higher on Google,
              and scaling campaigns profitably. Written by operators, not theorists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-background border-b border-border sticky top-[72px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 text-sm font-medium rounded transition-all duration-200 ${
                  category === "All"
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-display-xs text-foreground">Featured</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredInsights.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/insights/${article.id}`}
                  className="group block bg-card border border-border rounded overflow-hidden hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
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

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-foreground line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-1 text-sm font-medium text-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      Read Article
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-display-xs text-foreground">All Articles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularInsights.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/insights/${article.id}`}
                  className="group block h-full bg-background border border-border rounded overflow-hidden hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
                >
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
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-display-sm md:text-display-md text-background mb-6">
              Weekly campaign optimization tips
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Join 10,000+ marketing operators who receive our weekly digest of
              CPA reduction tactics, ROAS strategies, and SEO ranking playbooks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/10 border border-background/20 rounded text-background placeholder:text-background/50 focus:outline-none focus:border-background/40"
              />
              <Button
                variant="secondary"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
