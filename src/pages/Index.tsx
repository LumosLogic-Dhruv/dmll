import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsCounter from "@/components/home/StatsCounter";
import Testimonials from "@/components/home/Testimonials";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <StatsCounter />
      <Testimonials />
      <PortfolioPreview />
      <Newsletter />
    </Layout>
  );
};

export default Index;
