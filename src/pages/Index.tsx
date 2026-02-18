import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import VideoShowcase from "@/components/home/VideoShowcase";
import SocialProofStrip from "@/components/home/SocialProofStrip";
import ProblemsWeSolve from "@/components/home/ProblemsWeSolve";
import ServicesPreview from "@/components/home/ServicesPreview";
import StickyScrollSection from "@/components/home/StickyScrollSection";

import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <VideoShowcase />
      <SocialProofStrip />
      <ProblemsWeSolve />
      <StickyScrollSection />
      <ServicesPreview />
      
      <Process />
      <Industries />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
