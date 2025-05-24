export type SignupType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: string;
};

export type VerifyOtpType = {
  email: string;
  otp: string;
};

export type loginType = {
  email: string;
  password: string;
};
