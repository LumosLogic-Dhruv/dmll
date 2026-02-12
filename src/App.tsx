import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import MagnifierCursor from "@/components/MagnifierCursor";

// Main Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import NotFound from "./pages/NotFound";

// Service Pages
import PerformanceMarketing from "./pages/services/PerformanceMarketing";
import SEOStrategy from "./pages/services/SEOStrategy";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import WebDesign from "./pages/services/WebDesign";
import ContentMarketing from "./pages/services/ContentMarketing";
import MarketingAutomation from "./pages/services/MarketingAutomation";
import AnalyticsCRO from "./pages/services/AnalyticsCRO";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem
    disableTransitionOnChange={false}
  >
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MagnifierCursor />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service Detail Pages */}
            <Route path="/services/performance" element={<PerformanceMarketing />} />
            <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/services/google-ads" element={<PerformanceMarketing />} />
            <Route path="/services/meta-ads" element={<PerformanceMarketing />} />
            <Route path="/services/linkedin-ads" element={<PerformanceMarketing />} />
            <Route path="/services/cro" element={<AnalyticsCRO />} />

            <Route path="/services/seo" element={<SEOStrategy />} />
            <Route path="/services/seo-strategy" element={<SEOStrategy />} />
            <Route path="/services/technical-seo" element={<SEOStrategy />} />
            <Route path="/services/local-seo" element={<SEOStrategy />} />

            <Route path="/services/social-media" element={<SocialMediaMarketing />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/branding" element={<SocialMediaMarketing />} />
            <Route path="/services/video" element={<SocialMediaMarketing />} />
            <Route path="/services/creative" element={<SocialMediaMarketing />} />

            <Route path="/services/web" element={<WebDesign />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/funnels" element={<WebDesign />} />

            <Route path="/services/content" element={<ContentMarketing />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />

            <Route path="/services/automation" element={<MarketingAutomation />} />
            <Route path="/services/marketing-automation" element={<MarketingAutomation />} />
            <Route path="/services/email" element={<MarketingAutomation />} />

            <Route path="/services/analytics" element={<AnalyticsCRO />} />
            <Route path="/services/analytics-cro" element={<AnalyticsCRO />} />

            {/* Insights/Blog routes */}
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/*" element={<Insights />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
