import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Quotes from "../components/Quotes/Quotes";
import FooterEngage from "../components/FooterEngage/FooterEngage";
import Footer from "../components/Footer/Footer";

/*

    That FooterEngage used to be inside the footer but I had to remove
    because I could not use the proper CSS for the slight gradient in 
    the whole footer and I could not do it to a single section because
    of the container.
f
*/

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
