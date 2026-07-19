<<<<<<< Updated upstream
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./about.jsx";
import ServicesPage from "./Services.jsx";
import ContactPage from "./contact.jsx";
import NotfoundPage from "./NotFound.jsx";
>>>>>>> Stashed changes

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< Updated upstream
    <App />
=======
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
  </StrictMode>,
)
