import axios from "axios";
import { loginType, SignupType, VerifyOtpType } from "../types/AuthTypes";

const API_URL = "http://localhost:8001/auth";

export const signup = (data: SignupType) =>
  axios.post(`${API_URL}/signup`, data);
export const googleSignup = (googleToken: string) =>
  axios.post(`${API_URL}/google-signup`, { idToken: googleToken });
export const googleLogin = (googleToken: string) =>
  axios.post(`${API_URL}/google-login`, { idToken: googleToken });
export const verifyOTP = (data: VerifyOtpType) =>
  axios.post(`${API_URL}/verify-otp`, {
    email: data.email,
    otp: data.otp,
  });
export const resendOTP = (email: string) =>
  axios.post(`${API_URL}/resend-otp`, {
    email,
  });
export const login = (data: loginType) =>
  axios.post(`${API_URL}/login`, {
    email: data.email,
    password: data.password,
  });
