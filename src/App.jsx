// import Questions from "./components/Questions";
// import About from "./components/about/About";
// import Benefits from "./components/benefits/Benefits";
// import Hero from "./components/hero/Hero";
// import Solutions from "./components/solutions/Solutions";
// import Steps from "./components/steps/Steps";
import LandingPage from "./pages/LandingPage";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About/>} />
        <Route path="benefits" element={<Benefits/>} />
        <Route path="/steps" element={<Steps/>} />
        <Route path="/solution" element={<Solutions/>} />
        <Route path="/faqs" element={<Questions />} /> */}
      </Routes>
    </div>
  );
}

export default App;
