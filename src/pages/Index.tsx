import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import OfficeGallery from "@/components/OfficeGallery";
import VideoShowcase from "@/components/VideoShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <OfficeGallery />
        <VideoShowcase />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
