import { motion } from "framer-motion";
import {
  DollarSign,
  UserX,
  MousePointerClick,
  EyeOff,
  TrendingDown,
  SearchX,
} from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "High CPA eating your margins",
    description:
      "You're spending more to acquire each customer but revenue per customer hasn't changed. Your campaigns need restructuring, not more budget.",
  },
  {
    icon: UserX,
    title: "Leads that never convert to revenue",
    description:
      "Marketing reports show lead volume, but sales says they're unqualified. Your targeting, audiences, and lead scoring need alignment.",
  },
  {
    icon: MousePointerClick,
    title: "Traffic is up, conversions are flat",
    description:
      "You're driving visitors but they're not converting. Your landing pages, funnel, and offer positioning need optimization.",
  },
  {
    icon: EyeOff,
    title: "Your agency isn't transparent",
    description:
      "You get monthly decks but can't see what's actually happening in your ad accounts. You deserve real-time dashboards and weekly reporting.",
  },
  {
    icon: TrendingDown,
    title: "Ad performance plateaued",
    description:
      "Campaigns that used to work stopped scaling. Creative fatigue, audience saturation, and bid strategy need a reset.",
  },
  {
    icon: SearchX,
    title: "SEO isn't generating pipeline",
    description:
      "You've invested in content and keywords but organic traffic isn't turning into leads. Your SEO strategy needs commercial intent alignment.",
  },
];

const ProblemsWeSolve = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">
            Sound Familiar?
          </span>
          <h2 className="text-display-sm md:text-display-md lg:text-display-lg text-foreground mb-6">
            Marketing problems we solve every week
          </h2>
          <p className="text-lg text-muted-foreground">
            If any of these describe your situation, we've fixed it before —
            with measurable results.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group p-6 bg-card border border-border rounded hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-border rounded mb-4 group-hover:border-foreground/30 group-hover:bg-secondary transition-all">
                <problem.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
