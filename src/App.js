import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./index.css";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/" replace /> : <Login onLogin={() => setIsLoggedIn(true)} />
          }
        />
        <Route
          path="/"
          element={
            isLoggedIn ? <Home onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </>
  );
}

export default App;
