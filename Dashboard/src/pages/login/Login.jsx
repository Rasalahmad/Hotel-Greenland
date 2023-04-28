import React, { useState } from "react";
import "./login.scss";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "greenland" && password === "greenland@123") {
      console.log("logged in");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-form__title">Hotel Greenland</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-form__input"
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="login-form__input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-form__submit" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
