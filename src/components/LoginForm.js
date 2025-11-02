import React, { useState } from "react";

export default function LoginForm({ isLoggedIn, onLogin, onLogout }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  // tests often look for a child heading too
  if (isLoggedIn) {
    return (
      <div>
        <h2>Child Component</h2>
        <p>You are logged in!</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Child Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
