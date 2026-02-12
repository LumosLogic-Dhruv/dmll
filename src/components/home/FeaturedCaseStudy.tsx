import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedCaseStudy = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
            Featured Case Study
          </span>
          <h2 className="text-display-sm md:text-display-md text-foreground">
            From $50K MRR to $240K MRR in 6 months
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] bg-secondary rounded overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="TechFlow SaaS case study"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground rounded">
                  B2B SaaS
                </span>
              </div>
            </div>

            {/* Results Bar */}
            <div className="mt-6 p-6 bg-foreground rounded">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-background">+312%</div>
                  <div className="text-xs text-background/60 uppercase tracking-wider">ROAS</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-background">4.8X</div>
                  <div className="text-xs text-background/60 uppercase tracking-wider">Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-background">-41%</div>
                  <div className="text-xs text-background/60 uppercase tracking-wider">CPA</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Before/Actions/After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Before */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Before
              </h3>
              <div className="p-5 bg-background border border-border rounded space-y-2">
                <p className="text-sm text-muted-foreground">
                  TechFlow was spending $40K/month on Google Ads with a 1.8X ROAS.
                  CPA was $180 and rising. Campaign structure was bloated with 200+
                  ad groups, no negative keywords, and broad match burning budget.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded">1.8X ROAS</span>
                  <span className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded">$180 CPA</span>
                  <span className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded">$50K MRR</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                What We Did
              </h3>
              <div className="p-5 bg-background border border-border rounded">
                <ul className="space-y-3">
                  {[
                    "Rebuilt account structure: consolidated 200+ ad groups into 24 tightly themed campaigns",
                    "Added 800+ negative keywords and switched to phrase/exact match targeting",
                    "Implemented retargeting layers across Google Display and Meta",
                    "Built dedicated landing pages per campaign with A/B testing",
                    "Set up multi-touch attribution tracking across full funnel",
                  ].map((action) => (
                    <li key={action} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* After */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                After 6 Months
              </h3>
              <div className="p-5 bg-background border border-border rounded space-y-2">
                <p className="text-sm text-muted-foreground">
                  ROAS increased from 1.8X to 4.8X. CPA dropped from $180 to $106.
                  MRR scaled from $50K to $240K with the same ad budget. Pipeline
                  grew 3X through retargeting and funnel optimization.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="text-xs px-2 py-1 bg-foreground text-background rounded">4.8X ROAS</span>
                  <span className="text-xs px-2 py-1 bg-foreground text-background rounded">$106 CPA</span>
                  <span className="text-xs px-2 py-1 bg-foreground text-background rounded">$240K MRR</span>
                </div>
              </div>
            </div>

            <Button variant="outline" asChild>
              <Link to="/portfolio">
                View All Case Studies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
