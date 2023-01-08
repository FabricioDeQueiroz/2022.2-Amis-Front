import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Alunas } from "./pages/alunas/alunas";
import { Home } from "./pages/home/home";
import { Receitas } from "./pages/receitas/receitas";
import { Assistentes } from "./pages/assistentes/assistentes";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/receitas" element={<Receitas />} />
      </Routes>
      <Routes>
        <Route path="/alunas" element={<Alunas />} />
      </Routes>
      <Routes>
        <Route path="/assistentes" element={<Assistentes />} />
      </Routes>
    </Router>
  );
}
