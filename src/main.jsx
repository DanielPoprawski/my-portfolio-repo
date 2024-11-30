import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Contact from "./Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <BrowserRouter>
                        <Routes>
                                <Route element={<App/>} path="/"/>
                                <Route element={<Contact/>} path="/contact"/>
                        </Routes>
                </BrowserRouter>
        </StrictMode>
);
