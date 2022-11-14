import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
