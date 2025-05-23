import nodemailer from "nodemailer";
import Redis from "ioredis";

export const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT as string),
  password: process.env.REDIS_PASSWORD,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOtp = async (
  identifier: string,
  type: "email",
  otp: string
) => {
  const ttl = 300;

  if (type === "email") {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: identifier,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email OTP sent to ${identifier}`);
  }

  await redis.set(`otp:${identifier}`, otp, "EX", ttl);
};

export const verifyOtp = async (
  identifier: string,
  otp: string
): Promise<boolean> => {
  const storedOtp = await redis.get(`otp:${identifier}`);
  if (storedOtp === otp) {
    await redis.del(`otp:${identifier}`);
    return true;
  }
  return false;
};
