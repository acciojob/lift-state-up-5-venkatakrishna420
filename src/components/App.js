import React, { useState } from "react";
import LoginForm from "./LoginForm";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", fontFamily: "sans-serif" }}>
      {/* exact header expected by the tests */}
      <h1>Parent Component</h1>

      {/* pass state and callbacks to child */}
      <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />

      <hr />

      <div>
        <strong>Parent view:</strong>
        <p>{isLoggedIn ? "Parent: user is logged in" : "Parent: user is NOT logged in"}</p>
      </div>
    </div>
  );
}
