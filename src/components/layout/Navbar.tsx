import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "next-themes";
import {
  Target,
  Megaphone,
  Linkedin,
  TrendingUp,
  Search,
  Settings,
  MapPin,
  FileText,
  Users,
  Palette,
  Video,
  Sparkles,
  Globe,
  GitBranch,
  Mail,
  Zap,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services", hasMegaMenu: true },
  { name: "Case Studies", path: "/portfolio" },
  { name: "Clients", path: "/clients" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const serviceCategories = [
  {
    title: "Performance Marketing",
    description: "Lower CPA, increase ROAS",
    services: [
      {
        icon: Target,
        name: "Google Ads",
        description: "Search, Display & Shopping campaigns",
        path: "/services/google-ads",
      },
      {
        icon: Megaphone,
        name: "Meta Ads",
        description: "Facebook & Instagram advertising",
        path: "/services/meta-ads",
      },
      {
        icon: Linkedin,
        name: "LinkedIn Ads",
        description: "B2B lead generation",
        path: "/services/linkedin-ads",
      },
      {
        icon: TrendingUp,
        name: "Conversion Optimization",
        description: "CRO & A/B testing",
        path: "/services/cro",
      },
    ],
  },
  {
    title: "Organic Growth",
    description: "Rank higher, increase leads",
    services: [
      {
        icon: Search,
        name: "SEO Strategy",
        description: "Comprehensive search optimization",
        path: "/services/seo",
      },
      {
        icon: Settings,
        name: "Technical SEO",
        description: "Site structure & performance",
        path: "/services/technical-seo",
      },
      {
        icon: MapPin,
        name: "Local SEO",
        description: "Dominate local search results",
        path: "/services/local-seo",
      },
      {
        icon: FileText,
        name: "Content Marketing",
        description: "Strategic content creation",
        path: "/services/content",
      },
    ],
  },
  {
    title: "Brand & Creative",
    description: "Build demand, generate pipeline",
    services: [
      {
        icon: Users,
        name: "Social Media Management",
        description: "Community & engagement",
        path: "/services/social-media",
      },
      {
        icon: Palette,
        name: "Branding Strategy",
        description: "Identity & positioning",
        path: "/services/branding",
      },
      {
        icon: Video,
        name: "Video Marketing",
        description: "Video content & production",
        path: "/services/video",
      },
      {
        icon: Sparkles,
        name: "Creative Campaigns",
        description: "Innovative campaigns that convert",
        path: "/services/creative",
      },
    ],
  },
  {
    title: "Web & Automation",
    description: "Convert more, automate growth",
    services: [
      {
        icon: Globe,
        name: "Web Design",
        description: "High-converting websites",
        path: "/services/web-design",
      },
      {
        icon: GitBranch,
        name: "Funnel Development",
        description: "Sales & marketing funnels",
        path: "/services/funnels",
      },
      {
        icon: Mail,
        name: "Email Marketing",
        description: "Automated email sequences",
        path: "/services/email",
      },
      {
        icon: Zap,
        name: "Marketing Automation",
        description: "Streamlined workflows",
        path: "/services/automation",
      },
    ],
  },
];

const featuredCaseStudy = {
  title: "E-Commerce Brand Growth",
  result: "+312% ROAS",
  description: "How we scaled an e-commerce brand's revenue 4x in 6 months",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  path: "/portfolio/ecommerce-growth",
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const { theme } = useTheme();
  const location = useLocation();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const servicesLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        servicesLinkRef.current &&
        !servicesLinkRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServicesHover = () => {
    setIsMegaMenuOpen(true);
  };

  const handleServicesLeave = () => {
    setTimeout(() => {
      if (!megaMenuRef.current?.matches(":hover")) {
        setIsMegaMenuOpen(false);
      }
    }, 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
        style={{ zIndex: 50 }}
        data-navbar="true"
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={theme === "dark" ? "/orvixwhitebg.png" : "/orvixbluebg.png"}
              alt="Orvix Logo"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.hasMegaMenu ? (
                  <a
                    ref={servicesLinkRef}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMegaMenuOpen(!isMegaMenuOpen);
                    }}
                    onMouseEnter={handleServicesHover}
                    onMouseLeave={handleServicesLeave}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 link-underline ${
                      location.pathname.startsWith("/services") || isMegaMenuOpen
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMegaMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 link-underline ${
                      location.pathname === link.path
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="cta" size="default" asChild>
              <Link to="/contact" className="gap-2">
                Book Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu - Desktop */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            ref={megaMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            className="fixed top-[72px] left-0 right-0 z-40 hidden lg:block"
          >
            <div className="bg-background/95 backdrop-blur-xl border-b border-border shadow-xl">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Overview Column */}
                  <div className="col-span-2 border-r border-border pr-6">
                    <h3 className="font-bold text-lg mb-2">Services</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Campaign management, SEO, and CRO that improve your marketing KPIs.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/services" className="gap-2">
                        View All Services
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>

                  {/* Service Categories */}
                  <div className="col-span-8 grid grid-cols-4 gap-6">
                    {serviceCategories.map((category) => (
                      <div key={category.title}>
                        <h4 className="font-semibold text-sm text-foreground mb-1">
                          {category.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-4">
                          {category.description}
                        </p>
                        <ul className="space-y-1">
                          {category.services.map((service) => (
                            <li key={service.name}>
                              <Link
                                to={service.path}
                                className="group flex items-start gap-3 p-2 -mx-2 rounded hover:bg-accent transition-colors"
                              >
                                <service.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground mt-0.5 transition-colors" />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1">
                                    <span className="text-sm font-medium text-foreground group-hover:text-foreground">
                                      {service.name}
                                    </span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  </div>
                                  <p className="text-xs text-muted-foreground line-clamp-1">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Featured Case Study */}
                  <div className="col-span-2 border-l border-border pl-6">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Featured
                    </span>
                    <Link
                      to={featuredCaseStudy.path}
                      className="group block mt-3"
                    >
                      <div className="relative overflow-hidden rounded mb-3">
                        <img
                          src={featuredCaseStudy.image}
                          alt={featuredCaseStudy.title}
                          className="w-full h-24 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors" />
                      </div>
                      <div className="text-xl font-bold text-foreground mb-1">
                        {featuredCaseStudy.result}
                      </div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        {featuredCaseStudy.title}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {featuredCaseStudy.description}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-[72px] left-0 right-0 bottom-0 overflow-y-auto"
            >
              <nav className="container mx-auto px-4 py-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.hasMegaMenu ? (
                      <div className="border-b border-border">
                        <button
                          onClick={() =>
                            setActiveAccordion(
                              activeAccordion === link.name ? null : link.name
                            )
                          }
                          className="flex items-center justify-between w-full py-4 text-lg font-medium text-foreground"
                        >
                          {link.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              activeAccordion === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeAccordion === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 space-y-6">
                                {serviceCategories.map((category) => (
                                  <div key={category.title}>
                                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                                      {category.title}
                                    </h4>
                                    <ul className="space-y-1">
                                      {category.services.map((service) => (
                                        <li key={service.name}>
                                          <Link
                                            to={service.path}
                                            className="flex items-center gap-3 py-2 text-foreground"
                                          >
                                            <service.icon className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-sm">
                                              {service.name}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block py-4 text-lg font-medium border-b border-border ${
                          location.pathname === link.path
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Button variant="cta" size="lg" className="w-full" asChild>
                    <Link to="/contact">
                      Book Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
