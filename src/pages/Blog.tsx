import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Search, Calendar, Clock, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = ["All", "Performance Marketing", "SEO", "Social Media", "Content", "Analytics"];

const blogPosts = [
  {
    id: 1,
    title: "How to Lower Your Google Ads CPA by 40% in 30 Days",
    excerpt: "Systematic approach to reducing cost per acquisition through bid strategy optimization, negative keyword sculpting, and audience layering.",
    category: "Performance Marketing",
    author: "Marcus Johnson",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    featured: true,
    hasVideo: false
  },
  {
    id: 2,
    title: "Meta Ads Creative Testing Framework That Scales",
    excerpt: "How to systematically test ad creatives, identify winners, and scale campaigns profitably with structured A/B testing methodology.",
    category: "Performance Marketing",
    author: "Alexandra Chen",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-12",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    featured: false,
    hasVideo: true
  },
  {
    id: 3,
    title: "SEO Keyword Clustering: Rank for 100+ Keywords with One Page",
    excerpt: "Advanced keyword clustering strategy to dominate search results by targeting topic clusters instead of individual keywords.",
    category: "SEO",
    author: "David Kim",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-10",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop",
    featured: false,
    hasVideo: false
  },
  {
    id: 4,
    title: "LinkedIn Ads for B2B: Complete Campaign Setup Guide",
    excerpt: "Step-by-step guide to launching profitable LinkedIn ad campaigns with account-based targeting and lead gen forms.",
    category: "Performance Marketing",
    author: "Sofia Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-08",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    featured: false,
    hasVideo: true
  },
  {
    id: 5,
    title: "Technical SEO Checklist: 47 Items to Audit Before Launch",
    excerpt: "Comprehensive technical SEO audit checklist covering site structure, Core Web Vitals, schema markup, and crawlability.",
    category: "SEO",
    author: "David Kim",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-05",
    readTime: "18 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    featured: false,
    hasVideo: false
  },
  {
    id: 6,
    title: "Social Media Content Calendar: Plan 90 Days in 2 Hours",
    excerpt: "Efficient content planning system for social media managers to batch-create and schedule content across platforms.",
    category: "Social Media",
    author: "Alexandra Chen",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-03",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop",
    featured: false,
    hasVideo: false
  },
  {
    id: 7,
    title: "GA4 Attribution Models: Which One to Use for Paid Ads",
    excerpt: "Understanding GA4 attribution models and choosing the right one for accurate campaign performance measurement.",
    category: "Analytics",
    author: "Sofia Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    date: "2024-01-01",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    featured: false,
    hasVideo: true
  },
  {
    id: 8,
    title: "Content Marketing ROI: How to Measure What Actually Matters",
    excerpt: "Framework for measuring content marketing performance beyond vanity metrics with revenue attribution.",
    category: "Content",
    author: "Marcus Johnson",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "2023-12-28",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
    featured: false,
    hasVideo: false
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              Marketing Insights
            </span>
            <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
              Learn from our
              <br />
              <span className="text-primary">campaign playbooks.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tactical guides, frameworks, and case studies from managing $50M+ in ad spend 
              and 500+ campaigns across all channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-background sticky top-[72px] z-30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && !searchQuery && (
        <section className="section-padding-xs bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Featured Article
              </span>
            </motion.div>

            <Link to={`/blog/${featuredPost.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid md:grid-cols-2 gap-8 bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-4 w-fit">
                    {featuredPost.category}
                  </div>
                  
                  <h2 className="text-display-xs md:text-display-sm text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground text-sm">{featuredPost.author}</div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button variant="cta" size="lg" className="w-fit">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={`/blog/${post.id}`}
                    className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                      
                      {/* Video Badge */}
                      {post.hasVideo && (
                        <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-foreground ml-0.5" />
                        </div>
                      )}

                      {/* Category */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-semibold text-foreground rounded">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground text-sm truncate">{post.author}</div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-display-sm md:text-display-md text-primary-foreground mb-4">
              Get marketing insights
              <br />
              in your inbox
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Weekly tactical guides on paid ads, SEO, and conversion optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
