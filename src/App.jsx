import Hero from "./components/hero/Hero";
import {Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
