
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Candidato from "./assets/pages/form/Candidato";
import Empresa from "./assets/pages/form/empresa/Empresa";
import Home from "./assets/pages/candidate/home/Home";

function App() {


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/candidate" element={<Candidato />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/company" element={< Home/>} />
      </Routes>

    </Router>
  )
}

export default App
