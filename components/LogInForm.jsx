"use client";
import React, { useState } from "react";

function LogInForm({ handleLogIn }) {
  const [user, setUser] = useState({ username: " ", password: " " });
  const handleClick = (e) => {
    e.preventDefault();
    handleLogIn(user.username, user.password);
  };
  return (
    <form>
      <h2>USER LOGIN</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="email"
        value={user.username}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, username: e.target.value }))
        }
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        value={user.password}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <p>Forgot password?</p>
      <button onClick={handleClick}>Log In</button>
      <p>
        Don&apos;t have an account yet? <span>Sign Up</span>
      </p>
    </form>
  );
}

export default LogInForm;
