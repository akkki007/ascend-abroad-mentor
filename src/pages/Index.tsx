import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import Services from "@/components/Services";
import About from "@/components/About";
import OfficeGallery from "@/components/OfficeGallery";
import VideoShowcase from "@/components/VideoShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { trackPageView, trackScrollDepth } from "@/lib/analytics";

const Index = () => {
  useEffect(() => {
    // Track page view on mount
    trackPageView("/", "COC Placements - Home");

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      // Track at 25%, 50%, 75%, and 100% milestones
      const milestones = [25, 50, 75, 100];
      for (const milestone of milestones) {
        if (scrollPercent >= milestone && maxScroll < milestone) {
          trackScrollDepth(milestone);
          maxScroll = milestone;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero - Primary attention grabber */}
        <Hero />

        {/* Trust Banner - Social proof strip */}
        <TrustBanner />

        {/* Services - Core offerings */}
        <Services />

        {/* About - Build credibility */}
        <About />

        {/* Gallery - Visual proof */}
        <OfficeGallery />

        {/* Video - Engagement & demonstration */}
        <VideoShowcase />

        {/* Contact - Conversion point */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
