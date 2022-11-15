import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Networks from "./pages/Networks";
import Private from "./routes/Private";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <Private>
              <Admin />
            </Private>
          }
        />
        <Route
          path="/admin/social"
          element={
            <Private>
              <Networks />
            </Private>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
