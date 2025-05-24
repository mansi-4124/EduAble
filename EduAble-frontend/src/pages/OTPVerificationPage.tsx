import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OTPInput from "../components/OTPVerificationComponents/OTPInput";
import axios from "axios";
import Header from "../components/Header";
import { resendOTP, verifyOTP } from "../api/authService";

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const handleVerify = async () => {
    const otpCode = otp.join("");
    try {
      console.log(email);
      console.log(otpCode);
      const res = await verifyOTP({ email, otp: otpCode });
      alert("OTP verified successfully!");
      navigate("/login");
    } catch (err: any) {
      alert(err.response?.data?.message || "Invalid OTP");
    }
  };

  const handleResendOTP = async () => {
    try {
      if (!email) {
        alert("Email not found. Please go back and try again.");
        navigate("/signup");
        return;
      }

      const res = await resendOTP(email);

      alert("OTP resent successfully!");
      setOtp(Array(6).fill(""));
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to resend OTP.");
    }
  };

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  useEffect(() => {
    if (!email) {
      alert("No email provided for OTP verification.");
      navigate("/signup");
    }
  }, [email, navigate]);

  return (
    <div id="webcrumbs">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-md p-6 sm:p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl shadow-lg font-sans">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="text-indigo-700 text-3xl font-bold mb-2">
              UnityCart
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              OTP Verification
            </h1>
            <p className="text-gray-600 text-center max-w-md">
              Please enter the 6-digit verification code sent to your phone
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <OTPInput value={otp} onChange={handleChange} />
          </div>

          <div className="flex flex-col items-center space-y-5">
            <button
              onClick={handleVerify}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              Verify OTP
            </button>

            <div className="flex items-center justify-center text-gray-600 text-sm">
              <span>Didn't receive the code?</span>
              <button
                className="ml-2 text-indigo-600 font-semibold hover:text-indigo-800 hover:underline transition-colors duration-300"
                onClick={handleResendOTP}
              >
                Resend OTP
              </button>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-5">
            <div className="flex items-center justify-center text-gray-600 text-sm">
              <span className="material-symbols-outlined text-indigo-600 mr-2">
                shield
              </span>
              <p>This verification process helps us keep your account secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
