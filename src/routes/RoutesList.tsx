import { Route, Routes, Navigate } from "react-router-dom";
import { HambProvider } from "../contexts/HambContext";
import { Dashboard } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route
        path="home"
        element={
          <HambProvider>
            <Dashboard />
          </HambProvider>
        }
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
