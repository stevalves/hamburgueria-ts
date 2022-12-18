import { Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="home" element={<Dashboard />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
