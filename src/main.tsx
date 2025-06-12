import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import App from "./App.tsx";
import LoginPage from "@/auth/pages/Login.page.tsx";
import RegisterPage from "@/auth/pages/Register.page.tsx";
import VerificationPage from "@/auth/pages/Verification.page.tsx";
import GetElement from "@/components/GetElement.tsx";
import { ROUTES } from "@/utils/constants.ts";
import WaitingVerificationPage from "@/auth/pages/WaitingVerification.page.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<GetElement path="/app" />} />
        <Route path={ROUTES.APP} element={<App />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.VERIFY} element={<VerificationPage />} />
        <Route
          path={ROUTES.WAITING_VERIFICATION}
          element={<WaitingVerificationPage />}
        />
        <Route path={ROUTES.AUTH_CALLBACK} element={<div>call back</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
      <Toaster />
    </Router>
  </StrictMode>
);
