import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const clientId = process.env.GOOGLE_CLIENT_ID as string;
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="572587185045-b6sqitqdnkfmbgbjmaiaguepgb2s90me.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
