import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import EPASection from "../../components/EPASection/EPASection";
import WhyJoin from "../../components/WhyJoin/WhyJoin";

import "./LandingPage.css";

const LandingPage = () => {

  return (
    <div className="landing-page">

      <Navbar />

      <Hero />

      <EPASection />

      <WhyJoin />

    </div>
  );
};

export default LandingPage;