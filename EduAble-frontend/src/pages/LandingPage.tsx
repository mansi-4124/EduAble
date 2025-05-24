import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/LandingPageComponents/HeroSection";

function LandingPage() {
  return (
    <div id="webcrumbs">
      <div className="w-full bg-gray-50 font-sans">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}

export default LandingPage;
