import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import SignUp from "../sections/SignUp";
import Benefits from "../sections/Benefits";
import Steps from "../sections/Steps";
import Solutions from "../sections/Solutions";
import Footer from "../components/layout/Footer";
import FAQ from "../sections/FAQ";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <SignUp />
      <Benefits />
      <Steps />
      <Solutions/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
