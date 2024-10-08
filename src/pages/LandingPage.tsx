import Navbar from "../components/Navbar/Navbar.tsx";
import Hero from "../components/Hero/Hero.tsx";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel.tsx";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs.tsx";
import Quotes from "../components/Quotes/Quotes.tsx";
import FooterEngage from "../components/FooterEngage/FooterEngage.tsx";
import Footer from "../components/Footer/Footer.tsx";

/*
    That FooterEngage used to be inside the footer but I had to remove
    because I could not use the proper CSS for the slight gradient in 
    the whole footer and I could not do it to a single section because
    of the container.
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
