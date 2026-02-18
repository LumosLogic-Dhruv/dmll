import { motion } from "framer-motion";
import {
  DollarSign,
  UserX,
  MousePointerClick,
  EyeOff,
  TrendingDown,
  TrendingUp,
  SearchX,
} from "lucide-react";

const issues = [
  { text: "High CPA eating margins", color: "#4285F4" },
  { text: "Leads not converting", color: "#0081FB" },
  { text: "Traffic up, conversions flat", color: "#0A66C2" },
  { text: "Lack of transparency", color: "#FF7A59" },
  { text: "Ad performance plateaued", color: "#96BF48" },
  { text: "SEO not generating pipeline", color: "#FF9900" },
  { text: "Poor ROAS", color: "#4285F4" },
  { text: "Wasted ad spend", color: "#0081FB" },
  { text: "Low engagement rates", color: "#0A66C2" },
];

const capabilities = [
  { icon: DollarSign, text: "Performance Marketing" },
  { icon: TrendingUp, text: "Conversion Optimization" },
  { icon: SearchX, text: "SEO Strategy" },
  { icon: MousePointerClick, text: "Paid Advertising" },
  { icon: UserX, text: "Lead Generation" },
  { icon: EyeOff, text: "Analytics & Reporting" },
];

const ProblemsWeSolve = () => {
  const firstRow = issues.slice(0, 5);
  const secondRow = issues.slice(5, 9);
  const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

  return (
    <section className="section-padding-sm bg-gradient-to-b from-secondary/10 to-background overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Issues Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Any of these issues sound familiar?
          </h2>
          <div className="space-y-6">
            {/* First Row - Right to Left */}
            <div className="relative">
              <div className="flex gap-6 animate-scroll-rtl">
                {duplicatedFirstRow.map((issue, index) => (
                  <motion.div
                    key={`rtl-${index}`}
                    className="issue-tag"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <span>{issue.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Second Row - Left to Right */}
            <div className="relative">
              <div className="flex gap-6 animate-scroll-ltr">
                {duplicatedSecondRow.map((issue, index) => (
                  <motion.div
                    key={`ltr-${index}`}
                    className="issue-tag"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <span>{issue.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            We solve challenges & help navigate change
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            If any of these describe your situation, we've fixed it before — with measurable results.
          </p>
        </motion.div>

        {/* Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Core capabilities
          </h3>
          <ul className="flex flex-row flex-wrap gap-3">
            {capabilities.map((capability, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="capability-item"
              >
                <capability.icon className="w-4 h-4 me-3 text-foreground flex-shrink-0" />
                <span className="text-sm md:text-base">
                  {capability.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .issue-tag {
          position: relative;
          padding: 0.75rem 1.5rem;
          margin: 0.5rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          font-weight: normal;
          font-size: 1.25rem;
          line-height: 1;
          white-space: nowrap;
          transition: all 0.3s;
          cursor: default;
          flex-shrink: 0;
          box-shadow: none;
        }
        @media (min-width: 1024px) {
          .issue-tag {
            padding: 1.5rem;
            font-size: 1.5rem;
          }
        }
        .capability-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0.75rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
        }
        @media (min-width: 768px) {
          .capability-item {
            padding: 1.25rem;
          }
        }
        @keyframes scroll-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes scroll-ltr {
          0% { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 40s linear infinite;
          width: max-content;
        }
        .animate-scroll-rtl:hover {
          animation-play-state: paused;
        }
        .animate-scroll-ltr {
          animation: scroll-ltr 40s linear infinite;
          width: max-content;
        }
        .animate-scroll-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ProblemsWeSolve;
