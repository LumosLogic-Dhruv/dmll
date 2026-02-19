import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Lightbulb,
  Users,
  Shield,
  Award,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — NEW SECTIONS
// ─────────────────────────────────────────────────────────────────────────────

const humanDesignCards = [
  {
    title: "Openness",
    description:
      "We share knowledge freely across every level of the organisation, creating space for ideas to flourish without hierarchy.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=300&fit=crop",
  },
  {
    title: "Transparency",
    description:
      "Clear communication, honest reporting, and full visibility into every decision and result we deliver — no black boxes.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=300&fit=crop",
  },
  {
    title: "Collaboration",
    description:
      "We work as one team with our clients, partners, and each other to achieve meaningful outcomes that matter.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop",
  },
];

const teamLeaders = [
  {
    name: "Alexandra Chen",
    role: "CEO & FOUNDER",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Williams",
    role: "CHIEF STRATEGY OFFICER",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "HEAD OF PERFORMANCE",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James Park",
    role: "CREATIVE DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Elena Rodriguez",
    role: "HEAD OF SEO",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "VP OF ANALYTICS",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Mitchell",
    role: "ACCOUNT DIRECTOR",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Michael Torres",
    role: "TECHNICAL LEAD",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];

const executiveTeam = [
  {
    name: "Robert Chen",
    role: "CHAIRMAN",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Victoria Scott",
    role: "GLOBAL CEO",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Anthony Walsh",
    role: "CFO",
    image:
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Maria Santos",
    role: "CLO",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Kevin Park",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Diana Ross",
    role: "CMO",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Thomas Wright",
    role: "COO",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Laura Mitchell",
    role: "CHRO",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face",
  },
];

const capabilities = [
  "Creative & Production",
  "Media Planning & Buying",
  "Influence & PR",
  "CRM & Data",
  "Brand & Design",
  "Digital Marketing",
];

const cultureCards = [
  {
    tag: "DE&I",
    title: "Diversity, Equity & Inclusion",
    description:
      "Diverse teams build better products. Our DE&I commitment spans hiring, decision-making, leadership development, and beyond.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=300&fit=crop",
  },
  {
    tag: "ESG",
    title: "Environmental, Social & Governance",
    description:
      "Net zero by 2030. 100% renewable energy. Our ESG programme reflects our commitment to planet, people, and principled governance.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=300&fit=crop",
  },
  {
    tag: "L&D",
    title: "Learning & Development",
    description:
      "5,000+ courses, mentorship pairing, and accelerated leadership tracks. We invest in our people because their growth is our growth.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=300&fit=crop",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DATA — ORIGINAL SECTIONS
// ─────────────────────────────────────────────────────────────────────────────

const originalValues = [
  {
    icon: Target,
    title: "KPI Accountability",
    description:
      "Every campaign has defined targets: CPA, ROAS, conversion rate, or organic traffic. We report against them weekly.",
  },
  {
    icon: Lightbulb,
    title: "Testing Methodology",
    description:
      "Systematic A/B testing across ad creatives, audiences, landing pages, and bidding strategies to find what converts.",
  },
  {
    icon: Users,
    title: "Channel Expertise",
    description:
      "Google & Meta certified team. Deep specialization in paid search, paid social, SEO, and conversion optimization.",
  },
  {
    icon: Shield,
    title: "Attribution Transparency",
    description:
      "Real-time dashboards, multi-touch attribution, and weekly reporting so you see exactly where revenue comes from.",
  },
];

const originalStats = [
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "500+", label: "Campaigns Optimized" },
  { value: "312%", label: "Avg. ROAS Delivered" },
  { value: "8+", label: "Years Operating" },
];

const originalAwards = [
  "Google Premier Partner 2025",
  "Meta Business Partner",
  "Excellence in Performance Marketing",
  "SEO Agency of the Year",
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const duration = 2000;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(end);
    };
    requestAnimationFrame(tick);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

const About = () => {
  const [activeTab, setActiveTab] = useState<"leaders" | "executive">(
    "leaders"
  );

  return (
    <Layout>
      {/* =================================================================
          NEW ABOUT SECTIONS (7-section modern layout)
          ================================================================= */}

      {/* SECTION 1 — HERO BLOCK */}
      <section
        className="relative min-h-screen overflow-hidden bg-background"
        aria-label="Hero"
      >
        <div className="absolute inset-0">
          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative z-10 min-h-screen mb-10 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mx-3 md:mx-8 lg:mx-14"
          >
            <div className="relative bg-secondary rounded-t-3xl shadow-2xl px-6 md:px-12 lg:px-16 pt-10 pb-14 overflow-hidden">
              <div className="hidden sm:block absolute -top-12 -right-12 md:-top-20 md:-right-20 lg:-top-24 lg:-right-24 w-64 h-64 md:w-[35rem] md:h-[35rem] lg:w-[40rem] lg:h-[40rem] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 50% 50%' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Orvix team"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-w-4xl pr-0 sm:pr-32 md:pr-40 lg:pr-48">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xs font-bold tracking-widest text-primary uppercase mb-5"
                >
                  About Us
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-5xl md:text-7xl xl:text-8xl font-bold text-foreground leading-[0.88] mb-6"
                >
                  Celebrating{" "}
                  <span className="text-primary">
                    25&nbsp;Years
                  </span>{" "}
                  of Digital{" "}
                  <span className="italic font-light text-muted-foreground">
                    Transformation
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                  className="text-muted-foreground text-lg max-w-lg"
                >
                  Where strategy meets execution &mdash; building brands that
                  endure and delivering outcomes that matter for over two
                  decades.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — STACKED CARDS (Human by Design) */}
      <section className="bg-background py-16" aria-label="Human by Design">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <span className="text-xs font-bold tracking-widest text-primary uppercase mb-5 inline-block">
                Human by Design
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Values that shape everything we do
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our culture is rooted in three core principles — Openness,
                Transparency, and Collaboration. These aren&apos;t aspirational
                statements; they&apos;re the daily behaviours that define how we
                work with clients, partners, and each other.
              </p>
            </Reveal>

            <div className="space-y-4">
              {humanDesignCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-secondary rounded-2xl p-5 flex gap-5 items-start shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  >
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold text-foreground mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TEAM WITH TABS */}
      <section className="bg-background pb-16" aria-label="Team">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="bg-secondary rounded-3xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                  A team of diverse leaders
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Experienced specialists united by a shared commitment to
                  measurable client outcomes across every discipline.
                </p>
              </div>

              <div className="flex gap-3 mb-10 flex-wrap">
                {(
                  [
                    { id: "leaders", label: "Team Leaders" },
                    { id: "executive", label: "Executive Team" },
                  ] as { id: "leaders" | "executive"; label: string }[]
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={activeTab === tab.id}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-foreground border-border hover:border-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
                    {(
                      activeTab === "leaders" ? teamLeaders : executiveTeam
                    ).map((person, i) => (
                      <motion.div
                        key={person.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        whileHover={{ y: -6 }}
                        className="group cursor-pointer"
                      >
                        <div className="aspect-square rounded-2xl overflow-hidden mb-3 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          />
                        </div>
                        <p className="font-bold text-foreground text-sm leading-tight">
                          {person.name}
                        </p>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5 tracking-wide">
                          {person.role}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — MOSAIC STATS GRID */}
      <section className="bg-secondary/30 py-16" aria-label="Stats">
        <div className="container mx-auto px-4">
          <Reveal className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Twenty-five years of proven results
            </h2>
            <p className="text-muted-foreground mt-2">
              Numbers that reflect real outcomes, real clients, real impact.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="col-span-2 md:col-span-2 bg-background rounded-2xl p-10 flex flex-col items-center justify-center text-center h-[240px]"
            >
              <div className="text-6xl md:text-8xl font-bold text-primary">
                <CountUp end={25} suffix="+" />
              </div>
              <div className="text-foreground text-lg font-semibold mt-2">
                Years of Service
              </div>
              <div className="text-muted-foreground text-sm mt-1">Since 1999</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden h-[240px]"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="col-span-2 md:col-span-1 bg-primary rounded-2xl p-8 flex flex-col items-center justify-center text-center h-[240px]"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground">
                <CountUp end={160} />
              </div>
              <div className="text-primary-foreground/90 text-base font-medium mt-2">
                Experts Worldwide
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="col-span-1 md:col-span-1 bg-background rounded-2xl p-6 flex flex-col items-center justify-center text-center h-[210px]"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary">
                <CountUp end={3} />
              </div>
              <div className="text-foreground text-sm md:text-base font-medium mt-2">
                Work Hubs
              </div>
              <div className="text-muted-foreground text-xs mt-1">Global reach</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden h-[210px]"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop"
                alt="Office environment"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="col-span-2 md:col-span-1 bg-background rounded-2xl p-6 flex flex-col items-center justify-center text-center h-[210px]"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary">
                <CountUp end={700} suffix="+" />
              </div>
              <div className="text-foreground text-sm md:text-base font-medium mt-2">
                Projects Delivered
              </div>
              <div className="text-muted-foreground text-xs mt-1">
                Across 40+ industries
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LARGE IMAGE + CAPABILITIES CARD */}
      <section className="bg-background py-16" aria-label="Capabilities">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="bg-secondary rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-hidden aspect-[21/9] md:aspect-[21/7]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop"
                  alt="Our work environment"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 inline-block">
                    Connected Capabilities
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                    We&rsquo;re part of something larger
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    As part of a globally integrated group, we bring the combined
                    power of specialist disciplines under one connected framework
                    &mdash; giving our clients access to a full ecosystem of
                    expertise without sacrificing agility or accountability.
                  </p>
                </div>

                <div>
                  <ul className="space-y-1">
                    {capabilities.map((cap, i) => (
                      <motion.li
                        key={cap}
                        initial={{ opacity: 0, x: 14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="group flex items-center gap-3 py-3 border-b border-border last:border-0"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 flex-1">
                          {cap}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — CORE VALUES STACKED CARDS (DE&I / ESG / L&D) */}
      <section className="bg-secondary/30 py-16" aria-label="Culture and Values">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <div className="bg-background border border-border rounded-2xl p-8 md:p-10 lg:sticky lg:top-28">
                <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 inline-block">
                  Culture & Values
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Built on purpose,{" "}
                  <span className="text-primary">
                    driven by values
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our commitments to Diversity, Sustainability, and Continuous
                  Learning aren&apos;t policies &mdash; they&apos;re the
                  principles that guide every decision we make as an
                  organisation and as individuals.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {["DE&I", "ESG", "L&D"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-secondary border border-border rounded-full text-xs font-bold text-foreground tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="space-y-4">
              {cultureCards.map((card, i) => (
                <motion.div
                  key={card.tag}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-secondary rounded-2xl p-5 flex gap-5 items-start shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  >
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-1">
                      <span className="text-xs font-bold tracking-widest text-primary uppercase mb-1 inline-block">
                        {card.tag}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FEATURE CTA DUAL CARDS */}
      <section className="bg-background py-16" aria-label="Call to Action">
        <div className="container mx-auto px-4">
          <Reveal className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to work together?
            </h2>
            <p className="text-muted-foreground mt-2">
              Explore what we do or start a conversation today.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <Link to="/portfolio" className="block h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group relative border border-border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-primary/40 hover:bg-secondary/30 hover:shadow-2xl flex flex-col justify-between min-h-[280px] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 rounded-2xl" />
                  <div className="relative">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase mb-6 inline-block">
                      Our Work
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                      See how we provide business solutions that drive growth
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Explore our portfolio of campaigns, brand transformations,
                      and digital innovations that have delivered measurable
                      results across every industry.
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-3">
                    <span className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                      Explore our work
                    </span>
                    <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <Link to="/contact" className="block h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group relative border border-border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-2xl flex flex-col justify-between min-h-[280px] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 rounded-2xl" />
                  <div className="relative">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase mb-6 inline-block">
                      Get in Touch
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                      Contact us to discuss how we can help your business
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Whether you&rsquo;re looking to accelerate growth, enter
                      new markets, or transform your digital presence &mdash;
                      our team is ready to help you move forward with confidence.
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-3">
                    <span className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                      Start a conversation
                    </span>
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =================================================================
          ORIGINAL ABOUT SECTIONS (restored below new sections)
          ================================================================= */}

      {/* Belief — Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 block">
              What We Believe
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Principles that drive every campaign
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {originalValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-secondary border border-border rounded-2xl hover:border-primary/25 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 rounded-xl mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Awards & Recognition
            </h3>
            <p className="text-sm text-muted-foreground">
              Industry acknowledgment of our excellence
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {originalAwards.map((award, index) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 px-5 py-3 bg-background border border-border rounded-xl hover:border-primary/25 transition-all duration-300"
              >
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {award}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Orvix — Culture Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl mb-12"
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 block">
              Life at Orvix
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              More than just campaigns
            </h2>
            <p className="text-muted-foreground">
              We're a team of marketing operators who believe in data-driven
              decisions, continuous testing, and celebrating wins together.
            </p>
          </motion.div>

          {/* Culture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                title: "Festival Celebrations",
                image:
                  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
                description: "Team celebrations and cultural events",
              },
              {
                title: "Team Activities",
                image:
                  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
                description: "Collaborative workshops and team building",
              },
              {
                title: "Office Moments",
                image:
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
                description: "Daily life at our workspace",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
                span: "col-span-1 row-span-1",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=500&fit=crop",
                span: "col-span-1 row-span-2",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
                span: "col-span-1 row-span-1",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
                span: "col-span-1 row-span-1",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
                span: "col-span-1 row-span-1",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop",
                span: "col-span-1 row-span-2",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
                span: "col-span-1 row-span-1",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop",
                span: "col-span-1 row-span-1",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={`Office moment ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How we think about marketing
              </h2>
            </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Test Everything",
                  description:
                    "Every campaign decision is backed by A/B tests. We don't guess—we measure, analyze, and optimize based on data.",
                },
                {
                  title: "KPI Accountability",
                  description:
                    "We're measured by results, not deliverables. Every engagement has clear targets: CPA, ROAS, traffic, or conversions.",
                },
                {
                  title: "Systematic Optimization",
                  description:
                    "Weekly optimization cycles across all campaigns. Bid adjustments, creative testing, audience refinement—it never stops.",
                },
                {
                  title: "Transparent Reporting",
                  description:
                    "Real-time dashboards and weekly reports. You see exactly where budget goes and what results it generates.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-background border border-border rounded-2xl hover:border-primary/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary-foreground))_0%,_transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Want us to manage your campaigns?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Book a free strategy session. We'll audit your current marketing
              and show you where to improve ROAS, lower CPA, or increase leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary text-primary hover:bg-secondary/90 font-semibold"
                asChild
              >
                <Link to="/contact">
                  Request Growth Strategy Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
