import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Search, AlertCircle, CheckCircle, XCircle, TrendingUp, Zap, Globe, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

type ScanStage = "input" | "scanning" | "results";

interface Issue {
  severity: "critical" | "warning" | "info";
  title: string;
  description: string;
}

const SEOAudit = () => {
  const [stage, setStage] = useState<ScanStage>("input");
  const [url, setUrl] = useState("");
  const [scanProgress, setScanProgress] = useState(0);
  const [currentScanStep, setCurrentScanStep] = useState(0);

  const scanSteps = [
    { label: "Analyzing Technical SEO", icon: Globe },
    { label: "Checking Content Quality", icon: FileText },
    { label: "Measuring Performance", icon: Zap },
    { label: "Evaluating User Experience", icon: TrendingUp }
  ];

  const mockScores = {
    overall: 67,
    technical: 72,
    content: 58,
    performance: 81,
    ux: 65
  };

  const mockIssues: Issue[] = [
    {
      severity: "critical",
      title: "Missing Meta Descriptions",
      description: "15 pages are missing meta descriptions, reducing click-through rates from search results."
    },
    {
      severity: "critical",
      title: "Slow Page Load Speed",
      description: "Average page load time is 4.2s. Target is under 2.5s for optimal user experience and rankings."
    },
    {
      severity: "warning",
      title: "Broken Internal Links",
      description: "Found 8 broken internal links that hurt crawlability and user experience."
    },
    {
      severity: "warning",
      title: "Missing Alt Text",
      description: "23 images are missing alt text, reducing accessibility and image search visibility."
    },
    {
      severity: "warning",
      title: "Thin Content Pages",
      description: "12 pages have less than 300 words, which may be considered thin content by search engines."
    },
    {
      severity: "info",
      title: "Mobile Usability",
      description: "Some buttons are too small for mobile users. Increase touch target sizes to 48x48px minimum."
    },
    {
      severity: "info",
      title: "Schema Markup Opportunity",
      description: "Add structured data markup to improve rich snippet visibility in search results."
    }
  ];

  const recommendations = [
    "Add meta descriptions to all pages (target 150-160 characters)",
    "Optimize images and enable compression to improve load speed",
    "Fix broken links and implement 301 redirects where needed",
    "Add descriptive alt text to all images",
    "Expand thin content pages with valuable, keyword-targeted content",
    "Implement schema markup for products, reviews, and FAQs",
    "Improve mobile touch targets and button sizes",
    "Enable browser caching and CDN for faster delivery"
  ];

  const handleStartScan = () => {
    if (!url.trim()) return;
    
    setStage("scanning");
    setScanProgress(0);
    setCurrentScanStep(0);

    // Simulate scanning progress
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage("results"), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Simulate scan steps
    const stepInterval = setInterval(() => {
      setCurrentScanStep(prev => {
        if (prev >= scanSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1250);
  };

  const resetAudit = () => {
    setStage("input");
    setUrl("");
    setScanProgress(0);
    setCurrentScanStep(0);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
    }
  };

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
              Free SEO Audit Tool
            </span>
            <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
              Analyze your website's
              <br />
              <span className="text-primary">SEO performance.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant insights into technical SEO, content quality, performance, 
              and user experience with our AI-powered audit tool.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audit Tool */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Input Stage */}
              {stage === "input" && (
                <motion.div
                  key="input"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-8 bg-card border border-border rounded-lg"
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-display-xs text-foreground mb-2">Enter Your Website URL</h2>
                    <p className="text-muted-foreground">We'll analyze your site and provide actionable recommendations</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <Input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleStartScan()}
                      className="flex-1 h-12 text-base"
                    />
                    <Button
                      onClick={handleStartScan}
                      variant="cta"
                      size="lg"
                      disabled={!url.trim()}
                      className="sm:w-auto w-full"
                    >
                      Start Free Audit
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
                    {scanSteps.map((step, i) => (
                      <div key={i} className="text-center">
                        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
                          <step.icon className="w-6 h-6 text-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground">{step.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Scanning Stage */}
              {stage === "scanning" && (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-12 bg-card border border-border rounded-lg text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Search className="w-10 h-10 text-primary" />
                  </div>

                  <h2 className="text-display-xs text-foreground mb-2">Analyzing Your Website</h2>
                  <p className="text-muted-foreground mb-8">This will take just a moment...</p>

                  <div className="max-w-md mx-auto mb-8">
                    <Progress value={scanProgress} className="h-2" />
                    <div className="text-sm text-muted-foreground mt-2">{scanProgress}% Complete</div>
                  </div>

                  <div className="space-y-3">
                    {scanSteps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: i <= currentScanStep ? 1 : 0.3, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-3 justify-center"
                      >
                        {i < currentScanStep ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : i === currentScanStep ? (
                          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-muted rounded-full" />
                        )}
                        <span className={`text-sm ${i <= currentScanStep ? "text-foreground" : "text-muted-foreground"}`}>
                          {step.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Results Stage */}
              {stage === "results" && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* Overall Score */}
                  <div className="p-8 bg-card border border-border rounded-lg text-center">
                    <h2 className="text-lg font-semibold text-foreground mb-4">Overall SEO Score</h2>
                    <div className={`text-6xl font-bold ${getScoreColor(mockScores.overall)} mb-2`}>
                      {mockScores.overall}
                    </div>
                    <div className="text-muted-foreground">out of 100</div>
                  </div>

                  {/* Category Scores */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Technical SEO", score: mockScores.technical, icon: Globe },
                      { label: "Content", score: mockScores.content, icon: FileText },
                      { label: "Performance", score: mockScores.performance, icon: Zap },
                      { label: "User Experience", score: mockScores.ux, icon: TrendingUp }
                    ].map((category, i) => (
                      <div key={i} className="p-6 bg-card border border-border rounded-lg text-center">
                        <category.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className={`text-3xl font-bold ${getScoreColor(category.score)} mb-1`}>
                          {category.score}
                        </div>
                        <div className="text-sm text-muted-foreground">{category.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Issues Found */}
                  <div className="p-8 bg-card border border-border rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Issues Found</h3>
                    <div className="space-y-4">
                      {mockIssues.map((issue, i) => (
                        <div key={i} className="flex gap-4 p-4 bg-secondary/30 rounded-lg">
                          {getSeverityIcon(issue.severity)}
                          <div className="flex-1">
                            <div className="font-semibold text-foreground mb-1">{issue.title}</div>
                            <div className="text-sm text-muted-foreground">{issue.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="p-8 bg-card border border-border rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Recommended Actions</h3>
                    <ul className="space-y-3">
                      {recommendations.map((rec, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="p-8 bg-primary text-primary-foreground rounded-lg text-center">
                    <h3 className="text-display-xs mb-3">Want us to fix these issues?</h3>
                    <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                      Our SEO specialists can implement all these recommendations and improve your 
                      organic rankings within 3-6 months.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="bg-background text-foreground hover:bg-background/90"
                        asChild
                      >
                        <Link to="/contact">
                          Get Professional SEO Help
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={resetAudit}
                        className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                      >
                        Audit Another Site
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display-xs md:text-display-sm text-foreground text-center mb-12">
              What We Analyze
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Globe, title: "Technical SEO", desc: "Site structure, crawlability, indexation, robots.txt, sitemap" },
                { icon: FileText, title: "Content Quality", desc: "Keyword optimization, content depth, meta tags, headings" },
                { icon: Zap, title: "Performance", desc: "Page speed, Core Web Vitals, mobile optimization, caching" },
                { icon: TrendingUp, title: "User Experience", desc: "Mobile usability, navigation, internal linking, accessibility" }
              ].map((feature, i) => (
                <div key={i} className="p-6 bg-card border border-border rounded-lg">
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SEOAudit;
