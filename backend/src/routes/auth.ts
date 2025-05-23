import {
  Router,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
import expressAsyncHandler from "express-async-handler";

import {
  signup,
  googleSignup,
  verifyOtp,
  login,
  googleLogin,
  resendOtp,
  forgotPassword,
  resetPassword,
} from "../controllers/authController";

export const router = Router();

router.post(
  "/signup",
  expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      await signup(req, res, next);
    }
  )
);
router.post(
  "/google-signup",
  expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      await googleSignup(req, res, next);
    }
  )
);
router.post(
  "/verify-otp",
  expressAsyncHandler(async (req: Request, res: Response) => {
    await verifyOtp(req, res);
  })
);
router.post(
  "/login",
  expressAsyncHandler(async (req: Request, res: Response) => {
    await login(req, res);
  })
);
router.post(
  "/google-login",
  expressAsyncHandler(async (req: Request, res: Response) => {
    await googleLogin(req, res);
  })
);
router.post(
  "/resend-otp",
  expressAsyncHandler(async (req: Request, res: Response) => {
    await resendOtp(req, res);
  })
);
router.post(
  "/forgot-password",
  expressAsyncHandler(async (req: Request, res: Response) => {
    await forgotPassword(req, res);
  })
);
router.post(
  "/reset-password",
  expressAsyncHandler(async (req: Request, res: Response) => {
    await resetPassword(req, res);
  })
);
