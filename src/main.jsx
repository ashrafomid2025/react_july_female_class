import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ServicesPage from "./Services.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./about.jsx";
import ContactPage from "./contact.jsx";
import NotfoundPage from "./NotFound.jsx";
import ProductPage from "./Products.jsx";
import DetailsPage from "./details.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/product" element={<ProductPage />} />

        <Route path="/product/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
