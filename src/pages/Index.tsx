import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CaseStudies from "@/components/home/CaseStudies";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import PricingPreview from "@/components/home/PricingPreview";
import InsightsPreview from "@/components/home/InsightsPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <CaseStudies />
      <Process />
      <Testimonials />
      <PricingPreview />
      <InsightsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
