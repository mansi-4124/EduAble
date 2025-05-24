import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import InfoPanel from "../components/InfoPanel";
import InputField from "../components/SignupPageComponents/InputField";
import RoleSelector from "../components/SignupPageComponents/RoleSelector";
import { signup, googleSignup } from "../api/authService";
import Header from "../components/Header";

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "Buyer",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      console.log(formData);
      await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: formData.role.toLowerCase(),
      });
      alert("Signup successful! Please verify your email and phone.");
      navigate("/verify-otp", {
        state: { email: formData.email },
      });
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      console.log(credentialResponse);
      const res = await googleSignup(credentialResponse.credential as string);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      alert("Google signup successful");
      navigate("/verify-otp", {
        state: { email: res.data.email },
      });
    } catch (error: any) {
      alert(error.response?.data?.message || "Google signup failed");
    }
  };

  const handleGoogleError = () => {
    console.log("Google login failed");
  };

  return (
    <>
      <div id="webcrumbs">
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <div className="flex flex-1">
            {/* Form Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12">
              <div className="max-w-md w-full mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">
                  Join EduAble
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      id="firstName"
                      label="First Name"
                      type="text"
                      placeholder="Enter your first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <InputField
                      id="lastName"
                      label="Last Name"
                      type="text"
                      placeholder="Enter your last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <InputField
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputField
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <InputField
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Create a strong password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <InputField
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <RoleSelector value={formData.role} onChange={handleChange} />
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      required
                      className="accent-indigo-600"
                    />
                    <span className="text-sm text-gray-600">
                      I agree to the Terms of Service and Privacy Policy
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Create Account
                  </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Log in
                  </a>
                </p>
                <div className="mt-6 text-center text-gray-500 text-sm">
                  Or continue with
                </div>
                <div className="mt-4 flex justify-center">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                  />
                </div>
              </div>
            </div>
            {/* Info Section */}
            <InfoPanel />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
