import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Calendar, Clock, Share2, Bookmark, ArrowLeft, Play } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { id } = useParams();

  // Mock blog data - in production, fetch based on id
  const post = {
    id: 1,
    title: "How to Lower Your Google Ads CPA by 40% in 30 Days",
    excerpt: "Systematic approach to reducing cost per acquisition through bid strategy optimization, negative keyword sculpting, and audience layering.",
    category: "Performance Marketing",
    author: "Marcus Johnson",
    authorBio: "Head of Performance Marketing with 10+ years managing $100M+ in ad spend. Google & Meta certified.",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    hasVideo: true,
    videoPlaceholder: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop"
  };

  const tableOfContents = [
    { id: "intro", title: "Why CPA Matters" },
    { id: "audit", title: "Step 1: Campaign Audit" },
    { id: "keywords", title: "Step 2: Negative Keyword Sculpting" },
    { id: "bidding", title: "Step 3: Bid Strategy Optimization" },
    { id: "audiences", title: "Step 4: Audience Layering" },
    { id: "results", title: "Expected Results" }
  ];

  const relatedPosts = [
    {
      id: 2,
      title: "Meta Ads Creative Testing Framework That Scales",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      category: "Performance Marketing",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "LinkedIn Ads for B2B: Complete Campaign Setup Guide",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      category: "Performance Marketing",
      readTime: "15 min read"
    },
    {
      id: 7,
      title: "GA4 Attribution Models: Which One to Use for Paid Ads",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Analytics",
      readTime: "11 min read"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded mb-6">
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-display-sm md:text-display-lg text-foreground mb-6"
            >
              {post.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 mb-8"
            >
              <div className="flex items-center gap-3">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{post.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="aspect-[2/1] rounded-lg overflow-hidden mb-12"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-24">
                <h3 className="font-semibold text-foreground mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-6 prose prose-lg max-w-none">
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p className="text-xl text-foreground font-medium">
                  {post.excerpt}
                </p>

                <h2 id="intro" className="text-display-xs text-foreground mt-12 mb-4">Why CPA Matters</h2>
                <p>
                  Cost per acquisition (CPA) is the most important metric in performance marketing. 
                  It directly impacts profitability and determines whether your campaigns scale or fail. 
                  After managing $100M+ in ad spend, I've identified systematic approaches that consistently 
                  lower CPA by 30-50% within 30 days.
                </p>

                {/* Video Embed Placeholder */}
                {post.hasVideo && (
                  <div className="my-8 not-prose">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary group cursor-pointer">
                      <img
                        src={post.videoPlaceholder}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-background/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-background font-semibold text-lg">
                          Watch: CPA Optimization Walkthrough
                        </div>
                        <div className="text-background/80 text-sm">12:34</div>
                      </div>
                    </div>
                  </div>
                )}

                <h2 id="audit" className="text-display-xs text-foreground mt-12 mb-4">Step 1: Campaign Audit</h2>
                <p>
                  Start with a comprehensive audit of your existing campaigns. Look at these key areas:
                </p>
                <ul className="space-y-2">
                  <li>Search term reports - identify wasted spend on irrelevant queries</li>
                  <li>Quality Score distribution - low QS increases CPC by 50-400%</li>
                  <li>Conversion tracking - ensure accurate attribution</li>
                  <li>Landing page experience - page speed and relevance impact CPA</li>
                </ul>

                <h2 id="keywords" className="text-display-xs text-foreground mt-12 mb-4">Step 2: Negative Keyword Sculpting</h2>
                <p>
                  Negative keywords are the fastest way to reduce wasted spend. Run a search term report 
                  for the last 30 days and add negatives for:
                </p>
                <ul className="space-y-2">
                  <li>Informational queries (how to, what is, guide)</li>
                  <li>Job-related searches (career, hiring, salary)</li>
                  <li>Competitor brand terms (unless intentional)</li>
                  <li>Low-intent modifiers (cheap, free, DIY)</li>
                </ul>
                <p>
                  This single action typically reduces CPA by 15-25% within the first week.
                </p>

                <h2 id="bidding" className="text-display-xs text-foreground mt-12 mb-4">Step 3: Bid Strategy Optimization</h2>
                <p>
                  Bid strategy has massive impact on CPA. Here's the framework I use:
                </p>
                <ul className="space-y-2">
                  <li><strong>Target CPA:</strong> Use when you have 30+ conversions/month and clear CPA target</li>
                  <li><strong>Maximize Conversions:</strong> Good for new campaigns building data</li>
                  <li><strong>Manual CPC:</strong> Best for tight budget control and testing</li>
                </ul>
                <p>
                  Switch strategies based on campaign maturity and conversion volume. Don't use Target CPA 
                  until you have sufficient conversion data.
                </p>

                <h2 id="audiences" className="text-display-xs text-foreground mt-12 mb-4">Step 4: Audience Layering</h2>
                <p>
                  Audience layering allows you to bid differently for high-intent users without splitting campaigns. 
                  Layer these audiences with bid adjustments:
                </p>
                <ul className="space-y-2">
                  <li>Website visitors (last 30 days): +30-50% bid adjustment</li>
                  <li>Customer list: +50-100% bid adjustment</li>
                  <li>In-market audiences: +20-30% bid adjustment</li>
                  <li>Similar audiences: Test at 0-10% adjustment</li>
                </ul>

                <h2 id="results" className="text-display-xs text-foreground mt-12 mb-4">Expected Results</h2>
                <p>
                  Following this framework, you should see:
                </p>
                <ul className="space-y-2">
                  <li>Week 1: 15-20% CPA reduction from negative keywords</li>
                  <li>Week 2: Additional 10-15% from bid strategy optimization</li>
                  <li>Week 3-4: Another 10-15% from audience layering and Quality Score improvements</li>
                </ul>
                <p>
                  Total expected CPA reduction: 35-50% within 30 days, while maintaining or increasing conversion volume.
                </p>

                <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Need help optimizing your campaigns?</h3>
                  <p className="text-muted-foreground mb-4">
                    We manage Google Ads campaigns with systematic optimization and weekly reporting.
                  </p>
                  <Button variant="cta" asChild>
                    <Link to="/contact">Get a Free Campaign Audit</Link>
                  </Button>
                </div>
              </div>
            </article>

            {/* Author Sidebar */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                {/* Author Card */}
                <div className="p-6 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4">About the Author</h3>
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground mb-1">{post.author}</div>
                      <div className="text-sm text-muted-foreground">{post.authorBio}</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Posts
                  </Button>
                </div>

                {/* Share */}
                <div className="p-6 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4">Share Article</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-display-xs md:text-display-sm text-foreground mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-background/90 backdrop-blur-sm text-xs font-semibold text-foreground rounded">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="text-xs text-muted-foreground">{relatedPost.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
