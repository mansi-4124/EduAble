import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/LandingPageComponents/HeroSection";
import SpeechToText from "../components/SpeechToText";

function SpeechToTextPage() {
  return (
    <div id="webcrumbs">
      <div className="w-full bg-gray-50 font-sans">
        <Header />
        <SpeechToText />
      </div>
    </div>
  );
}

export default SpeechToTextPage;