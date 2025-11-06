import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IndustryApplications from "@/components/IndustryApplications";
import HotProducts from "@/components/HotProducts";
import LatestNews from "@/components/LatestNews";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <IndustryApplications />

      <HotProducts />

      <LatestNews />

      <Partners />
      

      <Footer />
    </div>
  );
};

export default Index;
