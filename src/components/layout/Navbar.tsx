import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 gradient-blue rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-xl">D</span>
          </div>
          <span className={`font-heading font-bold text-xl ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
            DigitalEdge
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? isScrolled
                    ? "text-primary bg-primary/10"
                    : "text-primary-foreground bg-primary-foreground/20"
                  : isScrolled
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant={isScrolled ? "outline" : "heroOutline"} size="sm">
            Log In
          </Button>
          <Button variant={isScrolled ? "default" : "hero"} size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
                <Button variant="default" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
