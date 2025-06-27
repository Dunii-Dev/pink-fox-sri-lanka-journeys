
import { Hero } from "@/components/Hero";
import { ProvinceShowcase } from "@/components/ProvinceShowcase";
import { CulturalHighlights } from "@/components/CulturalHighlights";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <Navigation />
      <Hero />
      <ProvinceShowcase />
      <CulturalHighlights />
      <ServicesOverview />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
