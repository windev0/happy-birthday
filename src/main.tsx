import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import App from "./App.tsx";
import LoginPage from "@/auth/pages/Login.page.tsx";
import RegisterPage from "@/auth/pages/Register.page.tsx";
import VerificationPage from "@/auth/pages/Verification.page.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";
import GetElement from "@/components/GetElement.tsx";
import { ROUTES } from "@/utils/constants.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <MainLayout>
        <Routes>
          <Route path={ROUTES.HOME} element={<GetElement path="/app" />} />
          <Route path={ROUTES.APP} element={<App />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.VERIFY} element={<VerificationPage />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </MainLayout>
    </Router>
  </StrictMode>
);
