import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Contact, Projects } from "./pages/index";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Conteúdo que muda */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
      {/*  */}
    </div>
  );
}

export default App;
