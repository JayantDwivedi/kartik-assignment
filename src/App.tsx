import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LookingToDrive from "./components/LookingToDrive";
import OurPartners from "./components/OurPartners";
import OurWork from "./components/OurWork";
import Testimonials from "./components/Testimonial";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <OurWork />
      <OurPartners />
      <Testimonials />
      <LookingToDrive />
      <Footer />
    </>
  );
}

export default App;
