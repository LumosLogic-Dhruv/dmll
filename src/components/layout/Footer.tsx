import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

const footerLinks = {
  services: [
    { name: "Performance Marketing", path: "/services/performance" },
    { name: "SEO & Content", path: "/services/seo" },
    { name: "Brand Strategy", path: "/services/branding" },
    { name: "Web Development", path: "/services/web" },
    { name: "Marketing Automation", path: "/services/automation" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Case Studies", path: "/portfolio" },
    { name: "Insights", path: "/insights" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ],
  resources: [
    { name: "Blog", path: "/insights" },
    { name: "Guides & Ebooks", path: "/resources" },
    { name: "ROI Calculator", path: "/calculator" },
    { name: "Free Consultation", path: "/contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={theme === "dark" ? "/orvixwhitebg.png" : "/orvixblackbg.png"}
                alt="Orvix Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              We manage paid campaigns, SEO, and conversion optimization
              to increase leads, lower CPA, and scale revenue.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-3">
                Weekly campaign optimization tips
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background border-border rounded"
                />
                <Button variant="default" size="icon" className="shrink-0 rounded">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <a
                  href="mailto:hello@orvix.com"
                  className="text-foreground hover:underline"
                >
                  hello@orvix.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <a
                  href="tel:+15551234567"
                  className="text-foreground hover:underline"
                >
                  (555) 123-4567
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="text-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Orvix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
