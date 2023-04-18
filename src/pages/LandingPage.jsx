import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import SignUp from "../components/signup/SignUp";
import Benefits from "../components/benefits/Benefits";
import Steps from "../components/steps/Steps";
import Solutions from "../components/solutions/Solutions";
import Footer from "../components/Footer";
import Questions from "../components/Questions";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <SignUp />
      <Benefits />
      <Steps />
      <Solutions/>
      <Questions/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
