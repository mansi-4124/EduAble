import React, { ChangeEvent, useState } from "react";
import { ReactFormState } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { googleLogin, login } from "../api/authService";
import Header from "../components/Header";
import InputField from "../components/SignupPageComponents/InputField";
import InfoPanel from "../components/InfoPanel";
import { GoogleLogin } from "@react-oauth/google";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email: formData.email, password: formData.password });
      alert("Login successful!");
      navigate("/home");
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      console.log(credentialResponse);
      const res = await googleLogin(credentialResponse.credential as string);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      alert("Google login successful");
      navigate("/home");
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
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4"></div>
                  <InputField
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputField
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Login
                  </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                  Do not have an account?{" "}
                  <a
                    href="/signup"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Sign Up
                  </a>
                </p>
                <div className="mt-6 text-center text-gray-500 text-sm">
                  Or Login with
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

export default LoginPage;
