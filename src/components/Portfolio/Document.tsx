"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  FileText,
  Calendar,
  Eye,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Folder,
  Clock,
} from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

/* ───── animation helpers ───── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: "tween" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "tween" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "tween" } },
};

/* ───── data ───── */
const documentCategories = [
  {
    name: "Case Studies",
    count: 12,
    color: "bg-primary",
    icon: FileText,
    description: "Detailed analysis of successful campaigns"
  },
  {
    name: "White Papers",
    count: 8,
    color: "bg-secondary",
    icon: FileText,
    description: "Industry insights and research reports"
  },
  {
    name: "Client Reports",
    count: 25,
    color: "bg-primary",
    icon: Folder,
    description: "Monthly and quarterly performance reports"
  },
  {
    name: "Proposals",
    count: 15,
    color: "bg-accent",
    icon: FileText,
    description: "Project proposals and strategy documents"
  }
];

const featuredDocuments = [
  {
    title: "SEO Report - Washcure",
    category: "SEO Report",
    date: "Feb 2026",
    size: "2.4 MB",
    downloads: 1250,
    description: "Comprehensive SEO analysis and performance report for Washcure with actionable insights and recommendations",
    pdfPath: "/documents/seo-report-washcure.pdf",
    coverImage: "/Document_images/seo.webp"
  },
  {
    title: "Digital Marketing Performance Report",
    category: "Performance Report",
    date: "Jan 2026",
    size: "1.8 MB",
    downloads: 890,
    description: "Monthly performance analysis covering SEO, PPC, and social media marketing metrics",
    pdfPath: "/documents/seo-report-washcure.pdf",
    coverImage: "/Document_images/Digital marketing.webp"
  },
  {
    title: "Website Optimization Case Study",
    category: "Case Study",
    date: "Dec 2025",
    size: "3.1 MB",
    downloads: 2100,
    description: "Complete website optimization journey showing 300% improvement in organic traffic",
    pdfPath: "/documents/seo-report-washcure.pdf",
    coverImage: "/Document_images/website optimization.webp"
  },
  {
    title: "SEO Strategy Framework 2026",
    category: "Strategy Guide",
    date: "Nov 2025",
    size: "1.2 MB",
    downloads: 1680,
    description: "Ready-to-implement SEO strategy framework for businesses looking to dominate search results",
    pdfPath: "/documents/seo-report-washcure.pdf",
    coverImage: "/Document_images/seo.webp"
  }
];

export default function DocumentsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
    agreed: false,
  });

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-foreground/5 to-transparent rounded-full blur-3xl"
              animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded text-sm mb-8"
              >
                <FileText className="w-4 h-4" />
                <span className="text-muted-foreground font-medium">
                  Resources | Case Studies | White Papers | Templates
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Resource Library
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
                Access our comprehensive collection of case studies, white papers, guides, and templates.
                Download valuable insights and proven strategies to accelerate your digital marketing success.
              </p>
              <Button variant="cta" size="xl" asChild>
                <a href="#documents" className="inline-flex items-center gap-2">
                  Browse Documents <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>



        {/* Document Categories */}
        <section id="documents" className="py-20">
          <div className="container mx-auto px-4">
            {/* Featured Documents */}
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center"
            >
              Featured Documents
            </motion.h3>

            {/* Featured Documents Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredDocuments.map((doc, i) => (
                <motion.div
                  key={doc.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-64"
                >
                  <div className="flex h-full">
                    {/* Left Section - Preview Area (40%) */}
                    <div className="w-2/5 bg-secondary/30 flex items-center justify-center border-r border-border relative overflow-hidden">
                      {/* Document Image */}
                      <img
                        src={doc.coverImage}
                        alt={`Preview of ${doc.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Right Section - Content Area (60%) */}
                    <div className="w-3/5 p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        {/* Category and Size */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                            {doc.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{doc.size}</span>
                        </div>
                        
                        {/* Title */}
                        <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {doc.title}
                        </h4>
                        
                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-3 leading-relaxed">
                          {doc.description}
                        </p>
                        
                        {/* Download Count */}
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                          <Eye className="w-3 h-3" />
                          {doc.downloads.toLocaleString()} downloads
                        </div>
                      </div>
                      
                      {/* Action Buttons - Bottom Right */}
                      <div className="flex gap-2 justify-end">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs hover:bg-primary/10"
                          onClick={() => window.open(doc.pdfPath, '_blank')}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Preview
                        </Button>
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="text-xs bg-primary hover:bg-primary/90"
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = doc.pdfPath;
                            link.download = doc.title + '.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Stats */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Left Side - Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Knowledge at Your Fingertips
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Access our comprehensive library of digital marketing resources, case studies, and industry insights.
                </p>
              </div>
              
              {/* Right Side - Statistics */}
              <div className="flex-shrink-0">
                <div className="grid grid-cols-4 gap-8">
                  {[
                    { number: "60+", label: "Total Documents" },
                    { number: "15K+", label: "Downloads" },
                    { number: "Weekly", label: "New Content" },
                    { number: "8", label: "Categories" }
                  ].map((stat, i) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Documents */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
            >
              Recently Added
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "SEO Audit Checklist 2026", category: "Checklist", date: "2 days ago" },
                { title: "Washcure SEO Performance Update", category: "Report", date: "5 days ago" },
                { title: "Content Marketing ROI Analysis", category: "Analysis", date: "1 week ago" },
                { title: "Local SEO Optimization Guide", category: "Guide", date: "1 week ago" },
                { title: "Technical SEO Templates", category: "Template", date: "2 weeks ago" },
                { title: "Keyword Research Methodology", category: "Methodology", date: "2 weeks ago" }
              ].map((doc, i) => (
                <motion.div
                  key={doc.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{doc.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">{doc.category}</span>
                        <span className="text-xs text-muted-foreground">{doc.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}