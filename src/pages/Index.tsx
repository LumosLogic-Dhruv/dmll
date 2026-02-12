import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import SocialProofStrip from "@/components/home/SocialProofStrip";
import CaseStudies from "@/components/home/CaseStudies";
import ProblemsWeSolve from "@/components/home/ProblemsWeSolve";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import EngagementModel from "@/components/home/EngagementModel";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SocialProofStrip />
      <CaseStudies />
      <ProblemsWeSolve />
      <ServicesPreview />
      <FeaturedCaseStudy />
      <Process />
      <Industries />
      <Testimonials />
      <EngagementModel />
      <CTASection />
    </Layout>
  );
};

export default Index;
