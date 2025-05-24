import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import LoginPage from "./pages/LoginPage";
import HomePageBuyer from "./pages/HomePageBuyer";
import SpeechToText from "./pages/SpeechToTextPage";
import SpeechToTextPage from "./pages/SpeechToTextPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePageBuyer/>}/>
        <Route path="/verify-otp" element={<OTPVerificationPage />} />
        <Route path="/speech-to-text" element={<SpeechToTextPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
