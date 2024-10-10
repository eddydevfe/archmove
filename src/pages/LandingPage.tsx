import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import ImageCarousel from "../components/image-carousel/ImageCarousel";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";
import Quotes from "../components/quotes/Quotes";
import FooterEngage from "../components/footer-engage/FooterEngage";
import Footer from "../components/footer/Footer";

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
