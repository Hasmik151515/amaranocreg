import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email) => {
    localStorage.setItem("userEmail", email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header />
       <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Register onRegister={handleLogin} />
            )
          }
        />
      </Routes>
</> 
  );
}
