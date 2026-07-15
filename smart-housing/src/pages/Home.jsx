import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HomeFeatures from "../components/HomeFeatures/HomeFeatures";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import MarketplacePreview from "../components/MarketplacePreview/MarketplacePreview";
import ComplaintPreview from "../components/ComplaintPreview/ComplaintPreview";
import ComunityPreview from "../components/CommunityPreview/CommunityPreview";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeFeatures />
      <HowItWorks />
      <WhyChooseUs />
      <MarketplacePreview />
      <ComplaintPreview />
      <ComunityPreview />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;