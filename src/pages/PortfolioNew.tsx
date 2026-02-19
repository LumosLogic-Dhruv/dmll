import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { ArrowUpRight, ArrowRight, X, Play, TrendingUp, DollarSign, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const industries = ["All", "E-commerce", "SaaS", "B2B", "Healthcare", "Local Business"];
const services = ["All", "Google Ads", "Meta Ads", "SEO", "CRO", "Social Media"];

interface Project {
  id: number;
  title: string;
  industry: string;
  service: string;
  platform: string;
  client: string;
  problem: string;
  solution: string;
  metrics: Array<{ icon: any; value: string; label: string }>;
  image: string;
  featured?: boolean;
  hasVideo?: boolean;
  caseStudy: {
    challenge: string;
    approach: string[];
    results: string[];
    testimonial?: { text: string; author: string; role: string };
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "SaaS Revenue Scaling",
    industry: "SaaS",
    service: "Google Ads",
    platform: "Google",
    client: "TechFlow Solutions",
    problem: "Stalled MRR at $50K with high CPA",
    solution: "Campaign restructuring + retargeting layers",
    metrics: [
      { icon: TrendingUp, value: "+312%", label: "ROAS" },
      { icon: DollarSign, value: "$240K", label: "MRR" },
      { icon: Users, value: "4.8X", label: "Growth" }
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    featured: true,
    hasVideo: true,
    caseStudy: {
      challenge: "TechFlow had stalled at $50K MRR with a CPA of $180. Their Google Ads campaigns were poorly structured with broad match keywords and no audience layering.",
      approach: [
        "Rebuilt campaign structure with tightly themed ad groups",
        "Implemented negative keyword sculpting to reduce wasted spend",
        "Added audience layering with website visitors and customer lists",
        "Optimized landing pages for conversion rate improvement",
        "Switched to Target CPA bidding after building conversion data"
      ],
      results: [
        "CPA reduced from $180 to $72 (60% reduction)",
        "MRR grew from $50K to $240K in 6 months",
        "ROAS improved from 120% to 312%",
        "Conversion rate increased from 2.1% to 4.8%"
      ],
      testimonial: {
        text: "Orvix transformed our paid acquisition. Their systematic approach to campaign optimization delivered results we didn't think were possible.",
        author: "Sarah Mitchell",
        role: "CMO, TechFlow Solutions"
      }
    }
  },
  {
    id: 2,
    title: "E-Commerce Domination",
    industry: "E-commerce",
    service: "Meta Ads",
    platform: "Meta",
    client: "StyleHouse",
    problem: "Local-only sales, no online presence",
    solution: "Meta Ads + Google Shopping scaling",
    metrics: [
      { icon: DollarSign, value: "$2.4M", label: "Revenue" },
      { icon: TrendingUp, value: "280%", label: "ROAS" },
      { icon: Users, value: "6X", label: "Growth" }
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    hasVideo: false,
    caseStudy: {
      challenge: "StyleHouse was a local boutique with $40K monthly revenue. They wanted to scale online but had no digital marketing experience.",
      approach: [
        "Launched Meta Ads with creative testing framework",
        "Built lookalike audiences from customer list",
        "Implemented Google Shopping campaigns",
        "Created retargeting sequences across platforms",
        "Optimized product pages for conversion"
      ],
      results: [
        "Revenue grew from $40K to $240K monthly",
        "Achieved 280% ROAS across all channels",
        "Built email list of 45,000+ subscribers",
        "Expanded to 3 new product categories"
      ]
    }
  },
  {
    id: 3,
    title: "Organic Traffic Growth",
    industry: "Healthcare",
    service: "SEO",
    platform: "Organic",
    client: "HealthPlus",
    problem: "Zero organic pipeline",
    solution: "Keyword clustering + content engine",
    metrics: [
      { icon: TrendingUp, value: "+540%", label: "Traffic" },
      { icon: Users, value: "120+", label: "Leads/Mo" },
      { icon: Target, value: "#1", label: "Rankings" }
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    hasVideo: true,
    caseStudy: {
      challenge: "HealthPlus had zero organic visibility and relied entirely on paid ads. They needed a sustainable lead generation channel.",
      approach: [
        "Conducted comprehensive keyword research and clustering",
        "Fixed technical SEO issues (site speed, mobile, schema)",
        "Created topic cluster content strategy",
        "Built high-quality backlinks through outreach",
        "Optimized for local search and Google Business Profile"
      ],
      results: [
        "Organic traffic increased 540% in 6 months",
        "Generating 120+ qualified leads monthly from organic",
        "Ranking #1 for 47 target keywords",
        "Reduced overall CAC by 35% with organic channel"
      ]
    }
  },
  {
    id: 4,
    title: "Local Market Leadership",
    industry: "Local Business",
    service: "SEO",
    platform: "Organic",
    client: "City Dental",
    problem: "Invisible in local search",
    solution: "GBP optimization + local keyword targeting",
    metrics: [
      { icon: Target, value: "#1", label: "Local Rank" },
      { icon: Users, value: "+180%", label: "Appointments" },
      { icon: TrendingUp, value: "4.9", label: "Rating" }
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    hasVideo: false,
    caseStudy: {
      challenge: "City Dental wasn't showing up in local search results and was losing patients to competitors.",
      approach: [
        "Optimized Google Business Profile completely",
        "Built local citations across 50+ directories",
        "Implemented review generation system",
        "Created location-specific content",
        "Fixed NAP consistency issues"
      ],
      results: [
        "Achieved #1 ranking in local pack for all target keywords",
        "Appointment volume increased 180%",
        "Generated 200+ 5-star reviews",
        "Reduced cost per patient acquisition by 60%"
      ]
    }
  },
  {
    id: 5,
    title: "B2B Pipeline Generation",
    industry: "B2B",
    service: "LinkedIn Ads",
    platform: "LinkedIn",
    client: "DataPrime",
    problem: "Low qualified lead volume",
    solution: "Account-based targeting + lead gen forms",
    metrics: [
      { icon: Users, value: "450+", label: "SQLs" },
      { icon: DollarSign, value: "$1.2M", label: "Pipeline" },
      { icon: TrendingUp, value: "18%", label: "Close Rate" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    hasVideo: true,
    caseStudy: {
      challenge: "DataPrime needed high-quality B2B leads but was struggling with low conversion rates from traditional channels.",
      approach: [
        "Implemented account-based targeting on LinkedIn",
        "Created lead gen forms with progressive profiling",
        "Developed thought leadership content offers",
        "Set up multi-touch nurture sequences",
        "Integrated with CRM for lead scoring"
      ],
      results: [
        "Generated 450+ sales-qualified leads",
        "Built $1.2M qualified pipeline",
        "Achieved 18% close rate (vs 8% previous)",
        "Reduced cost per SQL by 45%"
      ]
    }
  },
  {
    id: 6,
    title: "Website Conversion Lift",
    industry: "SaaS",
    service: "CRO",
    platform: "Google",
    client: "GrowthLabs",
    problem: "High traffic, low conversions",
    solution: "CRO audit + funnel redesign",
    metrics: [
      { icon: TrendingUp, value: "+65%", label: "Conversion" },
      { icon: Users, value: "2.1X", label: "Pipeline" },
      { icon: DollarSign, value: "-42%", label: "CPA" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    hasVideo: false,
    caseStudy: {
      challenge: "GrowthLabs had strong traffic but conversion rate was only 1.8%. They were wasting ad spend on a leaky funnel.",
      approach: [
        "Conducted comprehensive CRO audit with heatmaps",
        "Redesigned landing pages with conversion focus",
        "Implemented A/B testing program",
        "Optimized form fields and CTAs",
        "Improved page speed and mobile experience"
      ],
      results: [
        "Conversion rate increased from 1.8% to 2.97% (+65%)",
        "Pipeline doubled with same traffic volume",
        "CPA reduced by 42%",
        "Average order value increased 23%"
      ]
    }
  }
];

const PortfolioNew = () => {
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeService, setActiveService] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesIndustry = activeIndustry === "All" || project.industry === activeIndustry;
    const matchesService = activeService === "All" || project.service === activeService;
    return matchesIndustry && matchesService;
  });

  const featuredProject = projects.find(p => p.featured);

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
              Case Studies
            </span>
            <h1 className="text-display-lg md:text-display-xl text-foreground mb-6">
              Real campaigns.
              <br />
              <span className="text-primary">Real results.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              See how we've helped businesses improve ROAS, lower CPA, increase organic traffic, 
              and scale revenue through systematic campaign management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredProject && (
        <section className="section-padding-xs bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Featured Case Study
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(featuredProject)}
            >
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden group">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {featuredProject.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 group-hover:bg-foreground/30 transition-colors">
                    <div className="w-16 h-16 bg-background/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-4 w-fit">
                  {featuredProject.industry}
                </div>
                
                <h2 className="text-display-xs md:text-display-sm text-foreground mb-4">
                  {featuredProject.title}
                </h2>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {featuredProject.metrics.map((metric, i) => (
                    <div key={i}>
                      <metric.icon className="w-5 h-5 text-primary mb-1" />
                      <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-semibold text-foreground">Problem: </span>
                    <span className="text-sm text-muted-foreground">{featuredProject.problem}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">Solution: </span>
                    <span className="text-sm text-muted-foreground">{featuredProject.solution}</span>
                  </div>
                </div>

                <Button variant="cta" size="lg" className="w-fit">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Industry Filter */}
            <div className="flex-1">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Industry</div>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setActiveIndustry(industry)}
                    className={`px-4 py-2 text-sm font-medium rounded transition-all duration-200 ${
                      activeIndustry === industry
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Filter */}
            <div className="flex-1">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Service</div>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => setActiveService(service)}
                    className={`px-4 py-2 text-sm font-medium rounded transition-all duration-200 ${
                      activeService === service
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setActiveIndustry("All");
                  setActiveService("All");
                }}
                className="px-4 py-2 text-sm font-medium rounded border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-200"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.filter(p => !p.featured).map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground rounded">
                        {project.industry}
                      </span>
                    </div>

                    {project.hasVideo && (
                      <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-foreground ml-0.5" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex gap-4 mb-4">
                      {project.metrics.slice(0, 2).map((metric, i) => (
                        <div key={i}>
                          <div className="text-xl font-bold text-foreground">{metric.value}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <h3 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.client}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.problem}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No case studies match your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          {selectedProject && (
            <div>
              {/* Header Image */}
              <div className="relative aspect-[2/1] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {selectedProject.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
                    <div className="w-20 h-20 bg-background/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-foreground ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded">
                    {selectedProject.industry}
                  </span>
                  <span className="text-sm text-muted-foreground">{selectedProject.service}</span>
                </div>

                <h2 className="text-display-xs md:text-display-sm text-foreground mb-6">
                  {selectedProject.title}
                </h2>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-secondary/30 rounded-lg">
                  {selectedProject.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <metric.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.caseStudy.challenge}</p>
                </div>

                {/* Approach */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Our Approach</h3>
                  <ul className="space-y-2">
                    {selectedProject.caseStudy.approach.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-primary">{i + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">The Results</h3>
                  <ul className="space-y-2">
                    {selectedProject.caseStudy.results.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                {selectedProject.caseStudy.testimonial && (
                  <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-foreground italic mb-4">"{selectedProject.caseStudy.testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{selectedProject.caseStudy.testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{selectedProject.caseStudy.testimonial.role}</div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-border text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Want similar results?</h3>
                  <p className="text-muted-foreground mb-6">Let's discuss how we can help your business grow.</p>
                  <Button variant="cta" size="lg" asChild>
                    <Link to="/contact">
                      Get Your Free Strategy Session
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl text-primary-foreground mb-4">
              Ready to be our next success story?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Get a free campaign audit and see where your marketing performance can improve.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/contact">
                Request a Free Campaign Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioNew;
