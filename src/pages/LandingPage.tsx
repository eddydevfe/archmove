import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Quotes from "../components/Quotes/Quotes";
import FooterEngage from "../components/FooterEngage/FooterEngage";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageCarousel />
      <WhyChooseUs />
      <Quotes />
      <FooterEngage />
      <Footer />
    </>
  );
};

export default LandingPage;
