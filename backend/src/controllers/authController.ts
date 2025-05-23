import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import User from "../models/User";
import { sendOtp, redis } from "../utils/otpSender";

const JWT_SECRET = process.env.JWT_SECRET as string;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const OTP_EXPIRY_SECONDS = 300;

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const userCreated = await user.save();
    console.log(userCreated);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await redis.set(`otp:${email}`, otp, "EX", OTP_EXPIRY_SECONDS);

    await sendOtp(email, "email", otp);
    return res
      .status(201)
      .json({ message: "Signup successful, verify your email and phone" });
  } catch (err) {
    next(err);
  }
};

export const googleSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { idToken } = req.body;
    console.log(idToken);
    const ticket = await client.verifyIdToken({
      idToken,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ message: "Invalid Google token" });
    }

    const { sub: googleId, email, given_name: name } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        googleId,
        email,
        name,
        isEmailVerified: true,
      });
      const userCreated = await user.save();
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await redis.set(`otp:${email}`, otp, "EX", OTP_EXPIRY_SECONDS);

    await sendOtp(email as string, "email", otp);
    return res.status(201).json({
      message: "Signup successful, verify your email and phone",
      email,
    });
  } catch (err) {
    next(err);
  }
};

export const verifyOtp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    console.log(req.body);
    const { email, otp } = req.body;
    console.log(email, otp);
    const emailOtp = await redis.get(`otp:${email}`);

    if (emailOtp === otp) {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });

      if (emailOtp === otp) user.isEmailVerified = true;
      await user.save();

      await redis.del(`otp:${email}`);

      return res.json({ message: "OTP verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password!);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.json({ token, user });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const googleLogin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { idToken } = req.body;

    const ticket = await client.verifyIdToken({
      idToken,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ message: "Invalid Google token" });
    }

    const { sub: googleId, email } = payload;

    const user = await User.findOne({ email, googleId });
    if (!user) {
      return res.status(400).json({ message: "Google account not registered" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({ token, user });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const resendOtp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await redis.set(`otp:${email}`, otp, "EX", OTP_EXPIRY_SECONDS);

    await sendOtp(email, "email", otp);

    return res.json({ message: "OTP resent successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const forgotPassword = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await redis.set(`otp:${email}`, otp, "EX", OTP_EXPIRY_SECONDS);
    await sendOtp(email, "email", otp);

    return res.json({ message: "Reset OTP sent to email" });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const resetPassword = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, otp, newPassword } = req.body;
    const storedOtp = await redis.get(`otp:${email}`);
    if (storedOtp !== otp)
      return res.status(400).json({ message: "Invalid or expired OTP" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    await redis.del(`otp:${email}`);

    return res.json({ message: "Password reset successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};
