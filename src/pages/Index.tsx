import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { CollabHubPreview } from "@/components/landing/CollabHubPreview";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <SocialProof />
        <CollabHubPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
